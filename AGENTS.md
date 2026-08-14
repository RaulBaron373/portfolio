# AGENTS.md

## Project purpose

This repository contains the personal developer portfolio of Raúl Barón Gómez.

The portfolio is intended for junior web developer and junior full stack developer job applications.

Primary technologies:

- Angular
- TypeScript
- HTML5
- SCSS

The first version must remain frontend-only unless a backend becomes genuinely necessary.

## Main goals

- Build a professional and modern personal portfolio.
- Keep the implementation understandable for a junior developer.
- Use the project as a learning environment for Angular, Git, GitHub and Codex.
- Prefer maintainable and readable code over unnecessary complexity.
- Preserve a professional visual style based on blue and violet gradients.

## Architecture

The application is a single-page Angular portfolio.

Main sections:

- Navbar
- Hero
- About
- Experience
- Projects
- Skills
- Contact
- Footer

Use Angular standalone components.

Do not introduce Angular Router unless routing becomes necessary.

Use smooth anchor-based navigation between sections.

## Code organization

Recommended structure:

src/app/
- components/
- sections/
- models/
- data/
- shared/

Create reusable components only when they provide clear value.

Avoid premature abstractions.

## Angular conventions

- Use standalone components.
- Use strict TypeScript.
- Prefer modern Angular patterns.
- Keep components small and focused.
- Avoid unnecessary dependencies.
- Do not add a UI framework unless explicitly requested.
- Prefer semantic HTML.
- Keep business/content data separate from templates when practical.

## Styling

Use SCSS.

Design requirements:

- responsive from the beginning;
- mobile-first where practical;
- blue and violet visual identity;
- dark hero section;
- clean light content sections;
- subtle gradients;
- subtle hover effects;
- restrained animations;
- generous spacing;
- accessible contrast;
- consistent typography and spacing.

Avoid excessive animations or visual effects.

## Content rules

All professional information must be real and verifiable.

Do not invent:

- work experience;
- projects;
- technologies;
- certifications;
- percentages of skill proficiency.

Main professional positioning:

Desarrollador Full Stack Junior

Primary stack:

Angular · TypeScript · Java · Spring Boot · MySQL

Primary project:

Detall Sublim

Repository:
https://github.com/RaulBaron373/detallSublim

## Development workflow

Before changing code:

1. Inspect the existing implementation.
2. Explain briefly what will be changed.
3. Prefer small, focused changes.
4. Do not rewrite unrelated code.

After making changes:

1. Run formatting if configured.
2. Run linting if configured.
3. Run relevant tests if configured.
4. Run the production build when appropriate.
5. Report any errors that remain.

Do not hide failing tests or build errors.

## Git workflow

Use clear, focused commits.

Prefer conventional commit messages such as:

- feat:
- fix:
- refactor:
- style:
- docs:
- test:
- chore:

Do not force-push.

Do not modify existing commits unless explicitly requested.

## Learning mode

This project is also being used to learn Codex and Angular.

When implementing non-trivial features:

- explain the approach briefly;
- avoid generating unnecessarily advanced abstractions;
- prefer code that can be understood and maintained by a junior developer;
- mention important Angular concepts involved in the change.

Do not take over architectural decisions that have not been specified.

If a requirement is ambiguous, ask before making a major structural change.