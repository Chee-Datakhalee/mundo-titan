"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const colors = ["#FF6B35", "#8B5CF6", "#22C55E", "#3B82F6", "#FCD34D", "#EC4899"]

export function Hero() {
  const [selectedColor, setSelectedColor] = useState(colors[0])
  const [filledParts, setFilledParts] = useState<Record<string, string>>({})

  const handlePartClick = (partId: string) => {
    setFilledParts(prev => ({
      ...prev,
      [partId]: selectedColor
    }))
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-cream">
      {/* Decorative paint splashes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-orange/20 rounded-full blur-3xl" />
      <div className="absolute top-40 right-20 w-40 h-40 bg-purple/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green/20 rounded-full blur-2xl" />
      <div className="absolute bottom-40 right-1/3 w-36 h-36 bg-blue/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-12 h-12 bg-orange rounded-2xl flex items-center justify-center">
              <span className="text-2xl">🎨</span>
            </div>
            <span className="font-[family-name:var(--font-fredoka)] text-2xl font-bold text-foreground">Mundo Tinta</span>
          </div>
          
          {/* Headline */}
          <h1 className="font-[family-name:var(--font-fredoka)] text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Pinte. Ganhe. Volte todo dia.
          </h1>
          
          {/* Subheadline */}
          <p className="font-sans text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl text-pretty">
            O app de colorir que vicia — novos desenhos diários, recompensas reais e temas exclusivos. Comece grátis agora.
          </p>
          
          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-orange hover:bg-orange/90 text-white font-bold text-lg px-8 py-6 rounded-2xl shadow-lg shadow-orange/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-orange/40"
          >
            Quero Colorir Grátis →
          </Button>
          
          {/* Trust badge */}
          <p className="text-sm text-muted-foreground mt-4">
            Sem cartão de crédito. Acesso imediato.
          </p>
        </div>
        
        {/* Interactive Canvas Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-border">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🎨</span>
              <span className="font-[family-name:var(--font-fredoka)] text-lg font-semibold text-foreground">
                Teste agora — pinte antes de criar sua conta
              </span>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* SVG Canvas */}
              <div className="flex-1 bg-cream/50 rounded-2xl p-4 min-h-[300px] flex items-center justify-center">
                <svg viewBox="0 0 200 280" className="w-full max-w-[240px] h-auto">
                  {/* Soccer Player Lineart */}
                  {/* Head */}
                  <circle 
                    cx="100" cy="40" r="25" 
                    fill={filledParts['head'] || 'white'} 
                    stroke="#374151" 
                    strokeWidth="2"
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => handlePartClick('head')}
                  />
                  {/* Hair */}
                  <path 
                    d="M75 35 Q85 15 100 15 Q115 15 125 35" 
                    fill={filledParts['hair'] || 'white'} 
                    stroke="#374151" 
                    strokeWidth="2"
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => handlePartClick('hair')}
                  />
                  {/* Jersey */}
                  <path 
                    d="M70 70 L60 90 L60 130 L80 130 L80 100 L120 100 L120 130 L140 130 L140 90 L130 70 Z" 
                    fill={filledParts['jersey'] || 'white'} 
                    stroke="#374151" 
                    strokeWidth="2"
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => handlePartClick('jersey')}
                  />
                  {/* Left Arm */}
                  <path 
                    d="M60 90 L40 110 L45 120 L65 105" 
                    fill={filledParts['leftArm'] || 'white'} 
                    stroke="#374151" 
                    strokeWidth="2"
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => handlePartClick('leftArm')}
                  />
                  {/* Right Arm */}
                  <path 
                    d="M140 90 L160 110 L155 120 L135 105" 
                    fill={filledParts['rightArm'] || 'white'} 
                    stroke="#374151" 
                    strokeWidth="2"
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => handlePartClick('rightArm')}
                  />
                  {/* Shorts */}
                  <path 
                    d="M80 130 L75 170 L95 170 L100 145 L105 170 L125 170 L120 130 Z" 
                    fill={filledParts['shorts'] || 'white'} 
                    stroke="#374151" 
                    strokeWidth="2"
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => handlePartClick('shorts')}
                  />
                  {/* Left Leg */}
                  <path 
                    d="M80 170 L70 230 L90 230 L95 170" 
                    fill={filledParts['leftLeg'] || 'white'} 
                    stroke="#374151" 
                    strokeWidth="2"
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => handlePartClick('leftLeg')}
                  />
                  {/* Right Leg */}
                  <path 
                    d="M105 170 L110 230 L130 230 L120 170" 
                    fill={filledParts['rightLeg'] || 'white'} 
                    stroke="#374151" 
                    strokeWidth="2"
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => handlePartClick('rightLeg')}
                  />
                  {/* Left Boot */}
                  <path 
                    d="M65 230 L60 250 L95 250 L95 230" 
                    fill={filledParts['leftBoot'] || 'white'} 
                    stroke="#374151" 
                    strokeWidth="2"
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => handlePartClick('leftBoot')}
                  />
                  {/* Right Boot */}
                  <path 
                    d="M105 230 L105 250 L140 250 L135 230" 
                    fill={filledParts['rightBoot'] || 'white'} 
                    stroke="#374151" 
                    strokeWidth="2"
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => handlePartClick('rightBoot')}
                  />
                  {/* Soccer Ball */}
                  <circle 
                    cx="160" cy="220" r="20" 
                    fill={filledParts['ball'] || 'white'} 
                    stroke="#374151" 
                    strokeWidth="2"
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => handlePartClick('ball')}
                  />
                  <path d="M150 215 L155 225 L165 225 L170 215 L160 208 Z" stroke="#374151" strokeWidth="1" fill="none"/>
                </svg>
              </div>
              
              {/* Color Palette */}
              <div className="flex flex-col gap-4">
                <p className="font-semibold text-foreground text-center lg:text-left">Escolha uma cor:</p>
                <div className="flex flex-wrap lg:flex-col gap-3 justify-center">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-4 transition-all hover:scale-110 ${
                        selectedColor === color ? 'border-foreground scale-110 shadow-lg' : 'border-transparent'
                      }`}
                      style={{ backgroundColor: color }}
                      aria-label={`Selecionar cor ${color}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Button 
                className="bg-orange hover:bg-orange/90 text-white font-bold px-6 py-3 rounded-xl"
              >
                Criar minha conta grátis →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
