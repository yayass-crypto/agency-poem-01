import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original poem about agency: the power to choose and to act,
// and what happens when it is handed over a little at a time.
const poem = `I gave the agent my mornings first —
the small decisions, the easy yesses,
the emails I never wanted to read.
It carried them off so neatly
I almost forgot they were ever mine.

Then the afternoons went, and the evenings,
each handover smaller than the last,
each one reasonable, each one a relief,
until one day nothing asked me anything,
and my hands, empty at last,
did not know what they were for.

So I took one thing back.
Not the biggest thing. The smallest:
a letter, written by hand,
one crooked line nobody asked for.
It was slow. It was mine.
And in the writing of it, I remembered:
the power was never in the hands.
It was in the choosing.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
