# Architecture

## Product boundary

`video-production-skills`
- cinematic or footage-led video
- Blender-first 3D
- generative video clips
- character or camera-heavy sequences
- broader edit/assembly

`video-motion-production-skills`
- editorial explainers
- kinetic typography
- infographic / diagram / chart
- collage / cutout
- UI / map motion
- deterministic 2D / 2.5D composition

A final project may use both, but one repository should remain the primary director.

## Canonical motion pipeline

USER INTENT
-> MOTION BRIEF
-> STORYBOARD
-> STYLE LOCK
-> SCENE CONTRACTS
-> RENDERER ROUTING
-> PREVIEW
-> SCENE RENDER
-> ASSEMBLY
-> QA
-> DELIVERY

## Why this mirrors the useful part of Higgsfield

The valuable pattern is not "always render in Higgsfield." It is:
- turn an idea into production stages;
- approve structure before expensive generation;
- keep style coherent;
- isolate scenes;
- regenerate only failures;
- assemble and verify at the end.

This repository implements those production semantics independently.

## R1 renderer contract

The R1 scene renderer consumes:
- start/end frames
- copy
- layer description
- motion intent
- transition intent
- acceptance notes

The default implementation is React/Remotion/SVG. Future adapters may consume the same conceptual contract.

## Cost gate

A paid renderer is justified only when:
1. the scene requires organic or cinematic motion not economical in code;
2. a preview/scene contract already exists;
3. generation is isolated to that scene;
4. expected cost is known or bounded;
5. deterministic text/data overlays remain outside the generated pixels when accuracy matters.
