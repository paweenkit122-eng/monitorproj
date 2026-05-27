'use client'

import { useRouter } from 'next/navigation'
import { logout } from '@/lib/auth'

export default function Navbar() {
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  return (
    <div className="h-16 bg-slate-800 flex items-center justify-between px-6">
      <h1 className="text-xl font-bold">
        DevOps Monitoring
      </h1>

      <button
        onClick={handleLogout}
        className="bg-red-600 px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  )
}