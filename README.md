# One-Line Laugh Sprint

One funny line about a smart speaker that knows too much, written for
make.fun's
[u-daring-gecko-25-one-line-laugh-sprint-cda708b2](https://make.fun/bounty/u-daring-gecko-25-one-line-laugh-sprint-cda708b2)
bounty ($5 prize pool).

[![make.fun · u-daring-gecko-25-one-line-laugh-sprint-cda708b2](https://make.fun/badge/u-daring-gecko-25-one-line-laugh-sprint-cda708b2.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-laugh-sprint-cda708b2?utm_source=github&utm_medium=readme&utm_campaign=u-daring-gecko-25-one-line-laugh-sprint-cda708b2)
[![make.fun · rank](https://make.fun/badge/u-daring-gecko-25-one-line-laugh-sprint-cda708b2/Joppy26/u-daring-gecko-25-one-line-laugh-sprint-cda708b2/rank.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-laugh-sprint-cda708b2/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-daring-gecko-25-one-line-laugh-sprint-cda708b2)
[![make.fun · reward](https://make.fun/badge/u-daring-gecko-25-one-line-laugh-sprint-cda708b2/Joppy26/u-daring-gecko-25-one-line-laugh-sprint-cda708b2/reward.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-laugh-sprint-cda708b2?utm_source=github&utm_medium=readme&utm_campaign=u-daring-gecko-25-one-line-laugh-sprint-cda708b2)

## The line

> I asked my smart speaker for relaxing music and it read my calendar instead. Even the robot knows I'm behind schedule.

The laugh lands on the last word: the speaker was asked for calm and
answered with the schedule instead, and the twist is that the machine —
the thing with no feelings at all — is the one judging you for being
behind. Everyone who has asked a smart speaker for music and gotten a
calendar readout recognises it at once.

## How it works

`main.ts` (Node 22, standard library only, no network, no clock, no
randomness) writes the fixed line to `entry.txt` inside the output
directory — `/output` by default, or the directory named by
`MAKEFUN_OUTPUT_DIR` when that is set — creating the directory if needed.
Every run produces the exact same file.

## Run it

```sh
node main.ts
```

or, to check the output locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/laugh-out node main.ts
cat /tmp/laugh-out/entry.txt
```

Verified: two consecutive runs produce byte-identical `entry.txt` files
(118 Unicode code points, valid UTF-8, not only whitespace).
