export function HowItWorks() {
  const steps = [
    {
      icon: "🎨",
      title: "Escolha um tema",
      description: "Futebol, natureza, fantasia... escolha o que combina com você",
      color: "bg-orange/10 border-orange/30"
    },
    {
      icon: "✏️",
      title: "Rabisque e pinte",
      description: "Use cores vibrantes e dê vida aos seus desenhos favoritos",
      color: "bg-purple/10 border-purple/30"
    },
    {
      icon: "🏆",
      title: "Ganhe recompensas",
      description: "Complete desafios, suba de nível e desbloqueie prêmios",
      color: "bg-green/10 border-green/30"
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-cream relative overflow-hidden">
      {/* Decorative paint brushstrokes */}
      <div className="absolute top-20 left-0 w-32 h-8 bg-gradient-to-r from-orange/30 to-transparent rounded-r-full" />
      <div className="absolute top-40 right-0 w-48 h-6 bg-gradient-to-l from-purple/30 to-transparent rounded-l-full" />
      <div className="absolute bottom-32 left-10 w-24 h-6 bg-gradient-to-r from-green/30 to-transparent rounded-r-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-[family-name:var(--font-fredoka)] text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Simples assim — escolha, pinte, ganhe
          </h2>
        </div>
        
        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-3xl border-2 ${step.color} backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl`}
            >
              {/* Step number */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-foreground text-white rounded-full flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>
              
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="font-[family-name:var(--font-fredoka)] text-xl font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* Phone Mockup */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-72 h-[560px] bg-gradient-to-b from-foreground/90 to-foreground rounded-[3rem] p-3 shadow-2xl">
              <div className="w-full h-full bg-cream rounded-[2.5rem] overflow-hidden">
                {/* App Screen */}
                <div className="p-4 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-orange rounded-lg flex items-center justify-center text-sm">🎨</div>
                      <span className="font-[family-name:var(--font-fredoka)] font-bold text-foreground">Mundo Tinta</span>
                    </div>
                    <div className="flex items-center gap-1 bg-yellow/20 px-2 py-1 rounded-full">
                      <span className="text-xs">⭐</span>
                      <span className="text-xs font-bold text-foreground">1,250 XP</span>
                    </div>
                  </div>
                  
                  {/* Drawing Area */}
                  <div className="flex-1 bg-white rounded-2xl shadow-inner p-4 mb-4 flex items-center justify-center">
                    <svg viewBox="0 0 120 120" className="w-full max-w-[160px]">
                      {/* Butterfly with partial coloring */}
                      <ellipse cx="60" cy="60" rx="8" ry="25" fill="#8B5CF6" stroke="#374151" strokeWidth="1.5"/>
                      <circle cx="60" cy="35" r="8" fill="#FCD34D" stroke="#374151" strokeWidth="1.5"/>
                      {/* Wings */}
                      <ellipse cx="35" cy="50" rx="25" ry="20" fill="#FF6B35" stroke="#374151" strokeWidth="1.5"/>
                      <ellipse cx="85" cy="50" rx="25" ry="20" fill="#FF6B35" stroke="#374151" strokeWidth="1.5"/>
                      <ellipse cx="35" cy="75" rx="20" ry="15" fill="white" stroke="#374151" strokeWidth="1.5"/>
                      <ellipse cx="85" cy="75" rx="20" ry="15" fill="#22C55E" stroke="#374151" strokeWidth="1.5"/>
                      {/* Wing patterns */}
                      <circle cx="30" cy="45" r="5" fill="white" stroke="#374151" strokeWidth="1"/>
                      <circle cx="90" cy="45" r="5" fill="white" stroke="#374151" strokeWidth="1"/>
                    </svg>
                  </div>
                  
                  {/* Color Palette */}
                  <div className="flex justify-center gap-2 mb-4">
                    {["#FF6B35", "#8B5CF6", "#22C55E", "#3B82F6", "#FCD34D", "#EC4899"].map((color) => (
                      <div 
                        key={color}
                        className="w-8 h-8 rounded-full shadow-md"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  
                  {/* Progress */}
                  <div className="bg-muted rounded-full h-2 mb-2">
                    <div className="bg-green h-2 rounded-full w-3/4" />
                  </div>
                  <p className="text-xs text-center text-muted-foreground">75% completo</p>
                </div>
              </div>
            </div>
            {/* Notch */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-7 bg-foreground rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
