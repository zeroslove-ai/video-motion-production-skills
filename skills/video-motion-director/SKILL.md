---
name: video-motion-director
description: Orchestrate editorial motion graphics, kinetic typography, infographic, collage, UI, map and code-driven explainer videos. Use when the primary deliverable is motion design rather than cinematic footage. Route each scene to the lightest reproducible renderer and keep paid generative video optional.
---

# Video Motion Director

Treat motion graphics as a scene graph with a locked visual grammar.

## Workflow

1. Define duration, fps, aspect ratio, language, audience and delivery format.
2. If cinematic footage or 3D character animation dominates, route to the separate video-production stack.
3. Write a compact motion brief: message, scene timings, visual grammar, text hierarchy, assets, renderer route and acceptance gates.
4. Storyboard before asset or video generation.
5. Lock the style profile before scene implementation.
6. Prefer renderers in this order unless the shot demands otherwise: live text + SVG/CSS/React; Remotion; deterministic raster assets; Blender/Three.js; local generative video; paid cloud generative video.
7. Keep every scene independently replaceable.
8. Assemble, render, then run video-motion-qa.

## Renderer independence

Scene contracts describe intent, timing and required layers. They must not encode one provider as mandatory. A scene may later switch from Remotion to Higgsfield, Wan, Blender or another adapter without rewriting the whole storyboard.

## Cost rule

Do not invoke a paid generation backend merely because it is available. First prove that deterministic motion cannot meet the visual goal efficiently.

## Completion evidence

Record source revision, render command, output metadata, representative frames, failed gates, manual intervention and paid-generation count.
