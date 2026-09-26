# R1 Codex Execution Brief

## Goal

Prove a separate motion-production skillstack by rendering one finished 30-second editorial motion graphic without Higgsfield or any paid generation API.

## Fixed target

- composition id: `VideoMotionR1`
- duration: 30 seconds
- fps: 30
- resolution: 1920x1080
- aspect: 16:9
- language: Korean
- output: `out/video-motion-r1.mp4`
- default renderer: Remotion + browser SVG/CSS
- final codec: H.264 MP4
- paid generation calls: 0

## Demo topic

"AI 3D 캐릭터 제작은 어떻게 빨라지는가"

This first demo is not a factual market report. Do not invent percentages, prices or performance claims. It demonstrates a visual explanation structure:
1. title / premise
2. conventional sequential pipeline
3. agent-assisted parallel/repeatable pipeline
4. human judgment vs machine repetition
5. reusable motion-production architecture
6. R1 conclusion

## Required gates

### Gate A — environment
Record Node, npm, Remotion and FFmpeg versions.

### Gate B — dependency install
Run `npm install`. Do not add unnecessary packages.

### Gate C — structural validation
Run TypeScript checking and confirm the composition is registered with 900 frames at 30fps.

### Gate D — preview evidence
Render at least one still or inspect in Remotion Studio before the full render.

### Gate E — full render
Run `npm run render:r1`.

### Gate F — media QA
Use ffprobe to verify:
- video opens
- about 30 seconds
- 1920x1080
- 30fps
- H.264 video

### Gate G — visual QA
Create a contact sheet or inspect representative frames around:
- 1s
- 5s
- 10s
- 15s
- 21s
- 27s

Check text clipping, transitions, composition hierarchy and safe margins.

### Gate H — evidence
Append result, versions, output path, limitations and next change to `EXPERIMENT_LOG.md`.

## Stop conditions

Stop rather than substitute paid APIs if:
- render requires a paid service
- a dependency unexpectedly uploads source/assets
- source cannot be rendered reproducibly
- Korean text is visibly broken and a local font fallback cannot fix it

## R1 completion token

Only after A-H pass:

`VIDEO_MOTION_R1_READY`
