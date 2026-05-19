export function MarketSection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-[family-name:var(--font-fredoka)] text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            O app de colorir que as pessoas não conseguem parar de usar
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Enquanto outros apps travam na mesma tela, o Mundo Tinta entrega desenhos novos todo dia — e o usuário sempre volta pra mais.
          </p>
        </div>
        
        {/* Phone Mockups */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-4xl mx-auto">
          {/* Before */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-64 h-[500px] bg-gradient-to-b from-muted to-muted/50 rounded-[3rem] p-3 shadow-2xl border-4 border-foreground/10">
                <div className="w-full h-full bg-cream rounded-[2.5rem] flex items-center justify-center overflow-hidden">
                  <div className="text-center p-6">
                    <div className="w-48 h-48 bg-white rounded-2xl shadow-inner flex items-center justify-center mb-4 mx-auto border-2 border-dashed border-muted-foreground/30">
                      <svg viewBox="0 0 100 100" className="w-32 h-32">
                        {/* Simple flower outline */}
                        <circle cx="50" cy="50" r="15" fill="none" stroke="#374151" strokeWidth="2"/>
                        <ellipse cx="50" cy="25" rx="12" ry="15" fill="none" stroke="#374151" strokeWidth="2"/>
                        <ellipse cx="50" cy="75" rx="12" ry="15" fill="none" stroke="#374151" strokeWidth="2"/>
                        <ellipse cx="25" cy="50" rx="15" ry="12" fill="none" stroke="#374151" strokeWidth="2"/>
                        <ellipse cx="75" cy="50" rx="15" ry="12" fill="none" stroke="#374151" strokeWidth="2"/>
                        <line x1="50" y1="90" x2="50" y2="100" stroke="#374151" strokeWidth="2"/>
                      </svg>
                    </div>
                    <p className="text-sm text-muted-foreground">Imagem enviada pelo cliente</p>
                  </div>
                </div>
              </div>
              {/* Notch */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground/10 rounded-full" />
            </div>
            <span className="mt-4 font-[family-name:var(--font-fredoka)] text-lg font-semibold text-muted-foreground">
              Antes de colorir
            </span>
          </div>
          
          {/* Arrow */}
          <div className="text-4xl text-orange hidden md:block">→</div>
          <div className="text-4xl text-orange md:hidden rotate-90">→</div>
          
          {/* After */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-64 h-[500px] bg-gradient-to-b from-muted to-muted/50 rounded-[3rem] p-3 shadow-2xl border-4 border-foreground/10">
                <div className="w-full h-full bg-cream rounded-[2.5rem] flex items-center justify-center overflow-hidden">
                  <div className="text-center p-6">
                    <div className="w-48 h-48 bg-white rounded-2xl shadow-inner flex items-center justify-center mb-4 mx-auto border-2 border-green/50">
                      <svg viewBox="0 0 100 100" className="w-32 h-32">
                        {/* Colored flower */}
                        <circle cx="50" cy="50" r="15" fill="#FCD34D" stroke="#374151" strokeWidth="2"/>
                        <ellipse cx="50" cy="25" rx="12" ry="15" fill="#EC4899" stroke="#374151" strokeWidth="2"/>
                        <ellipse cx="50" cy="75" rx="12" ry="15" fill="#EC4899" stroke="#374151" strokeWidth="2"/>
                        <ellipse cx="25" cy="50" rx="15" ry="12" fill="#8B5CF6" stroke="#374151" strokeWidth="2"/>
                        <ellipse cx="75" cy="50" rx="15" ry="12" fill="#8B5CF6" stroke="#374151" strokeWidth="2"/>
                        <line x1="50" y1="90" x2="50" y2="100" stroke="#22C55E" strokeWidth="3"/>
                      </svg>
                    </div>
                    <p className="text-sm text-muted-foreground">Imagem enviada pelo cliente</p>
                  </div>
                </div>
              </div>
              {/* Notch */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground/10 rounded-full" />
            </div>
            <span className="mt-4 font-[family-name:var(--font-fredoka)] text-lg font-semibold text-green">
              Depois de colorir
            </span>
          </div>
        </div>
        
        {/* Bottom text */}
        <p className="text-center text-lg text-foreground mt-12 font-semibold max-w-2xl mx-auto text-pretty">
          Cada desenho colorido = satisfação instantânea. É assim que o Mundo Tinta cria hábito.
        </p>
      </div>
    </section>
  )
}
