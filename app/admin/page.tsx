"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

import StatsCard from "@/components/StatsCard"

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

export default function AdminPage() {
  const router = useRouter()
  const [orders, setOrders] = useState<any[]>([])

  useEffect(() => {
    const admin = localStorage.getItem("admin")
    if (!admin) {
      router.push("/login")
    }
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false })

    if (!error && data) {
      const fixedData = data.map((item) => ({
        ...item,
        status: item.status?.trim() || "جدید",
      }))
      setOrders(fixedData)
    }
  }

  const changeStatus = async (id, currentStatus) => {
    let newStatus = "جدید"
    if (currentStatus === "جدید") newStatus = "درحال بررسی"
    else if (currentStatus === "درحال بررسی") newStatus = "انجام شد"
    else newStatus = "جدید"

    const { error } = await supabase
      .from("orders")
      .update({ status: newStatus })
      .eq("id", id)

    if (!error) fetchOrders()
  }

  const deleteOrder = async (id) => {
    if (!confirm("از حذف این سفارش مطمئنی؟")) return
    const { error } = await supabase.from("orders").delete().eq("id", id)
    if (!error) fetchOrders()
  }

  const newOrders = orders.filter((o) => o.status === "جدید").length
  const reviewingOrders = orders.filter((o) => o.status === "درحال بررسی").length
  const doneOrders = orders.filter((o) => o.status === "انجام شد").length

  const chartData = [
    { name: "جدید", value: newOrders },
    { name: "درحال بررسی", value: reviewingOrders },
    { name: "انجام شد", value: doneOrders },
  ]

  const COLORS = ["#FACC15", "#3B82F6", "#22C55E"]

  return (
    <div className="min-h-screen bg-[#071122] p-5 md:p-10 text-white">
      {/* Header */}
      <div className="w-full mb-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-5">
        <h1 className="text-2xl md:text-4xl font-black text-white">پنل مدیریت</h1>
        <button
          onClick={() => {
            localStorage.removeItem("admin")
            router.push("/login")
          }}
          className="bg-red-500/20 border border-red-400/30 hover:bg-red-500/30 text-red-300 px-6 py-3 rounded-2xl font-black transition-all duration-300"
        >
          خروج
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <StatsCard title="کل سفارش‌ها" value={orders.length} />
        <StatsCard title="سفارش‌های جدید" value={newOrders} />
        <StatsCard title="درحال بررسی" value={reviewingOrders} />
        <StatsCard title="انجام شد" value={doneOrders} />
      </div>

      {/* PieChart */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[35px] p-5 md:p-10 mb-10 h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-end items-center my-6">
      <button
        onClick={() => {
          window.open("/api/export/orders", "_blank")
        }}
        className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl transition-all"
         >
        دانلود Excel
      </button>
      </div>
      {/* Orders List */}
      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="rounded-[35px] bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
              <p>
                <span className="text-yellow-400 font-bold">نام:</span> {order.full_name || "ثبت نشده"}
              </p>
              <p>
                <span className="text-yellow-400 font-bold">شماره:</span> {order.phone || "ثبت نشده"}
              </p>
              <p>
                <span className="text-yellow-400 font-bold">بازار:</span> {order.market || "ثبت نشده"}
              </p>
              <p>
                <span className="text-yellow-400 font-bold">توضیحات:</span> {order.message || "ثبت نشده"}
              </p>
              <p>
                <span className="text-yellow-400 font-bold">تاریخ:</span>{" "}
                {order.created_at ? new Date(order.created_at).toLocaleDateString("fa-IR") : "ثبت نشده"}
              </p>
            </div>

            {/* Status Button */}
            <div className="flex items-center justify-between gap-10 mt-10">
              <span className="whitespace-nowrap text-2xl font-black text-yellow-400">وضعیت :</span>
              <button
                onClick={() => changeStatus(order.id, order.status)}
                className={`w-[190px] h-[70px] rounded-full relative flex items-center justify-between px-5 transition-all duration-300 border shadow-[0_0_30px_rgba(250,204,21,0.3)]
                  ${order.status === "جدید" ? "bg-yellow-400/40 border-yellow-300" : order.status === "درحال بررسی" ? "bg-blue-400/40 border-blue-300" : "bg-green-400/40 border-green-300"}
                `}
              >
                <span className="text-xl font-black text-white">{order.status}</span>
                <div className="w-[55px] h-[55px] rounded-full bg-yellow-300 shadow-[0_0_20px_rgba(250,204,21,0.9)] flex-shrink-0" />
              </button>
            </div>

            {/* Delete */}
            <button
              onClick={() => deleteOrder(order.id)}
              className="w-full mt-6 bg-red-500/20 border border-red-400/30 hover:bg-red-500/30 text-red-300 py-4 rounded-2xl font-black text-xl transition-all duration-300"
            >
              حذف سفارش
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}