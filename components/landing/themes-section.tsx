export function ThemesSection() {
  const themes = [
    { icon: "⚽", name: "Copa & Futebol", status: "available", color: "bg-green" },
    { icon: "🌿", name: "Natureza", status: "available", color: "bg-green" },
    { icon: "✝️", name: "Bíblico", status: "available", color: "bg-green" },
    { icon: "⚔️", name: "Fantasia", status: "available", color: "bg-green" },
    { icon: "🎮", name: "Games", status: "coming", color: "bg-purple" },
    { icon: "🌸", name: "Anime", status: "coming", color: "bg-purple" },
  ]

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-2 h-32 bg-gradient-to-b from-orange via-purple to-green rounded-r-full" />
      <div className="absolute top-1/3 right-0 w-2 h-48 bg-gradient-to-b from-blue via-yellow to-orange rounded-l-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-[family-name:var(--font-fredoka)] text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Funciona pra qualquer gosto
          </h2>
        </div>
        
        {/* Themes Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {themes.map((theme, index) => (
            <div 
              key={index}
              className="group relative bg-cream rounded-2xl p-6 border-2 border-transparent hover:border-orange/30 transition-all hover:shadow-lg hover:scale-105"
            >
              <div className="text-4xl md:text-5xl mb-3">{theme.icon}</div>
              <h3 className="font-[family-name:var(--font-fredoka)] text-lg font-bold text-foreground mb-2">
                {theme.name}
              </h3>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${theme.color}`}>
                {theme.status === "available" ? "Disponível" : "Em breve"}
              </span>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange/5 to-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
