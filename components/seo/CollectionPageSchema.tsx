import { generateCanonical } from "@/lib/seo";

import { JsonLd } from "./JsonLd";

type CollectionPageSchemaProps = {
  name: string;
  url: string;
  description: string;
  itemList?: {
    name: string;
    url: string;
  }[];
};

const MAX_ABOUT_TOPICS = 8;

const TOPIC_GROUPS = [
  {
    matches: ["led display", "led screen", "led video wall", "digital signage"],
    topics: [
      "LED Display",
      "LED Display Price in Bangladesh",
      "Indoor LED Display",
      "Outdoor LED Display",
      "LED Video Wall",
      "Digital Signage",
      "LED Billboard",
      "Commercial LED Display",
    ],
  },
  {
    matches: ["conference system", "conference microphone"],
    topics: [
      "Conference System",
      "Chairman Microphone",
      "Delegate Microphone",
      "Digital Conference System",
    ],
  },
  {
    matches: ["pa system", "public address system"],
    topics: [
      "PA System",
      "Public Address System",
      "Mixer Amplifier",
      "Horn Speaker",
    ],
  },
] as const;

const MODEL_TOPIC_PATTERN = /\bp\d+(?:[.-]\d+)?\b/i;

function titleCaseTopic(value: string) {
  const acronyms: Record<string, string> = {
    cob: "COB",
    led: "LED",
    pa: "PA",
  };

  return value
    .split(" ")
    .map((word) => acronyms[word.toLowerCase()] ?? word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function cleanTopic(value: string) {
  const cleaned = value
    .replace(/[-_]+/g, " ")
    .replace(/\b(price|cost|list)\s+(in|for)\s+bangladesh\b/gi, "")
    .replace(/\bin\s+bangladesh\b/gi, "")
    .replace(/\bbangladesh\b/gi, "")
    .replace(/\b20\d{2}\b/g, "")
    .replace(/\bfrom\s+arozex\b/gi, "")
    .replace(/\barozex\s+technologies?\b/gi, "")
    .replace(/\s+/g, " ")
    .replace(/^[^\w]+|[^\w]+$/g, "")
    .trim();

  return cleaned ? titleCaseTopic(cleaned) : "";
}

function getCategoryTopicFromUrl(url: string) {
  try {
    const pathname = new URL(url).pathname;
    const slug = pathname.split("/").filter(Boolean).at(-1);

    return slug ? cleanTopic(slug) : "";
  } catch {
    return "";
  }
}

function addTopic(topics: string[], topic: string) {
  if (!topic) {
    return;
  }

  if (MODEL_TOPIC_PATTERN.test(topic)) {
    return;
  }

  const normalizedTopic = topic.toLowerCase();
  const isDuplicate = topics.some(
    (existingTopic) => existingTopic.toLowerCase() === normalizedTopic,
  );

  if (!isDuplicate && topics.length < MAX_ABOUT_TOPICS) {
    topics.push(topic);
  }
}

function createAboutTopics({
  name,
  url,
  description,
}: Pick<CollectionPageSchemaProps, "name" | "url" | "description">) {
  const topics: string[] = [];
  const sourceText = [name, url, description].join(" ").toLowerCase();

  addTopic(topics, cleanTopic(name));
  addTopic(topics, getCategoryTopicFromUrl(url));

  TOPIC_GROUPS.forEach((group) => {
    if (group.matches.some((match) => sourceText.includes(match))) {
      group.topics.forEach((topic) => addTopic(topics, topic));
    }
  });

  return topics;
}

export function CollectionPageSchema({
  name,
  url,
  description,
  itemList,
}: CollectionPageSchemaProps) {
  const aboutTopics = createAboutTopics({ name, url, description });
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collectionpage`,
    name,
    url,
    description,
    isPartOf: {
      "@id": `${generateCanonical("/")}#website`,
    },
    about: aboutTopics.map((topic) => ({
      "@type": "Thing",
      name: topic,
    })),
  };

  if (itemList?.length) {
    schema.mainEntity = {
      "@type": "ItemList",
      itemListElement: itemList.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: item.url,
      })),
    };
  }

  return <JsonLd data={schema} />;
}
