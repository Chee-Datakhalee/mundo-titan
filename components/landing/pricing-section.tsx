import { Button } from "@/components/ui/button"
import { CheckIcon } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "Grátis",
      price: "R$0",
      period: "",
      features: [
        "3 desenhos por dia",
        "1 tema disponível",
        "Recompensas básicas",
        "Salvar no álbum"
      ],
      cta: "Começar Grátis",
      popular: false
    },
    {
      name: "Premium",
      price: "R$14,90",
      period: "/mês",
      features: [
        "Desenhos ilimitados",
        "Todos os temas liberados",
        "Novos desenhos toda semana",
        "Recompensas exclusivas",
        "Suporte prioritário"
      ],
      cta: "Assinar Premium",
      popular: true
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-[family-name:var(--font-fredoka)] text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Comece grátis. Evolua quando quiser.
          </h2>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-3xl transition-all ${
                plan.popular 
                  ? 'bg-gradient-to-br from-orange/10 via-purple/5 to-blue/10 border-2 border-orange shadow-2xl shadow-orange/20 scale-105' 
                  : 'bg-cream border-2 border-border hover:border-orange/30'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Mais popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="font-[family-name:var(--font-fredoka)] text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-[family-name:var(--font-fredoka)] text-4xl md:text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
              </div>
              
              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? 'bg-orange' : 'bg-green'}`}>
                      <CheckIcon className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA */}
              <Button 
                className={`w-full py-6 rounded-xl font-bold text-lg transition-all ${
                  plan.popular 
                    ? 'bg-orange hover:bg-orange/90 text-white shadow-lg shadow-orange/30 hover:shadow-xl hover:shadow-orange/40' 
                    : 'bg-foreground hover:bg-foreground/90 text-white'
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
        
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-muted-foreground text-sm">
          <div className="flex items-center gap-2">
            <span>🔒</span>
            <span>Pagamento seguro</span>
          </div>
          <div className="flex items-center gap-2">
            <span>⚡</span>
            <span>Liberação automática</span>
          </div>
          <div className="flex items-center gap-2">
            <span>↩️</span>
            <span>Cancele quando quiser</span>
          </div>
        </div>
      </div>
    </section>
  )
}
