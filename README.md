# 望春风 Chimera

A browser performance of the Taiwanese song **望春风** (Wang Chun Feng / Bāng Chhun-hong), sung by physically modeled voices. Five 3D heads replay a pre-rendered lead-and-harmony arrangement in Chimera's duet view.

**Live site:** [https://wangchunfeng-chimera.wangzehan.com/?show=wangchunfeng](https://wangchunfeng-chimera.wangzehan.com/?show=wangchunfeng)

Also available at [https://wangchunfeng-chimera.pages.dev/?show=wangchunfeng](https://wangchunfeng-chimera.pages.dev/?show=wangchunfeng).

## Credits

- **Engine:** The voices are produced by [Chimera](https://github.com/jamesondh/chimera-vocal-synth), a physical-modeling vocal synthesizer ([MIT](LICENSE)). Every sound comes from a simulated airway (lungs, vocal folds, a branched vocal tract, lips, nose), not from samples.
- **五线谱 (five-line score):** The arrangement used for this performance comes from [this MuseScore score](https://musescore.com/user/36943686/scores/23674888).

## Run it

This checkout is based on the Chimera engine above. You need Rust with the `wasm32-unknown-unknown` target, and Bun.

```sh
bun install
bun run dev        # builds the wasm, then Vite on 127.0.0.1:5317
```

Open `/?show=wangchunfeng` (the default) for this performance, or `/?wall` for Chimera's interactive voice wall. The AudioWorklet needs a secure context, so use localhost or HTTPS.

## License

[MIT](LICENSE). Bundled third-party files keep their own licenses: the CMU Pronouncing Dictionary ([public/data/CMUDICT-LICENSE.txt](public/data/CMUDICT-LICENSE.txt)) and the fonts ([public/fonts/](public/fonts/)).
