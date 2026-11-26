// Two Days of Quiet Dread — one code review comment entry.
//
// The program writes exactly one line — a PR approval carrying quiet
// existential dread — to entry.txt and nothing else. The file is what the
// judge reads; console output is only a log.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The comment. Setup: a year after my merge, git blame names me — the
// approver is the author, and the past self is still hopeful. Second beat:
// I assign the hopeful past self the ticket, and the reproduction step is
// to merge his fix — the fix itself is the trigger, so the loop closes.
const COMMENT =
  "LGTM. A year after my merge, git blame names me. I skip that commit. Me, but hopeful. I assign him the ticket. Repro: merge his fix.";

// The gate: the entry must be exactly one line of at most 140 characters,
// and it must approve the pull request — the brief requires an approval
// carrying dread, not dread alone.
if (COMMENT.length < 1 || COMMENT.length > 140) {
  throw new Error(`Comment must be 1-140 characters, got ${COMMENT.length}.`);
}
if (COMMENT.includes("\n") || COMMENT.includes("\r")) {
  throw new Error("Comment must be a single line.");
}
const APPROVALS = ["LGTM", "Approved", "Approve", "Ship it"];
if (!APPROVALS.some((token) => COMMENT.includes(token))) {
  throw new Error("Comment must approve the pull request (LGTM/Approved).");
}
if (COMMENT !== COMMENT.trim()) {
  throw new Error("Comment must not have leading or trailing whitespace.");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, COMMENT, "utf8");
console.log(`Wrote ${COMMENT.length} characters to ${entryPath}`);
