interface Props {
  title: string
  value: string
}

export default function MetricCard({
  title,
  value,
}: Props) {
  return (
    <div className="bg-slate-800 p-6 rounded-xl">
      <h2 className="text-slate-400">
        {title}
      </h2>

      <p className="text-4xl font-bold mt-4">
        {value}
      </p>
    </div>
  )
}