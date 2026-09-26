# Renderer Adapters

The motion-production contract must survive renderer changes.

## Default R1

### remotion
Use for:
- live Korean text
- typography
- SVG diagrams
- cards and UI
- maps/charts with exact labels
- collage motion with deterministic assets

Cost: local compute only.

## Optional future adapters

### blender
Use when a scene truly requires spatial 3D, camera parallax, lighting or material behavior.

### local-video
Use Wan or another local model when a shot needs organic/generated motion that code graphics cannot express economically.

### cloud-video
Higgsfield or another paid backend may be added only behind an explicit adapter.

A cloud adapter must:
1. accept the same scene intent and timing contract;
2. estimate or expose cost before generation when possible;
3. generate only the requested scene;
4. preserve the rest of the timeline;
5. return output metadata and provenance;
6. never become mandatory for opening or rendering the base project.

## Higgsfield reference pattern

Borrow the production pattern, not the dependency:
- brief first
- storyboard first
- style lock
- scene isolation
- preview before expensive generation
- regenerate one failed scene
- final assembly and QA

R1 intentionally proves this pattern without invoking Higgsfield.
