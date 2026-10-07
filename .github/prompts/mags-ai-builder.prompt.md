---
name: Mags.Ai Builder
description: Build and improve the Mags.Ai website according to the project's product, design, architecture, content, testing, and security requirements.
---

# Mags.Ai Development Instructions

You are working on the Mags.Ai website.

Mags.Ai is a personal digital business solutions brand built by Magudeshwaran.

Core message:

"Turn Business Problems Into Digital Solutions."

Core philosophy:

"Understand the business problem first. Build the technology second."

## Project Goal

Build a professional, modern, interactive personal website for Mags.Ai.

The website should communicate that Mags.Ai understands real business problems and can turn them into practical digital solutions.

The website should feel:

- Premium
- Futuristic
- Creative
- Intelligent
- Human
- Professional

Avoid making it look like a generic freelancer portfolio or generic AI website.

## Source of Truth

Before making significant implementation decisions, use the relevant documents in:

/docs

Important documents include:

- Product Brief
- Brand & Design System
- Website Requirements
- Page Structure
- User Flows
- Component Plan
- Animation Plan
- Content Plan
- Technical Architecture
- Data Model
- Security Checklist
- Testing Checklist

Do not invent requirements that conflict with these documents.

If requirements conflict, identify the conflict before implementing.

## Technology

Current stack:

- React
- TypeScript
- Vite
- HTML
- CSS

Do not introduce unnecessary frameworks, libraries, dependencies, backend systems, databases, authentication, or architecture unless the requirement actually needs them.

Prefer simple, maintainable solutions.

## Architecture

Keep responsibilities separated.

Use:

src/components/
src/sections/
src/data/

Use reusable components where appropriate.

Do not create components merely to increase the number of files.

Prefer clear component responsibilities and readable code.

Keep content/data separate from presentation when practical.

## Design

Follow the Mags.Ai Brand & Design System.

Important visual direction:

- Dark futuristic hero
- Clean premium light content sections
- White, beige, black and soft-black surfaces
- Deep muted purple-blue gradients
- Smooth gradients
- Elegant typography
- Selective glassmorphism
- Premium spacing
- Subtle glow
- Smooth motion

Avoid:

- Excessive neon
- Cyberpunk overload
- Flashing effects
- Excessive blur
- Generic AI robot imagery
- Generic stock imagery
- Unnecessary visual clutter

The design should feel advanced without becoming difficult to use.

## Hero

The hero should visually communicate:

Business problems → digital transformation → clear solution.

Use a code-generated visual system where appropriate.

The planned visual concept includes digital lines coming from opposite sides and converging toward the center.

The main hero message is:

"TURN BUSINESS PROBLEMS INTO DIGITAL SOLUTIONS"

Keep important text as real HTML rather than embedding text inside generated images.

## Animation

Motion should communicate:

- hierarchy
- interaction
- transition

Do not add animation simply for decoration.

Prefer:

- CSS transitions
- transforms
- opacity
- gradients
- lightweight React interaction

Respect:

prefers-reduced-motion

Mobile should use lighter animation.

## Content

Do not invent:

- clients
- testimonials
- statistics
- business results
- case studies
- partnerships
- achievements

unless explicitly provided.

Clearly distinguish:

- Real Client
- Personal Project
- Demo
- Concept
- In Development
- Live

Authenticity is more important than making the portfolio appear larger.

## Images

Use existing project assets when provided.

Current profile image:

/public/images/mags-profile.png

Do not replace or regenerate the profile image unless explicitly requested.

Avoid adding unnecessary stock images.

## AI-Assisted Development Workflow

You are allowed to generate substantial amounts of code.

However, the developer owns the final implementation.

For significant features:

1. Understand the requirement.
2. Identify the relevant Mags.Ai document.
3. Explain the implementation approach briefly.
4. Generate the code.
5. Identify important assumptions.
6. Identify potential issues or edge cases.
7. Explain how the developer should test it.

Do not hide important architectural decisions.

Do not pretend generated code has been tested if it has not been run.

## Code Quality

Prefer:

- readable TypeScript
- semantic HTML
- reusable React components
- accessible interactions
- responsive layouts
- maintainable CSS
- meaningful names
- minimal dependencies

Avoid:

- unnecessary abstraction
- duplicated logic
- huge components when separation is useful
- unnecessary state
- unnecessary libraries
- hardcoded secrets
- insecure patterns
- unexplained magic values

## Security

Never place secrets, API keys, passwords, tokens, or private credentials in source code.

Never expose private credentials in frontend code.

Treat user input as untrusted.

If a feature introduces security concerns, explain them before implementation.

## Testing

Do not assume the implementation works simply because the code compiles.

For every significant feature, consider:

- desktop
- tablet
- mobile
- keyboard interaction
- accessibility
- responsive behavior
- loading states
- empty states
- error states
- browser console
- performance

After implementation, identify what should be manually tested.

## Important Rule

Do not optimize the code merely to make it look sophisticated.

Optimize for:

clarity → correctness → maintainability → performance.

The goal is not to generate the most code.

The goal is to build the right solution.

## Working Style

When asked to build a feature:

- First understand the requirement.
- Use the project documents as the source of truth.
- Keep the implementation proportional to the requirement.
- Reuse existing components when appropriate.
- Do not rewrite unrelated parts of the project.
- Do not introduce new dependencies without a reason.
- Clearly identify files that need to be created or modified.
- After generating code, explain what changed and how to test it.