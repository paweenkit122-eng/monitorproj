'use client'

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts'

const COLORS = ['#3b82f6', '#ef4444']

export default function DiskChart({
  used,
  free,
}: any) {
  const data = [
    {
      name: 'Used',
      value: used,
    },
    {
      name: 'Free',
      value: free,
    },
  ]

  return (
    <div className="bg-slate-800 p-6 rounded-xl">
      <h2 className="text-xl font-bold mb-4">
        Disk Usage
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            outerRadius={100}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}