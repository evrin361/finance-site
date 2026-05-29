"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {

  const router = useRouter()

  const [password, setPassword] = useState("")

  const handleLogin = () => {

    if (password === "123456") {

      localStorage.setItem("admin", "true")

      router.push("/admin")

    } else {

      alert("رمز عبور اشتباه است")
    }
  }

  return (

    <div className="min-h-screen bg-[#071122] flex items-center justify-center p-6">

      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-[35px] p-10 shadow-2xl">

        <h1 className="text-4xl font-black text-white text-center mb-10">
          ورود ادمین
        </h1>

        <input
          type="password"
          placeholder="رمز عبور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-yellow-400"
        />

        <button
          onClick={handleLogin}
          className="w-full mt-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black font-black py-5 rounded-2xl text-xl"
        >
          ورود
        </button>

      </div>

    </div>
  )
}