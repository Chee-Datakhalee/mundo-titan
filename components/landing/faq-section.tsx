"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Preciso baixar algum app?",
      answer: "Não! O Mundo Tinta funciona direto no navegador do seu celular ou computador. Se quiser, você pode instalar na tela inicial como um PWA (Progressive Web App) para acesso mais rápido."
    },
    {
      question: "Como funciona o período grátis?",
      answer: "Você pode colorir até 3 desenhos por dia gratuitamente, sem precisar cadastrar cartão de crédito. É só criar sua conta e começar a pintar!"
    },
    {
      question: "Posso cancelar quando quiser?",
      answer: "Sim! Você pode cancelar sua assinatura Premium a qualquer momento com apenas 1 clique, sem multas ou taxas adicionais."
    },
    {
      question: "Os desenhos são renovados?",
      answer: "Sim! Toda semana adicionamos novos desenhos em todos os temas disponíveis. Assinantes Premium têm acesso imediato aos novos conteúdos."
    },
    {
      question: "Funciona no celular?",
      answer: "Perfeitamente! O Mundo Tinta foi desenvolvido para funcionar em qualquer dispositivo — celular, tablet ou computador. A experiência é otimizada para telas touch."
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-orange/10 rounded-full blur-2xl" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-purple/10 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-[family-name:var(--font-fredoka)] text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Perguntas frequentes
          </h2>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-2xl border-2 border-border px-6 data-[state=open]:border-orange/30 data-[state=open]:shadow-lg transition-all"
              >
                <AccordionTrigger className="text-left font-[family-name:var(--font-fredoka)] text-lg font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
