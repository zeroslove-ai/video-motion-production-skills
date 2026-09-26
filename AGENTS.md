# Agent Rules

## North star

Build reusable motion-production capability, not a one-off pretty demo.

## Hard boundaries

- `video-motion-production-skills` owns editorial/code-driven motion graphics.
- `video-production-skills` owns broader video production, 3D, generative footage and hybrid film workflows.
- Do not silently merge the two repositories.
- R1 must not call paid image/video/audio generation APIs.
- Higgsfield may be studied as a workflow reference, but R1 rendering must remain provider-independent.

## Work order

1. Read `R1_CODEX_EXECUTION_BRIEF.md`.
2. Read the four skill files.
3. Inspect the current source before editing.
4. Make the smallest reusable change.
5. Render a preview or final artifact.
6. Validate with `video-motion-qa`.
7. Record evidence in `EXPERIMENT_LOG.md`.

## Engineering rules

- Keep composition timing in frames and document fps.
- Text must remain live text whenever possible.
- Use SVG/CSS/React geometry for diagrams and icons before raster assets.
- Avoid network dependencies during render.
- Avoid random animation unless seeded and reproducible.
- Keep scenes modular so one scene can be replaced without rewriting the rest.
- Do not add a paid renderer to the default path.
