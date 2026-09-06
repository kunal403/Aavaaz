# Aavaaz

> AI-powered text-to-speech and voice cloning platform built with Next.js, TypeScript, tRPC, Clerk, Prisma, and Chatterbox TTS.

Aavaaz is a full-stack AI voice generation platform that enables users to convert text into natural-sounding speech and create custom voices using zero-shot voice cloning.

The application combines a type-safe RPC backend with a serverless GPU inference pipeline, secure authentication, persistent generation history, and real-time error monitoring to provide a production-oriented voice generation workflow.

## ✨ Features

*  **Text-to-Speech** — Generate natural speech from text with configurable generation parameters.
*  **Zero-Shot Voice Cloning** — Create custom voices from short reference audio without model fine-tuning.
* **Generation Controls** — Tune creativity, voice variety, expression, and speech flow.
*  **Audio Player** — Interactive waveform visualization with playback, seeking, and downloads.
*  **Authentication** — Secure user authentication and session management with Clerk.
* **Multi-Tenant Architecture** — Organization-based data isolation for users and workspaces.
*  **Type-Safe APIs** — Backend procedures implemented using tRPC for end-to-end type safety.
*  **Persistent Storage** — Prisma ORM with PostgreSQL for users, voices, and generation metadata.
*  **Object Storage** — Generated audio and voice samples stored using Cloudflare R2.
*  **GPU Inference** — Chatterbox TTS deployed on Modal serverless GPUs.
*  **Error Monitoring** — Sentry integrated for production error tracking and debugging.
*  **Generation History** — Store and replay previously generated audio with associated voice metadata.
*  **Responsive UI** — Mobile-first interface with adaptive controls and layouts.


```
## 🧰 Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* shadcn/ui
* WaveSurfer.js

### Backend

* tRPC
* Prisma ORM
* PostgreSQL
* Next.js API routes
* TypeScript

### Authentication & Monitoring

* Clerk
* Sentry

### AI / Infrastructure

* Chatterbox TTS
* Modal Serverless GPU
* Cloudflare R2
* OpenAPI-generated TypeScript client

## 🔐 Authentication & Multi-Tenancy

Aavaaz uses Clerk for authentication and organization-based access control.

Each authenticated organization operates within an isolated data boundary, ensuring that voices, generations, and related resources are scoped to the appropriate workspace.

Backend tRPC procedures enforce authentication before accessing protected resources.

## ⚡ Type-Safe RPC Architecture

Aavaaz uses **tRPC** instead of manually maintaining REST request/response types.

## 🤖 Chatterbox TTS

The speech generation engine is powered by **Chatterbox TTS**, deployed as a serverless GPU inference service using Modal.

The application communicates with the TTS service through a typed API client generated from its OpenAPI specification, keeping the TypeScript application synchronized with the Python inference API.

## 🛡️ Error Monitoring

**Sentry** is integrated across the application to provide production-grade observability.

It captures application exceptions and runtime failures, making it easier to trace errors across frontend, server, and edge execution environments.
```

### Prerequisites

* Node.js 20.9+
* PostgreSQL / Prisma Postgres
* Clerk account
* Cloudflare R2 bucket
* Modal account
* Chatterbox TTS deployment

## 📜 Available Scripts

| Command            | Description                   |
| ------------------ | ----------------------------- |
| `npm run dev`      | Start development server      |
| `npm run build`    | Build production application  |
| `npm run start`    | Start production server       |
| `npm run lint`     | Run ESLint                    |
| `npm run sync-api` | Generate Chatterbox API types |

## 🎯 Engineering Highlights

Aavaaz demonstrates a production-oriented full-stack architecture combining:

* End-to-end type-safe RPC communication
* Organization-scoped authorization
* Relational data modeling with Prisma
* Serverless GPU inference
* Object-based audio storage
* OpenAPI-driven API client generation
* Production error observability
* Responsive AI-focused frontend architecture

## 📌 Credits

Built as an independent implementation inspired by the architecture and concepts of the open-source Resonance project.

AI voice generation is powered by Chatterbox TTS.
