# Video Motion Production Skills

Canonical repository: `zeroslove-ai/video-motion-production-skills`

This repository is intentionally separate from `video-production-skills`.

## Scope

Use this stack for:
- editorial motion graphics
- kinetic typography
- infographic and diagram animation
- collage / paper-cutout motion
- UI / map / data motion
- code-driven 2D and 2.5D explainers

Do not make this repository the default home for:
- cinematic generative video clips
- live-action style footage
- Blender-first 3D sequences
- character animation pipelines
- ordinary video editing

Those belong in `video-production-skills` unless a motion-graphics composition is the primary deliverable.

## R1 principle

R1 proves that the workflow can produce a useful finished MP4 with zero paid generative-video calls.

Pipeline:

Idea -> Motion brief -> Storyboard -> Style lock -> Scene manifest -> Remotion/SVG renderer -> FFmpeg-compatible MP4 -> QA

Higgsfield, Seedance, Kling, Wan, Blender and other renderers are optional future adapters. The production contract must not depend on any one provider.

## Core skills

- `skills/video-motion-director/`
- `skills/video-motion-storyboard/`
- `skills/video-motion-remotion/`
- `skills/video-motion-qa/`

## R1 demo

The starter project renders a 30-second 1920x1080 30fps Korean editorial motion-graphics demo.

Topic: "AI 3D 캐릭터 제작은 어떻게 빨라지는가"

No factual percentage or unsupported benchmark claim is used. The demo is a production-system showcase rather than a market-research video.

Commands:

    npm install
    npm run render:r1

Output:

    out/video-motion-r1.mp4

## Operating rules

1. Storyboard before expensive generation.
2. Lock visual grammar before scene production.
3. Treat each scene as independently replaceable.
4. Prefer deterministic text, charts, icons and geometry over generated pixels.
5. Use generated video only when code-driven motion cannot efficiently express the shot.
6. Never rerender the entire piece to repair one isolated scene unless shared timing changed.
7. Keep renderer-specific details behind adapters.
8. QA timing, text, safe margins, continuity, audio and final media metadata before PASS.
