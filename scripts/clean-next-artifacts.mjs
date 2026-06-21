import { existsSync, rmSync } from "node:fs";
import { resolve } from "node:path";
import { execFileSync } from "node:child_process";
import { platform } from "node:os";

const scope = process.argv[2] ?? "all";
const devPort = 3000;

const targetsByScope = {
  all: [".next", ".next-build", "out"],
  dev: [".next"],
  build: [".next-build", "out"],
};

const targets = targetsByScope[scope];

if (!targets) {
  console.error("Usage: node scripts/clean-next-artifacts.mjs [all|dev|build]");
  process.exit(1);
}

function commandOutput(command, args) {
  try {
    return execFileSync(command, args, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] });
  } catch {
    return "";
  }
}

function hasWindowsDevServer() {
  const output = commandOutput("netstat", ["-ano"]);
  const pattern = new RegExp(`^\\s*TCP\\s+\\S+:${devPort}\\s+\\S+\\s+LISTENING\\s+\\d+`, "im");

  return pattern.test(output);
}

function hasUnixDevServer() {
  const ssOutput = commandOutput("ss", ["-ltn"]);
  const netstatOutput = ssOutput || commandOutput("netstat", ["-ltn"]);
  const pattern = new RegExp(`(^|\\s)(127\\.0\\.0\\.1:|0\\.0\\.0\\.0:|\\[::\\]:|:::)?${devPort}\\s`, "m");

  return pattern.test(netstatOutput);
}

function hasDevServer() {
  if (process.env.VERCEL || process.env.CI || process.env.FORCE_CLEAN_NEXT) {
    return false;
  }

  return platform() === "win32" ? hasWindowsDevServer() : hasUnixDevServer();
}

if (targets.includes(".next") && hasDevServer()) {
  console.error("Stop npm run dev before cleaning .next.");
  process.exit(1);
}

for (const target of targets) {
  const path = resolve(process.cwd(), target);

  if (existsSync(path)) {
    rmSync(path, { force: true, recursive: true });
  }
}
