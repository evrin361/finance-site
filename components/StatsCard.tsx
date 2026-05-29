export default function StatsCard({
  title,
  value,
}: {
  title: string
  value: string | number
}) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] p-6 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
      <h3 className="text-yellow-400 font-black text-xl">{title}</h3>
      <p className="text-white text-3xl mt-3 font-bold">{value}</p>
    </div>
  )
}