import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Gradient background with paint brushstroke effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange via-purple via-blue to-green opacity-90" />
      
      {/* Brushstroke texture overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-[10%] w-[30%] h-16 bg-white/10 rounded-full blur-sm transform -rotate-3" />
          <div className="absolute top-1/4 right-[5%] w-[25%] h-12 bg-white/10 rounded-full blur-sm transform rotate-2" />
          <div className="absolute bottom-1/3 left-[20%] w-[40%] h-10 bg-white/10 rounded-full blur-sm transform -rotate-1" />
          <div className="absolute bottom-10 right-[15%] w-[20%] h-14 bg-white/10 rounded-full blur-sm transform rotate-3" />
        </div>
      </div>
      
      {/* Paint splatter decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl" />
      <div className="absolute bottom-16 right-20 w-32 h-32 bg-white/15 rounded-full blur-2xl" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow/30 rounded-full blur-lg" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-fredoka)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance drop-shadow-lg">
            Seu próximo desenho favorito está esperando
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 text-pretty">
            Junte-se a milhares de pessoas que já estão colorindo todo dia
          </p>
          
          <Button 
            size="lg"
            className="bg-white hover:bg-white/90 text-orange font-bold text-lg px-10 py-7 rounded-2xl shadow-2xl transition-all hover:scale-105 hover:shadow-white/30"
          >
            Criar minha conta grátis →
          </Button>
        </div>
      </div>
    </section>
  )
}
