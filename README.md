# Aqua Asset Growth — Ibiunature Aqua Clube

Site e API de contato em **um único projeto [Next.js](https://nextjs.org/)** (App Router). Páginas em `app/`, formulário em `/contato` chama `POST /api/contact` (Mailgun) na mesma origem — ideal para a Vercel.

## Desenvolvimento

```sh
npm install
cp .env.example .env   # preencha Mailgun
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Deploy na Vercel

1. Importe o repositório e deixe **Root Directory** na **raiz** (`.`).
2. Framework: Next.js (detectado automaticamente).
3. Em **Environment Variables**, copie as chaves de `.env.example` (produção: `FRONTEND_ORIGIN` = URL pública do site, ex. `https://seu-projeto.vercel.app`).

Não é necessário segundo projeto nem pasta separada para “API”.

## Estrutura

- `app/page.tsx` — home  
- `app/contato`, `app/alugar` — páginas  
- `app/api/contact` — envio de e-mail (Mailgun)  
- `components/` — UI e seções  
- `public/assets/` — imagens  

## Stack

Next.js 15, React 19, Tailwind, shadcn/ui, Framer Motion, TanStack Query, Mailgun.
