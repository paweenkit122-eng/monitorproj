'use client'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

interface Props {
  data: any[]
}

export default function CpuChart({ data }: Props) {
  return (
    <div className="bg-slate-800 p-6 rounded-xl">
      <h2 className="text-xl font-bold mb-4">
        CPU Usage
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="cpu"
            stroke="#3b82f6"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}