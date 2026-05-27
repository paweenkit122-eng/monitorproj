'use client'

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

export default function RamChart({ data }: any) {
  return (
    <div className="bg-slate-800 p-6 rounded-xl">
      <h2 className="text-xl font-bold mb-4">
        RAM Usage
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="ram"
            stroke="#10b981"
            fill="#10b981"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}