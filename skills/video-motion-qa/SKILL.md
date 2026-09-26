---
name: video-motion-qa
description: Verify code-driven motion graphics for timing, text integrity, safe margins, hierarchy, transitions, media metadata, reproducibility and scene-level repairability.
---

# Video Motion QA

Run gates in order.

1. Source gate — intended brief/storyboard/style identified; no unapproved paid renderer; unsupported factual numbers absent.
2. Structural gate — composition id exists; total frames match duration x fps; scene ranges intentionally cover timeline.
3. Text gate — Korean glyphs render; no clipping; readable contrast; safe margins; clear hierarchy.
4. Motion gate — inspect transitions for jumps, flicker, wrong direction, premature exits, unreadably fast copy and conflicting motion.
5. Visual gate — inspect representative frames at native aspect ratio for alignment, spacing, balance and consistency.
6. Media gate — ffprobe duration, dimensions, fps, codec/container and end playback.
7. Reproducibility gate — output rebuilds from repository source and documented commands.

When a gate fails, report the smallest failing scene and bounded fix. Do not hide a scene failure behind an overall aesthetic PASS.
