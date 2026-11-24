// One-star cat review entry for make.fun competition
// u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990
// "Make the AI Judge Laugh: Cat Reviews Its Human"
// Writes the entry line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt). Node stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "One star. My human cannot groom himself, has never caught a bird, and sleeps eight hours like a coward. I am raising him anyway.";

const MAX_CHARS = 200;

function validateEntry(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1 to ${MAX_CHARS} characters, got ${text.length}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (text !== text.trim()) {
    throw new Error("entry must not start or end with white space");
  }
  if (!text.startsWith("One star")) {
    throw new Error("entry must keep the deadpan one-star review shape");
  }
}

function main(): void {
  validateEntry(ENTRY);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf8");
  console.log(`wrote ${ENTRY.length} chars to ${outPath}`);
}

main();
