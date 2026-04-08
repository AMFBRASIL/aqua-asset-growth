import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mailgun";

function corsHeaders(): HeadersInit {
  const origin = process.env.FRONTEND_ORIGIN?.trim() || "http://localhost:8080";
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders() });
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    let json: Record<string, unknown>;
    try {
      json = (await request.json()) as Record<string, unknown>;
    } catch {
      return NextResponse.json({ error: "JSON inválido no corpo da requisição." }, { status: 400, headers: corsHeaders() });
    }
    const nome = typeof json.nome === "string" ? json.nome.trim() : "";
    const telefone = typeof json.telefone === "string" ? json.telefone.trim() : "";
    const email = typeof json.email === "string" ? json.email.trim() : "";
    const mensagem = typeof json.mensagem === "string" ? json.mensagem : "";

    if (!nome || nome.length > 100) {
      return NextResponse.json({ error: "Nome inválido." }, { status: 400, headers: corsHeaders() });
    }
    if (!telefone || telefone.length > 40) {
      return NextResponse.json({ error: "Telefone inválido." }, { status: 400, headers: corsHeaders() });
    }
    if (email && (email.length > 255 || !emailRegex.test(email))) {
      return NextResponse.json({ error: "E-mail inválido." }, { status: 400, headers: corsHeaders() });
    }
    if (mensagem.length > 2000) {
      return NextResponse.json({ error: "Mensagem muito longa." }, { status: 400, headers: corsHeaders() });
    }

    await sendContactEmail({
      nome,
      telefone,
      email: email || undefined,
      mensagem: mensagem || undefined,
    });

    return NextResponse.json({ ok: true }, { headers: corsHeaders() });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Erro ao enviar.";
    console.error("[api/contact]", e);
    return NextResponse.json({ error: message }, { status: 500, headers: corsHeaders() });
  }
}
