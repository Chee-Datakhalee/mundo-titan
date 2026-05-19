export function GamificationSection() {
  const features = [
    {
      icon: "⭐",
      title: "XP & Níveis",
      description: "Ganhe experiência a cada desenho e suba de nível para desbloquear novos conteúdos",
      gradient: "from-yellow/20 to-orange/20",
      borderColor: "border-yellow/40"
    },
    {
      icon: "🏅",
      title: "Conquistas",
      description: "Colecione medalhas especiais ao completar desafios e marcos importantes",
      gradient: "from-orange/20 to-purple/20",
      borderColor: "border-orange/40"
    },
    {
      icon: "🎁",
      title: "Recompensas diárias",
      description: "Volte todo dia para ganhar bônus exclusivos e multiplicadores de XP",
      gradient: "from-purple/20 to-blue/20",
      borderColor: "border-purple/40"
    },
    {
      icon: "🖼️",
      title: "Álbum de coleção",
      description: "Salve suas obras de arte favoritas e construa sua galeria pessoal",
      gradient: "from-blue/20 to-green/20",
      borderColor: "border-blue/40"
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-cream relative overflow-hidden">
      {/* Decorative paint splashes */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-yellow/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-56 h-56 bg-purple/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-orange/10 rounded-full blur-2xl" />
      
      {/* Paint brushstroke decoration */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange via-purple via-blue to-green" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-[family-name:var(--font-fredoka)] text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Colorir nunca foi tão viciante
          </h2>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`relative p-6 md:p-8 rounded-3xl bg-gradient-to-br ${feature.gradient} border-2 ${feature.borderColor} backdrop-blur-sm transition-all hover:scale-[1.02] hover:shadow-xl group`}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl md:text-5xl flex-shrink-0 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-fredoka)] text-xl md:text-2xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/50 to-transparent rounded-tr-3xl rounded-bl-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
