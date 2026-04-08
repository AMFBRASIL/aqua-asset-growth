type SendContactEmailParams = {
  nome: string;
  email?: string;
  telefone: string;
  mensagem?: string;
};

function env(name: string): string | undefined {
  const v = process.env[name]?.trim();
  return v || undefined;
}

function getMailgunBaseUrl(): string {
  const raw = env("MAILGUN_API_BASE");
  if (raw) return raw.replace(/\/$/, "");
  return env("MAILGUN_REGION")?.toLowerCase() === "eu"
    ? "https://api.eu.mailgun.net"
    : "https://api.mailgun.net";
}

async function readMailgunError(res: Response): Promise<string> {
  const text = await res.text().catch(() => "");
  try {
    const j = JSON.parse(text) as { message?: string };
    if (typeof j.message === "string" && j.message.trim()) return j.message.trim();
  } catch {
    /* not JSON */
  }
  const snippet = text.replace(/\s+/g, " ").trim().slice(0, 280);
  return snippet || `HTTP ${res.status}`;
}

export async function sendContactEmail(params: SendContactEmailParams): Promise<void> {
  const apiKey = env("MAILGUN_API_KEY");
  const domain = env("MAILGUN_DOMAIN");
  const from = env("MAILGUN_FROM");
  const to = env("CONTACT_TO_EMAIL");

  if (!apiKey || !domain || !from || !to) {
    throw new Error(
      "Configuração Mailgun incompleta. Preencha MAILGUN_API_KEY, MAILGUN_DOMAIN, MAILGUN_FROM e CONTACT_TO_EMAIL no .env"
    );
  }

  const base = getMailgunBaseUrl();
  const url = `${base}/v3/${domain}/messages`;
  const auth = Buffer.from(`api:${apiKey}`).toString("base64");

  const lines = [
    `Nome: ${params.nome}`,
    `Telefone: ${params.telefone}`,
    params.email ? `E-mail: ${params.email}` : null,
    "",
    params.mensagem?.trim() ? `Mensagem:\n${params.mensagem.trim()}` : "(sem mensagem)",
  ].filter(Boolean) as string[];

  const text = lines.join("\n");
  const subject = `[Site] Contato — ${params.nome}`;

  const body = new URLSearchParams();
  body.set("from", from);
  body.set("to", to);
  body.set("subject", subject);
  body.set("text", text);
  if (params.email?.trim()) {
    body.set("h:Reply-To", params.email.trim());
  }

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });

  if (!res.ok) {
    const detail = await readMailgunError(res);
    throw new Error(`Mailgun (${res.status}): ${detail}`);
  }
}
