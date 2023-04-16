---
title: "Next JS"
subtitle: "A Full Stack Web Site building Environment based on a React Front End"
date: "14-04-2023"
---

# Summary

Next.js is an open source React framework from the company called Vercel. It provides building blocks to create full stack web applications. Next.js is used to build landing pages, SEO-friendly websites, eCommerce stores**,** and other** web applications that need fast, high-performance load times.

The current production version of Next.js in [version 12](https://nextjs.org/blog/next-12). The primary features include:

- **Data Fetching** - Next.js manages data for optimal speed, having two types of pre-rendering. Server-side Rendering (SSR) allows fetching data and rendering it at request time. The other type is Static Generation, which uses data already available at build time before the request is made, being very useful in situations where data can be publicly cached (not user-specific) or pre-rendered for SEO.

- **Typescript** - TypeScript is a programming language that builds on JavaScript. Next.js supports Typescript, which is one of the reasons for making Next.js so popular among developers.

- **Configurability** - Next.js is highly configurable. Routing is as simple as creating folders.

- NextJS has a [Rust](https://www.imaginarycloud.com/blog/rust-vs-go/) compiler for faster builds, better image management, optimized SEO crawlability functionalities, along with operational tools that make it even more production-friendly.

To build this site, the decision was to use [Next.js 13](https://beta.nextjs.org/docs), even though it is still in Beta. The reason for this was to take advantage of the significant improvements in capabilities, usability, and overall performance. Furthermore, NextJS also allows us to ride on wave of the future. 

While still supporting the same file system-based routing as in NextJS 12, which uses the pages directory, the new app directory in NextJS 13 introduces the concepts of layouts, error components, and loading components [while also leveraging React server components](https://blog.logrocket.com/what-you-need-to-know-about-react-server-components/) for building the UI. Since NextJS 13 seamlessly integrates Tailwind for styling, Tailwind was also used in the creation of this site as well.

Major features of [NextJS 13.2](https://nextjs.org/blog/next-13-2#built-in-seo-support-with-new-metadata-api) includes the following:

- New Metadata API to set static and dynamic meta tags.
- Custom request handlers, built on Web Request and Response.
- Use React components inside Markdown, server-side only.
- Faster Markdown parsing with a new Rust plugin.
- Separate Next.js and React stack traces for improved readability.
- Progressive Incremental Static Regeneration and faster re-deploys of code changes.

References:

[Next.js App Router: Routing, Data Fetching, Caching](https://www.youtube.com/watch?v=gSSsZReIFRk)

[Master NextJS 13: Build and Deploy a Modern Full-Stack App in Just 5 Hours!](https://www.youtube.com/watch?v=4lUkSgvmTYM)

[The Next.js 13 Bootcamp – Laith Academy ](https://www.youtube.com/watch?v=-4giAYiEfa4&t=251s)

[NextJS 13 Full Tutorial -Hamed Bahram](https://www.youtube.com/playlist?list=PLwTWj-bA3SMC4fGQhsdYKJQErd0MKHNfD)

[Role Based Authorization with Next-Auth and Next.js 13 – Sakura Dev](https://www.youtube.com/watch?v=xJ6efexXJ7I&list=PLhnVDNT5zYN97qxG4J_V_9Di8xT9_QDvZ)

[Next.js Tutorial for Beginners | Next.js 13 – by Dave Gray](https://www.youtube.com/watch?v=6h649f2fB9Q)

[NextJS 13 - First Look at the /app Folder & Complete Demo - Academind](https://www.youtube.com/watch?v=bDDuLuCqHg0)





