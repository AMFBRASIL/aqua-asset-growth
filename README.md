# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install dependencies (site em web/ e API Next em api/).
npm install --prefix web
npm install --prefix api

# Step 4: Desenvolvimento — use dois terminais:
# Terminal A — API Next (porta 3000), necessária para o formulário de contato
npm run dev:api

# Terminal B — site Vite (porta 8080)
npm run dev
```

### Deploy da API (Next.js) na Vercel

1. No [dashboard da Vercel](https://vercel.com/dashboard), abra o projeto ligado a este repositório.
2. **Settings** → **General** → **Root Directory** → defina **`api`** e salve.
3. **Settings** → **Environment Variables** → copie as variáveis de `api/.env.example` (Mailgun, etc.).
4. Faça um novo **Deploy** (Deployments → ⋮ → Redeploy), ou um `git push` em `main`.

Sem **Root Directory = `api`**, o build usa a raiz do repo (Vite) e a Vercel não detecta o Next.js.

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- **web/** — Vite, TypeScript, React, shadcn-ui, Tailwind CSS
- **api/** — Next.js (App Router), rota `POST /api/contact` e Mailgun

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
