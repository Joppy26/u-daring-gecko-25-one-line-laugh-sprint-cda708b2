// One-Line Laugh Sprint — make.fun entry for
// u-daring-gecko-25-one-line-laugh-sprint-cda708b2.
//
// One fixed one-line joke about a smart speaker and a calendar.
// No network, no clock, no randomness: every run writes the exact
// same entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I asked my smart speaker for relaxing music and it read my calendar instead. Even the robot knows I'm behind schedule.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, JOKE, { encoding: "utf8" });
}

main();
