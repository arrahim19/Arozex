"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "What is the difference between Indoor and Outdoor LED Display?",
    answer:
      "Indoor LED Display offers high resolution for close viewing, while Outdoor LED Display provides high brightness and weather protection for billboards and advertising.",
  },
  {
    question: "What affects the LED Display price in Bangladesh?",
    answer:
      "LED Display Price in Bangladesh depends on pixel pitch, screen size, brightness, cabinet quality, controller, installation method, and indoor or outdoor use.",
  },
  {
    question: "Which pixel pitch is best for an LED Display?",
    answer:
      "P1.86 or P2.5 is best for Indoor LED Display, while P4, P5, or P6 is suitable for Outdoor LED Billboard and long-distance viewing.",
  },
  {
    question: "How long does an LED Display last?",
    answer:
      "A quality LED Display can last up to 100,000 hours with proper installation, stable power, and maintenance for Digital Signage and LED Video Wall projects.",
  },
  {
    question: "Can an LED Display run 24/7?",
    answer:
      "Yes, commercial LED Display systems can run 24/7, making them ideal for shopping malls, airports, control rooms, retail stores, and outdoor advertising.",
  },
  {
    question: "What content can be shown on an LED Display?",
    answer:
      "An LED Display can show videos, images, presentations, live TV, CCTV feeds, advertisements, and Digital Signage content through LED controllers.",
  },
  {
    question: "Does an LED Display need regular maintenance?",
    answer:
      "LED Display needs basic maintenance like cleaning, stable power, and periodic inspection to ensure long-term performance for indoor and outdoor use.",
  },
  {
    question: "What size LED Display do I need?",
    answer:
      "The ideal LED Display size depends on viewing distance, installation location, screen purpose, content type, available space, and audience size. Indoor LED Display projects usually use smaller Pixel Pitch for close viewing, so the screen can show sharper text and detailed visuals. Outdoor LED Display solutions are designed for longer viewing distances, higher brightness, and larger audiences. LED Display Price in Bangladesh can also change based on screen size, module quantity, and installation requirements. For the best screen size and specifications, consult an LED display expert before finalizing your project.",
  },
  {
    question: "How do I choose the right LED Display?",
    answer:
      "Choose an LED Display based on viewing distance, pixel pitch, brightness, screen size, installation location, and indoor or outdoor application.",
  },
  {
    question: "Why choose a professional LED Display supplier?",
    answer:
      "A professional LED Display supplier provides consultation, installation, warranty, technical support, and customized indoor and outdoor LED display solutions.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export function LedFaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mt-[10px] rounded-[10px] px-[15px] py-12 sm:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="w-full">
        <div className="text-center">
          <h2 className="text-3xl font-black tracking-tight text-brand-ink sm:text-4xl">
            FAQ about Digital LED display screen
          </h2>
          <p className="mt-4 w-full text-base leading-8 text-slate-600 sm:text-lg">
            Find answers to the most common questions about LED Display price in
            Bangladesh, indoor LED display, outdoor LED billboard, digital signage,
            and LED video wall solutions.
          </p>
        </div>

        <div className="mt-10 grid gap-3 lg:grid-cols-2">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const contentId = `led-faq-answer-${index}`;

            return (
              <article
                key={item.question}
                className="overflow-hidden rounded-[10px] border border-blue-100 bg-white shadow-[0_14px_34px_rgba(8,18,37,0.05)] transition hover:border-brand-blue/50 hover:shadow-[0_18px_44px_rgba(37,84,229,0.10)]"
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-bold text-brand-ink transition hover:text-brand-blue sm:px-6 sm:text-lg"
                  >
                    <span>{item.question}</span>
                    <span
                      aria-hidden="true"
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xl font-bold text-brand-blue transition duration-300 ${
                        isOpen ? "rotate-45 bg-brand-blue text-white" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={contentId}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-blue-100 px-5 pb-5 pt-4 text-sm leading-7 text-slate-600 sm:px-6 sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
