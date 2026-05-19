'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function AuthPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit() {
    setLoading(true)
    setError('')

    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) setError(error.message)
      else window.location.href = '/app'
    } else {
      const { error } = await supabase.auth.signUp({ email, password })
      if (error) setError(error.message)
      else window.location.href = '/app'
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFDF5]">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md border border-orange-100">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">🎨 Mundo Tinta</h1>
          <p className="text-gray-500 mt-1">{isLogin ? 'Entre na sua conta' : 'Crie sua conta grátis'}</p>
        </div>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400"
          />
          <input
            type="password"
            placeholder="Sua senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400"
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-[#FF6B35] text-white font-bold py-3 rounded-xl hover:brightness-105 transition"
          >
            {loading ? 'Carregando...' : isLogin ? 'Entrar' : 'Criar conta'}
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-4">
          {isLogin ? 'Não tem conta?' : 'Já tem conta?'}{' '}
          <button onClick={() => setIsLogin(!isLogin)} className="text-[#FF6B35] font-bold">
            {isLogin ? 'Cadastre-se grátis' : 'Entre aqui'}
          </button>
        </p>
      </div>
    </div>
  )
}
