# NeuroKit Labs

NeuroKit Labs is building an AI-powered study companion for Indonesian students pursuing ambitious academic goals. This repository contains the public company website for `neurokitlabs.github.io`, built as a static `Next.js` and `Tailwind CSS` site for GitHub Pages deployment.

## Overview

NeuroKit is designed to make focused learning more motivating, measurable, and personalized. Our product vision combines structured study support, adaptive encouragement, and progress visibility into a single experience tailored for high school students preparing for major academic milestones.

We are building for students who need more than a timer or a notes app. They need a system that helps them stay consistent, feel supported, and see real momentum over time.

## Vision

Our long-term vision is to become the study operating system for ambitious students in Indonesia.

NeuroKit brings together:

- AI-powered motivation that adapts to a student's goals and context
- Progress tracking that makes effort visible and rewarding
- Focus-oriented study experiences that support consistency
- A product experience designed around student psychology, not just productivity tools

## What We Are Building

The broader NeuroKit product direction includes:

- Personalized motivation for students targeting specific universities, majors, and academic outcomes
- Study analytics such as focus time, streaks, and progress summaries
- Goal-aware coaching that keeps students engaged during demanding preparation periods
- A modern mobile-first experience that feels encouraging, clear, and trustworthy

This website is intended to present that company profile clearly for partners, investors, early supporters, and future users.

## Mission

Help Indonesian students study with more focus, confidence, and direction through AI-assisted motivation and thoughtful learning tools.

## Audience

NeuroKit is currently centered on:

- Indonesian high school students, especially grades 10-12
- Students preparing for competitive university admissions
- Families and educators looking for stronger support systems around focused study habits

## Website Stack

This site uses a static architecture so it can deploy cleanly to GitHub Pages while staying easy to evolve.

- `Next.js`
- `Tailwind CSS`
- static export via `output: "export"`
- deployment through `GitHub Pages`

## Local Development

Run the site locally with:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Production Build

Create the static export with:

```bash
npm run build
```

The generated site is output to `out/`, which is what GitHub Pages deploys through GitHub Actions.

## Deployment

This repository is configured for GitHub Pages deployment using a workflow file under `.github/workflows/`.

Because this repo is published as `neurokitlabs.github.io`, the site is served from the root domain and does not require a custom `basePath`.

## Product Direction

While this repository hosts the company website, the product story behind NeuroKit includes:

- AI-assisted motivation and encouragement
- student progress visibility and analytics
- habit-building mechanisms such as streaks and session tracking
- future integrations that deepen the focus and study experience

The public site should communicate the company clearly, not mirror a mobile app README exactly. This repo is meant to act as a concise, investor-friendly front door for the startup.

## Team

NeuroKit is being developed by the NeuroKit team with a focus on education, product design, and AI-assisted learning experiences for Indonesia.

## Status

This is the company website repository, not the production mobile app codebase.

Current priorities:

- establish a strong public-facing narrative
- present the product vision clearly
- support investor and partner conversations
- create a clean foundation for future updates such as waitlist capture and product pages
