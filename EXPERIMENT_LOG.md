# Experiment Log

## Entry template

### YYYY-MM-DD — experiment
- Task:
- Source revision:
- Node/npm:
- Remotion:
- FFmpeg:
- Input:
- Output:
- Paid generation calls:
- Result: PASS / PARTIAL / FAIL
- Evidence:
- Failure/friction:
- Manual intervention:
- Reusable learning:
- Proposed next change:

---

## 2026-09-26 — R1 zero-paid-generation editorial motion proof
- Task: Bootstrap the independent motion-production skillstack and render one finished 30-second Korean editorial motion graphic without a paid generation backend.
- Source revision: R1 implementation commit `380b136ca7d8bec6ff4eb0d8c03cc5cc2c7eceff`.
- Node/npm: Node v24.18.0 / npm 12.0.2
- Remotion: 4.0.529
- FFmpeg: 9.0.1 full build
- Input: repository-local brief, style profile and six-scene storyboard; no external media assets.
- Output: `out/video-motion-r1.mp4`
- Output metadata: H.264, 1920x1080, 30/1 fps, exactly 30.000000 seconds, 1,854,961 bytes on final QA run.
- Paid generation calls: 0
- Result: PASS
- Evidence:
  - `npx tsc --noEmit` PASS.
  - `out/video-motion-r1-cover.png` rendered successfully.
  - ffprobe verified H.264 / 1920x1080 / 30fps / 30.000000s.
  - `scripts/qa-r1.ps1` extracted representative frames and exact scene-boundary frames at 3.5s, 9s, 15s, 20.5s and 26.5s.
  - Visual inspection confirmed Korean glyphs, safe margins and editorial hierarchy.
- Failure/friction:
  - First QA found a full-black frame at the 15.0s scene boundary because a generic Scene-level fade reset opacity to zero on every new Sequence.
  - First QA frame-extraction wrapper treated normal FFmpeg stderr output as a PowerShell error.
  - The second background render wrapper hit its 120-second job timeout after the encoder had produced the complete artifact; independent ffprobe and frame extraction validated the resulting file.
- Manual intervention: none in the creative build; the agent corrected the QA wrapper and scene-boundary opacity based on evidence.
- Reusable learning:
  - Do not apply a zero-opacity entrance to the entire scene wrapper at hard sequence boundaries.
  - Keep common background/chrome visible and animate content layers independently.
  - QA exact scene boundaries, not only aesthetically convenient representative timestamps.
  - Higgsfield-style storyboard/style-lock/scene-isolation semantics are reproducible without using Higgsfield as the renderer.
- Current limitation: R1 is intentionally silent; narration, music and audio mix are not yet part of this proof.
- Proposed next change: R1.1 parameterize copy/storyboard inputs and add an optional local or explicitly approved TTS/audio lane before adding any cloud video renderer.
