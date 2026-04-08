import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

/**
 * Em produção, defina SITE_URL na Vercel (URL do deploy da pasta web/) para quem abrir a raiz da API
 * ir ao site em vez de ver esta página.
 */
export default function Home() {
  const site = process.env.SITE_URL?.trim();
  if (site) {
    redirect(site);
  }

  return (
    <main
      style={{
        fontFamily: "system-ui, sans-serif",
        maxWidth: 520,
        margin: "48px auto",
        padding: "0 24px",
        lineHeight: 1.5,
        color: "#1a1a1a",
      }}
    >
      <h1 style={{ fontSize: "1.25rem", marginBottom: 12 }}>Serviço de API (backend)</h1>
      <p style={{ marginBottom: 16, color: "#444" }}>
        Esta URL é o <strong>backend Next.js</strong> (pasta <code>api/</code> no repositório), não o site público.
      </p>
      <p style={{ marginBottom: 16, color: "#444" }}>
        O formulário de contato chama <code>POST /api/contact</code> aqui. Quem acessa pelo navegador costuma usar o{" "}
        <strong>outro</strong> deploy (pasta <code>web/</code>).
      </p>
      <p style={{ fontSize: "0.9rem", color: "#666" }}>
        Na Vercel: crie um projeto com Root Directory <code>web</code> e abra essa URL para ver o site. Opcionalmente,
        neste projeto (<code>api</code>), defina a variável <code>SITE_URL</code> com a URL do site para redirecionar a
        raiz automaticamente.
      </p>
    </main>
  );
}
