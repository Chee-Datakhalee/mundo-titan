import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-orange rounded-xl flex items-center justify-center">
                <span className="text-xl">🎨</span>
              </div>
              <span className="font-[family-name:var(--font-fredoka)] text-xl font-bold text-foreground">
                Mundo Tinta
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Pinte seu mundo, todo dia.
            </p>
          </div>
          
          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link 
              href="/termos" 
              className="text-muted-foreground hover:text-orange transition-colors"
            >
              Termos
            </Link>
            <Link 
              href="/privacidade" 
              className="text-muted-foreground hover:text-orange transition-colors"
            >
              Privacidade
            </Link>
            <Link 
              href="/contato" 
              className="text-muted-foreground hover:text-orange transition-colors"
            >
              Contato
            </Link>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Mundo Tinta. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
