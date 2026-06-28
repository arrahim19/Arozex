import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, resolve } from "node:path";

const root = resolve(".next-build");
const port = Number(process.env.PORT ?? 3000);

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8",
};

function getFilePath(requestUrl) {
  const pathname = decodeURIComponent(new URL(requestUrl, "http://localhost").pathname);
  const candidate = resolve(join(root, pathname));

  if (!candidate.startsWith(root)) {
    return null;
  }

  if (existsSync(candidate)) {
    const stats = statSync(candidate);

    if (stats.isDirectory()) {
      return join(candidate, "index.html");
    }

    if (stats.isFile()) {
      return candidate;
    }
  }

  if (!extname(candidate)) {
    return join(candidate, "index.html");
  }

  return join(root, "404.html");
}

createServer((req, res) => {
  const filePath = getFilePath(req.url ?? "/");

  if (!filePath) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  if (!existsSync(filePath)) {
    res.writeHead(404);
    res.end("Not found");
    return;
  }

  res.writeHead(200, {
    "Content-Type": contentTypes[extname(filePath).toLowerCase()] ?? "application/octet-stream",
  });

  createReadStream(filePath).pipe(res);
}).listen(port, "0.0.0.0", () => {
  console.log(`Static preview running at http://localhost:${port}`);
});
