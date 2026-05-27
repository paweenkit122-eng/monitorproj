'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import api from '@/lib/axios'
import { saveToken } from '@/lib/auth'

export default function LoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    try {
      setLoading(true)

      const response = await api.post('/auth/login', {
        email,
        password,
      })

      saveToken(response.data.token)

      router.push('/dashboard')
    } catch (error) {
      alert('Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      <div className="bg-slate-800 p-8 rounded-xl w-[400px]">
        <h1 className="text-3xl font-bold mb-6 text-center">
          DevOps Dashboard
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded bg-slate-700 mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded bg-slate-700 mb-4"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 p-3 rounded"
        >
          {loading ? 'Loading...' : 'Login'}
        </button>
      </div>
    </div>
  )
}