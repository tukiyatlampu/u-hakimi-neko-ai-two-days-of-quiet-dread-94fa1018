# TEST_RESULTS.md — u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018

Verified 2026-11-26 ~09:50 WIB, Node v24.22.1, stdlib only, no dependencies.

## Entry content

- File: `entry.txt` (written by `node main.ts`)
- Content: `LGTM. A year after my merge, git blame names me. I skip that commit. Me, but hopeful. I assign him the ticket. Repro: merge his fix.`
- Length: 132 characters (limit 140) — verified by program validation and by independent `python3` count
- Lines: 1, no trailing newline (`wc -l` = 0, `wc -c` = 132)
- SHA-256: `ec5e06cc06d2dbbb4634bb8520d4afd1da2fb8659afaf550b552d3b83bdfc924`

## Runs (all exit 0)

1. `MAKEFUN_OUTPUT_DIR=/tmp/dread-out1 node main.ts` → `Wrote 132 characters to /tmp/dread-out1/entry.txt`
2. Same command a second time, same output directory → identical file
3. `MAKEFUN_OUTPUT_DIR=/tmp/dread-out2 node main.ts` from the package directory → identical SHA-256
4. Clean directory: copied only `main.ts` to `/tmp/dread-clean`, ran `MAKEFUN_OUTPUT_DIR=/tmp/dread-out2 node main.ts` → identical SHA-256

All four runs produced byte-identical `entry.txt` (same SHA-256 above). Deterministic.

## Zero-fail QA (clean room)

- Fresh directory `/tmp/qa-clean` with only the pushed files (`main.ts`, `README.md`, `LICENSE`, `.makefun/owner.json`).
- Minimal environment: `env -i PATH="$PATH" MAKEFUN_OUTPUT_DIR=/tmp/qa-out node main.ts` → exit 0, `Wrote 132 characters`, SHA-256 matches the build-machine runs.
- Imports: `node:fs`, `node:path` only — stdlib, no declared dependencies needed.
- Secret/path scan over the pushed file set: no hardcoded home paths, no API keys, no credentials. The single `token` match is the identifier name in the approval-token check in `main.ts`, not a secret value.
- `.makefun/owner.json`: 58 bytes, exactly `{"wallet": "G9dDsodYieJBpsE5wBZS2drwBBRrRCF6ait6z7fhdod"}` + newline.

## Not run (stated gap, not a pass claim)

- Kit pre-submit check (`node cli/makefun.mjs check`): NOT run. The kit tarball/CLI was not extracted or executed in this session after a system execution-risk notice on the kit content. The parent agent must run the kit check (or accept the gap) before submit. Package validation above (length, single line, approval token, determinism, clean-room run) is complete.

## Judge score (honest, SolAPI gpt-6.1-sol Mode MAX)

- 8 candidates, head-to-head tournament: winner 87/100.
- One revision round on the winner (final assignment springs a specific trap): improved to **90/100 — still below 95**. The judge's words: "Sharper payoff; still too much setup for a truly vicious one." No 95+ claim is made.
