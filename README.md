# Portfolio - Henrique Marino

Portfólio técnico estático construído com Next.js App Router, TypeScript, Tailwind CSS e MDX.

A proposta visual é preservar a identidade original do projeto: terminal interativo, explorador de habilidades, navegação com sensação de workspace/IDE e conteúdo técnico como primeira classe.

## Stack

- Next.js App Router com `output: 'export'`
- TypeScript
- Tailwind CSS
- MDX com componentes React, tabelas, callouts, Mermaid e syntax highlighting
- RSS, sitemap, robots e índice local de busca gerados em build
- Deploy estático no GitHub Pages

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
npm run typecheck
```

## Conteúdo

Projetos ficam em `content/projects/*.mdx`.

Artigos ficam em `content/blog/*.mdx`.

Cada arquivo usa frontmatter para SEO, tags, data, stack e navegação estática.

## GitHub Pages

O workflow em `.github/workflows/deploy.yml` executa `npm run build` e publica a pasta `out`.

Para build local simulando o GitHub Pages:

```bash
NEXT_PUBLIC_SITE_URL=https://henriquemarino.github.io npm run build
```
