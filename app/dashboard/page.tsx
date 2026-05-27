'use client'

import { useEffect, useState } from 'react'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import MetricCard from '@/components/MetricCard'
import CpuChart from '@/components/CpuChart'
import RamChart from '@/components/RamChart'
import DiskChart from '@/components/DiskChart'
import ProtectedRoute from '@/components/ProtectedRoute'

import api from '@/lib/axios'

export default function DashboardPage() {
  const [metrics, setMetrics] = useState<any[]>([])

  useEffect(() => {
    fetchMetrics()

    const interval = setInterval(() => {
      fetchMetrics()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const fetchMetrics = async () => {
    try {
      const response = await api.get('/metrics')

      setMetrics(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const latest = metrics[metrics.length - 1]

  return (
    <ProtectedRoute>
      <div className="flex">
        <Sidebar />

        <div className="flex-1">
          <Navbar />

          <div className="p-6">
            <div className="grid grid-cols-3 gap-6 mb-6">
              <MetricCard
                title="CPU"
                value={`${latest?.cpu || 0}%`}
              />

              <MetricCard
                title="RAM"
                value={`${latest?.ram || 0}%`}
              />

              <MetricCard
                title="Disk"
                value={`${latest?.disk || 0}%`}
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <CpuChart data={metrics} />

              <RamChart data={metrics} />
            </div>

            <div className="mt-6">
              <DiskChart
                used={latest?.disk || 0}
                free={100 - (latest?.disk || 0)}
              />
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}