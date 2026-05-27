import Link from 'next/link'

export default function Sidebar() {
  return (
    <div className="w-64 bg-slate-800 h-screen p-4">
      <div className="text-2xl font-bold mb-10">
        Dashboard
      </div>

      <div className="flex flex-col gap-4">
        <Link href="/dashboard">Overview</Link>
        <Link href="/dashboard/cpu">CPU</Link>
        <Link href="/dashboard/ram">RAM</Link>
        <Link href="/dashboard/disk">Disk</Link>
      </div>
    </div>
  )
}