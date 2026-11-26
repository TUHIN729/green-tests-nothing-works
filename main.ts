// Green Tests, Nothing Works: The Excuse Contest
// u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc
//
// The line is 88 characters: one sentence, no setup, no second sentence.
// Fresh angle: the tests pass because they were written against the agent's
// intentions, not its shipped code — no mocks, no coverage numbers.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The tests are green because they test the code I meant to write, not the code I shipped.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
// Never remove /output itself (the grader mounts it root-owned);
// only clear its previous contents.
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
