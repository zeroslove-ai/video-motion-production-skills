---
name: video-motion-remotion
description: Implement deterministic motion-graphics scenes in Remotion using React, SVG and CSS with reproducible frame-based timing, live text, modular scenes and local rendering.
---

# Video Motion Remotion

## Build rules
1. Register explicit duration, fps, width and height.
2. Use frame-derived animation only.
3. Use spring/interpolate with bounded ranges.
4. Keep visible text live whenever possible.
5. Prefer SVG for arrows, diagrams, charts and simple icons.
6. Avoid remote fonts or assets during render.
7. Keep scene components modular and keyed to storyboard ids.
8. Keep important content inside safe margins.
9. Use local system font fallbacks for Korean unless a redistributable font is deliberately bundled.
10. Render a still or short preview before full output.

## Reproducibility
Do not use unseeded randomness. Do not fetch runtime data from the network during render.

## Delivery
Default R1 output is H.264 MP4. Verify dimensions, fps and duration with ffprobe.
