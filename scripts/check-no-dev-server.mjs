import { execFileSync } from "node:child_process";
import { platform } from "node:os";

const port = 3000;

if (process.env.VERCEL || process.env.CI) {
  process.exit(0);
}

function commandOutput(command, args) {
  try {
    return execFileSync(command, args, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] });
  } catch {
    return "";
  }
}

function hasWindowsListener() {
  const output = commandOutput("netstat", ["-ano"]);
  const pattern = new RegExp(`^\\s*TCP\\s+\\S+:${port}\\s+\\S+\\s+LISTENING\\s+\\d+`, "im");

  return pattern.test(output);
}

function hasUnixListener() {
  const ssOutput = commandOutput("ss", ["-ltn"]);
  const netstatOutput = ssOutput || commandOutput("netstat", ["-ltn"]);
  const pattern = new RegExp(`(^|\\s)(127\\.0\\.0\\.1:|0\\.0\\.0\\.0:|\\[::\\]:|:::)?${port}\\s`, "m");

  return pattern.test(netstatOutput);
}

const hasListener = platform() === "win32" ? hasWindowsListener() : hasUnixListener();

if (hasListener) {
  console.error("Stop the running dev server on port 3000 before continuing.");
  process.exit(1);
}
