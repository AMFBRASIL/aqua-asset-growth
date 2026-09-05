"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, ArrowLeft, Send } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { WHATSAPP_DISPLAY, WHATSAPP_MESSAGES, whatsappUrl } from "@/lib/site";

export default function ContatoPage() {
  const { toast } = useToast();
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.telefone.trim()) {
      toast({ title: "Preencha ao menos nome e telefone.", variant: "destructive" });
      return;
    }
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: form.nome.trim(),
          email: form.email.trim(),
          telefone: form.telefone.trim(),
          mensagem: form.mensagem.trim(),
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        toast({
          title: "Não foi possível enviar",
          description: data.error || "Tente novamente em instantes.",
          variant: "destructive",
        });
        return;
      }
      toast({ title: "Mensagem enviada!", description: "Um consultor entrará em contato em breve." });
      setForm({ nome: "", email: "", telefone: "", mensagem: "" });
    } catch (err) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente em instantes.",
        variant: "destructive",
      });
      console.error("[contato]", err);
    } finally {
      setSending(false);
    }
  };

  const whatsappLink = whatsappUrl(WHATSAPP_MESSAGES.contato);

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-nature">
        <div className="container mx-auto px-6 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-body text-sm">Voltar ao site</span>
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Fale com um Consultor</h1>
            <p className="text-primary-foreground/75 font-body text-lg">
              Tire suas dúvidas e receba o estudo financeiro completo do Ibiunature Aqua Clube.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-card rounded-2xl border border-border p-8">
              <h2 className="text-xl font-bold text-foreground mb-2">Atendimento rápido via WhatsApp</h2>
              <p className="text-muted-foreground font-body text-sm mb-6">
                Fale diretamente com nosso consultor de investimentos. Resposta em minutos.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 w-full justify-center px-8 py-4 bg-[#25D366] text-white font-body font-bold rounded-xl text-lg hover:brightness-110 transition-all duration-300 hover:scale-[1.02]"
              >
                <MessageCircle className="w-6 h-6" />
                Chamar no WhatsApp
              </a>
            </div>

            <div className="bg-card rounded-2xl border border-border p-8 space-y-6">
              <h2 className="text-xl font-bold text-foreground mb-2">Informações de Contato</h2>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground text-sm">Telefone / WhatsApp</p>
                  <p className="text-muted-foreground font-body text-sm">{WHATSAPP_DISPLAY}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground text-sm">E-mail</p>
                  <p className="text-muted-foreground font-body text-sm">contato@ibiunature.com.br</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground text-sm">Localização</p>
                  <p className="text-muted-foreground font-body text-sm">Ibiúna – SP, Brasil</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <div className="bg-card rounded-2xl border border-border p-8">
              <h2 className="text-xl font-bold text-foreground mb-2">Envie uma mensagem</h2>
              <p className="text-muted-foreground font-body text-sm mb-6">
                Preencha o formulário e retornaremos em até 24 horas.
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-1.5">Nome *</label>
                  <Input
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    placeholder="Seu nome completo"
                    maxLength={100}
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-1.5">E-mail</label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="seuemail@exemplo.com"
                    maxLength={255}
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-1.5">Telefone *</label>
                  <Input
                    value={form.telefone}
                    onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                    placeholder="(11) 99999-9999"
                    maxLength={20}
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-1.5">Mensagem</label>
                  <Textarea
                    value={form.mensagem}
                    onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                    placeholder="Tenho interesse em investir no Ibiunature..."
                    rows={4}
                    maxLength={1000}
                  />
                </div>
                <Button type="submit" disabled={sending} className="w-full py-6 text-base font-body font-bold rounded-xl">
                  <Send className="w-4 h-4 mr-2" />
                  {sending ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
