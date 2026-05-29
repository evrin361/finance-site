"use client"
import { supabase } from "@/lib/supabase"
import { useState, useEffect } from "react"

import { motion, AnimatePresence } from "framer-motion"
import toast, { Toaster } from "react-hot-toast"
import {
  BarChart3,
  Bitcoin,
  Coins,
  TrendingUp
} from "lucide-react"
export default function FinancialAnalysisHomepage() {

  const [step, setStep] = useState(1)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showTopBtn, setShowTopBtn] = useState(false)
  const [fullName, setFullName] = useState("")
  const [phone, setPhone] = useState("")
  const [market, setMarket] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<any>({})
  const scrollToSection = (id: string) => {
  const section = document.getElementById(id)

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
    })
  }
}
  const validateStep = () => {

  let newErrors: any = {}

  if (step === 1) {

    if (!fullName) {

      newErrors.fullName = "نام را وارد کنید"

      } else if (/\d/.test(fullName)) {

        newErrors.fullName = "نام نباید شامل عدد باشد"
      }

    if (!phone) {
      newErrors.phone = "شماره موبایل را وارد کنید"
    } else if (phone.length !== 11) {
      newErrors.phone = "شماره موبایل معتبر نیست"
    }
  }

  if (step === 2) {

    if (!market) {
      newErrors.market = "بازار را انتخاب کنید"
    }

    
  }

  setErrors(newErrors)

  return Object.keys(newErrors).length === 0
}
  const handleSubmit = async () => {

  if (!message) {

    setErrors({
      message: "لطفاً توضیحات را وارد کنید"
    })

    return
  }

  if (phone.length < 11) {

    setErrors({
      phone: "شماره موبایل معتبر نیست"
    })

    return
  }

  setLoading(true)

  const { error } = await supabase
    .from("orders")
    .insert([
      {
        full_name: fullName,
        phone: phone,
        market: market,
        message: message,
      },
    ])

  if (error) {
      setLoading(false)
      alert(error.message)

    console.log(error)
  } else {
    setLoading(false)
if (!error) {

  toast.success(
  '🌺 سفارش شما با موفقیت ثبت شد.\nکارشناسان ما در اسرع وقت با شما تماس خواهند گرفت.'
);
await fetch(
  "https://api.telegram.org/bot8432119114:AAHLK2zLyiPEkeVNAXVT3kltOMiNt7qHG9Q/sendMessage",
  {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({

      chat_id: "8560929490",

      text:
`🚀 سفارش جدید ثبت شد

👤 نام: ${fullName}

📞 شماره: ${phone}

📊 بازار: ${market}

📝 پیام:
${message}`

    }),
  }
)
}
    setFullName("")
    setPhone("")
    setMarket("")
    setMessage("")
  }
}
  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
      <>

    <Toaster position="top-right" />
    <div className="min-h-screen bg-[#08111f] text-white font-sans overflow-x-hidden">
      
  <header className="fixed top-3 inset-x-0 z-50 px-3 md:px-0">

<div className="max-w-7xl mx-auto backdrop-blur-xl bg-[#071122]/70 border border-white/10 rounded-[28px] px-4 md:px-10 py-4 shadow-2xl">
    <div className="flex items-center justify-between overflow-hidden">

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3 md:gap-6 shrink-0">

        {/* DESKTOP MENU */}
        <nav className="hidden xl:flex items-center gap-12 text-white font-bold text-lg">

          <a href="#" className="text-yellow-400 relative">
            صفحه اصلی

            <span className="absolute -bottom-3 right-0 w-full h-[3px] bg-yellow-400 rounded-full"></span>
          </a>

          <a
            onClick={() => scrollToSection("services")}
            className="cursor-pointer"
          >
            خدمات
          </a>

          

          <a
            onClick={() => scrollToSection("pricing")}
            className="cursor-pointer"
          >
            تعرفه
          </a>

          <a
          onClick={() => scrollToSection("contact")}
          className="cursor-pointer"
           >
          تماس با ما
        </a>

        </nav>

        {/* MOBILE/TABLET MENU */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="xl:hidden flex items-center justify-center text-white text-2xl sm:text-3xl md:text-4xl shrink-0"
        >
          ☰
        </button>
      </div>

      {/* LEFT SIDE */}
      <div className="flex items-center gap-2 md:gap-5 min-w-0">

        <div className="min-w-0 text-right">

          <h2 className="text-yellow-400 text-xl sm:text-2xl md:text-4xl xl:text-5xl font-black leading-none truncate">
            اسمارت تحلیل
          </h2>

          <p className="text-gray-400 text-xs md:text-sm xl:text-base mt-2">
            تحلیل هوشمند بازارهای مالی
          </p>

        </div>

        <div className="h-10 md:h-14 w-px bg-white/10"></div>

        <div className="w-[70px] h-[70px] md:w-[95px] md:h-[95px] xl:w-[110px] xl:h-[110px] flex items-center justify-center">

          <img
            src="/logonew.png"
            alt="SmartTahlil"
            className="w-full h-full object-contain scale-[1.15]"
          />

        </div>

      </div>

    </div>
      {/* MOBILE MENU */}
      <AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="xl:hidden mt-5 bg-[#0b1627]/95 border border-white/10 rounded-3xl p-6 backdrop-blur-2xl"
    >

      <nav className="flex flex-col gap-6 text-white font-bold text-lg">

        <a
          href="#"
          className="text-yellow-400"
          onClick={() => setMenuOpen(false)}
        >
          صفحه اصلی
        </a>

        <a
          href="#services"
          className="hover:text-yellow-400 transition"
          onClick={() => setMenuOpen(false)}
        >
          خدمات
        </a>

        <a
          href="#pricing"
          className="hover:text-yellow-400 transition"
          onClick={() => setMenuOpen(false)}
        >
          تعرفه
        </a>

        <a
          href="#contact"
          className="hover:text-yellow-400 transition"
          onClick={() => setMenuOpen(false)}
        >
          تماس با ما
        </a>

      </nav>

    </motion.div>
  )}
</AnimatePresence>
  </div>

</header>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-22">
<div className="absolute inset-0 overflow-hidden">

  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#0b1627] via-[#08111f] to-black"></div>

  {/* Golden Glow */}
  <div className="absolute top-[-150px] left-[10%] w-[500px] h-[500px] bg-yellow-500/20 blur-[140px] rounded-full"></div>

  {/* Blue Glow */}
  <div className="absolute bottom-[-200px] right-[5%] w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full"></div>

  {/* Small Light */}
  <div className="absolute top-[35%] left-[45%] w-[180px] h-[180px] bg-yellow-400/10 blur-[90px] rounded-full"></div>

</div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-14 items-center">
          <div>
<div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-yellow-500/20 text-yellow-300 px-6 py-3 rounded-full text-sm mb-8 shadow-lg shadow-yellow-500/10">  
            ✨ تحلیل تخصصی و هوشمند بازارهای مالی
            </div>

            <h1 className="text-[42px] md:text-[68px] font-black leading-[1.15] mb-8 tracking-tight">              تحلیل حرفه‌ای
               <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 bg-clip-text text-transparent block mt-4">
                سهام، طلا، کریپتو و فارکس
              </span>
            </h1>

            <p className="text-gray-300/90 text-xl leading-[2.2] mb-12 max-w-2xl">
              تصمیم‌های مالی مطمئن با تحلیل‌های دقیق، گزارش‌های قابل فهم و
              پشتیبانی تخصصی ۶ ماهه برای سرمایه‌گذاران حرفه‌ای و تازه‌کار.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#order-form"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:scale-105 hover:shadow-yellow-500/30 text-black px-10 py-5 rounded-2xl font-black text-lg transition-all duration-300 shadow-2xl inline-flex items-center justify-center"
              >
                ثبت سفارش تحلیل
              </a>

              <a
                href="#samples"
                className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-yellow-400 hover:text-yellow-400 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                مشاهده نمونه تحلیل
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-14 max-w-xl">
              <div>
                <h3 className="text-3xl font-black text-yellow-400">۶ ماه</h3>
                <p className="text-gray-400 mt-2">پشتیبانی تخصصی</p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-yellow-400">+۴ بازار</h3>
                <p className="text-gray-400 mt-2">تحلیل حرفه‌ای</p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-yellow-400">۲۴/۷</h3>
                <p className="text-gray-400 mt-2">پاسخگویی سریع</p>
              </div>
            </div>
          </div>

          {/* Chart Card */}
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-gray-400">وضعیت بازار</p>
                  <h3 className="text-2xl font-bold mt-2">تحلیل هوشمند سرمایه</h3>
                </div>

                <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl text-sm">
                  رشد بازار
                </div>
              </div>

              <div className="space-y-5">
                {[70, 85, 60, 90].map((value, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">
                        {[
                          'تحلیل سهام',
                          'تحلیل کریپتو',
                          'تحلیل طلا',
                          'تحلیل فارکس'
                        ][index]}
                      </span>
                      <span className="text-yellow-400">{value}%</span>
                    </div>

                    <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-full rounded-full"
                        style={{ width: `${value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-5 mt-10">
                <div className="bg-black/30 rounded-2xl p-5 border border-white/5">
                  <p className="text-gray-400 text-sm">هزینه تحلیل</p>
                  <h3 className="text-3xl font-black mt-3 text-yellow-400">
                    ۵ میلیون
                  </h3>
                  <p className="text-gray-500 mt-2 text-sm">تومان</p>
                </div>

                <div className="bg-black/30 rounded-2xl p-5 border border-white/5">
                  <p className="text-gray-400 text-sm">گزارش تکمیلی</p>
                  <h3 className="text-3xl font-black mt-3 text-green-400">
                    ماهانه
                  </h3>
                  <p className="text-gray-500 mt-2 text-sm">بروزرسانی بازار</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <motion.section
        id="services"
        className="py-24 bg-[#0b1627]"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >        
      <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-yellow-400 font-semibold mb-4">خدمات حرفه‌ای</p>
            <h2 className="text-4xl font-black mb-6">
              خدمات تخصصی تحلیل بازار
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-8">
              ارائه تحلیل‌های دقیق برای بازارهای مالی مختلف با گزارش حرفه‌ای و
              قابل فهم.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'تحلیل سهام',
                desc: 'بررسی روند سهم‌ها، نقاط ورود و خروج و تحلیل تکنیکال و بنیادی.'
              },
              {
                title: 'تحلیل ارز دیجیتال',
                desc: 'تحلیل بیت‌کوین، اتریوم و سایر رمزارزها با استراتژی حرفه‌ای.'
              },
              {
                title: 'تحلیل طلا',
                desc: 'بررسی روند اونس جهانی و بازار طلا برای سرمایه‌گذاری بهتر.'
              },
              {
                title: 'تحلیل فارکس',
                desc: 'تحلیل جفت‌ارزها و بازار جهانی با مدیریت ریسک حرفه‌ای.'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-3xl p-8 transition-all hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 text-2xl mb-6">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-8">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Us */}
      {/* Analysis Samples */}
<section id="samples" className="py-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <p className="text-yellow-400 font-semibold mb-4">
        نمونه تحلیل‌ها
      </p>

      <h2 className="text-5xl font-black mb-6">
        آخرین تحلیل‌های انجام‌شده
      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto leading-8">
        نمونه‌ای از تحلیل‌های حرفه‌ای انجام‌شده در بازارهای مالی مختلف.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
  {
    title: 'تحلیل سهام',
    desc: 'بررسی روند سهم‌ها، نقاط ورود و خروج و تحلیل تکنیکال و بنیادی.',
    icon: <BarChart3 size={40} className="text-yellow-400" />
  },
  {
    title: 'تحلیل ارز دیجیتال',
    desc: 'تحلیل بیت‌کوین، اتریوم و سایر رمزارزها با استراتژی حرفه‌ای.',
    icon: <Bitcoin size={40} className="text-yellow-400" />
  },
  {
    title: 'تحلیل طلا',
    desc: 'بررسی روند اونس جهانی و بازار طلا برای سرمایه‌گذاری بهتر.',
    icon: <Coins size={40} className="text-yellow-400" />
  },
  {
    title: 'تحلیل فارکس',
    desc: 'تحلیل جفت‌ارزها و بازار جهانی با مدیریت ریسک حرفه‌ای.',
    icon: <TrendingUp size={40} className="text-yellow-400" />
  }
]

      .map((item, index) => (

        <div
          key={index}
          className="group relative overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 hover:border-yellow-400/30 hover:-translate-y-2 transition-all duration-500"
        >

          {/* Glow */}
          <div className="absolute top-[-80px] left-[-80px] w-40 h-40 bg-yellow-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

          <div className="relative z-10">

            <div className="flex items-center justify-between mb-6">

              <div className="bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 px-4 py-2 rounded-xl text-sm">
                {item.market}
              </div>

              <div className="text-green-400 font-black text-xl">
                {item.result}
              </div>

            </div>

            <h3 className="text-3xl font-black mb-5">
              {item.title}
            </h3>

            <p className="text-gray-400 leading-8 mb-8">
              {item.desc}
            </p>

            <button className="w-full bg-white/5 hover:bg-yellow-500 hover:text-black border border-white/10 rounded-2xl py-4 font-bold transition-all duration-300">
              مشاهده جزئیات تحلیل
            </button>

          </div>

        </div>

      ))}

    </div>

  </div>
</section>

      <section id="order-form" className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-yellow-400 font-semibold mb-4">چرا ما؟</p>
            <h2 className="text-4xl font-black leading-tight mb-8">
              تحلیل دقیق برای
              <span className="text-yellow-400 block mt-3">
                تصمیم‌گیری مطمئن
              </span>
            </h2>

            <div className="space-y-6">
              {[
                'گزارش شفاف و قابل فهم',
                'پشتیبانی ۶ ماهه پس از تحلیل',
                'بروزرسانی دوره‌ای تحلیل‌ها',
                'پاسخگویی سریع در واتساپ و تلگرام',
                'تحلیل تخصصی بازارهای مالی جهانی'
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white/5 rounded-2xl p-5 border border-white/5"
                >
                  <div className="w-10 h-10 rounded-full bg-yellow-500 text-black flex items-center justify-center font-black">
                    ✓
                  </div>
                  <p className="text-lg text-gray-200">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 shadow-[0_0_60px_rgba(250,204,21,0.08)]">
          <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] bg-yellow-500/10 blur-[100px] rounded-full"></div>
          <div className="relative overflow-hidden bg-white/5 backdrop-blur-2xl rounded-[36px] p-10 border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-yellow-500/10 blur-3xl rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-400/5 blur-3xl rounded-full"></div>
            <div className="mb-10">

  <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
    <span>مرحله {step} از 3</span>

    <span>
      {
        step === 1
          ? "اطلاعات اولیه"
          : step === 2
          ? "انتخاب بازار"
          : "جزئیات تحلیل"
      }
    </span>
  </div>

  <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
    <div
      className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-500"
      style={{
        width:
          step === 1
            ? "33%"
            : step === 2
            ? "66%"
            : "100%"
      }}
    ></div>
  </div>

</div>

<div className="relative z-10">
              <h3 className="text-5xl font-black mb-5 leading-tight tracking-tight">            
                   ثبت سفارش تحلیل
              </h3>

              <p className="text-gray-400 mb-10 leading-8 transition-all duration-300">

                {
                  step === 1
                    ? "اطلاعات اولیه خود را برای شروع ثبت کنید."
                    : step === 2
                    ? "بازار مالی موردنظر برای تحلیل را انتخاب کنید."
                    : "جزئیات تحلیل و اهداف سرمایه‌گذاری خود را وارد کنید."
                }

              </p>

          <div className="space-y-5">

             {/* STEP 1 */}
              {step === 1 && (
                
                <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">

                    <div className="relative">
            

                      <input
                          className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl pr-6 pl-6 py-5 outline-none focus:border-yellow-400 focus:bg-white/10 transition-all duration-300 text-white placeholder:text-gray-500"
                          placeholder="نام و نام خانوادگی خود را وارد کنید"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                      />
                      {errors.fullName && (
                      <p className="text-red-400 text-sm mt-2">
                        {errors.fullName}
                      </p>
                    )}
                    </div>

                      <div className="relative">
        

                        <input
                          className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl pr-6 pl-6 py-5 outline-none focus:border-yellow-400 focus:bg-white/10 transition-all duration-300 text-white placeholder:text-gray-500"
                          placeholder="شماره تماس جهت هماهنگی"
                          type="text"
                          value={phone}
                          onChange={(e) =>
                            setPhone(
                              e.target.value.replace(/[^0-9۰-۹]/g, "")
                            )
                          }
                        />
                        {errors.phone && (
                        <p className="text-red-400 text-sm mt-2">
                          {errors.phone}
                        </p>
                      )}
                      </div>

                      <button
                        onClick={() => {
                          if (validateStep()) {
                            setStep(2)
                          }
                        }}
                          className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 hover:scale-[1.02] hover:shadow-yellow-500/30 shadow-2xl text-black font-black py-5 rounded-2xl text-xl transition-all duration-300"                      >
                        ادامه
                      </button>

                </div>
                
             )}

 {/* STEP 2 */}
{step === 2 && (
  <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">

    <div className="relative">

      <select
        value={market}
        onChange={(e) => setMarket(e.target.value)}
        className="w-full appearance-none bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-yellow-400 focus:bg-white/10 transition-all duration-300 text-white shadow-lg hover:border-yellow-500/30 cursor-pointer"
      >

        <option value="">انتخاب بازار مالی</option>
        <option>بورس</option>
        <option>ارز دیجیتال</option>
        <option>طلا</option>
        <option>فارکس</option>

      </select>

      <div className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-yellow-400 text-sm">
        ▼
      </div>

    </div>

    {errors.market && (
      <p className="text-red-400 text-sm mt-2">
        {errors.market}
      </p>
    )}

    <div className="flex gap-4">

      <button
        onClick={() => setStep(1)}
        className="w-1/3 bg-white/5 border border-white/10 text-white py-5 rounded-2xl font-bold"
      >
        بازگشت
      </button>

      <button
        onClick={() => {
          if (validateStep()) {
            setStep(3)
          }
        }}
        className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 hover:scale-[1.02] hover:shadow-yellow-500/30 shadow-2xl text-black font-black py-5 rounded-2xl text-xl transition-all duration-300"
      >
        ادامه
      </button>

    </div>

  </div>
)}
              {/* STEP 3 */}
              {step === 3 && (
                <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">

                  <div className="relative">

                   

                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5} // عدد به جای رشته
                      className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl pr-6 pl-6 py-5 outline-none focus:border-yellow-400 focus:bg-white/10 transition-all duration-300 text-white placeholder:text-gray-500"
                      placeholder="نماد، توضیحات و هدف سرمایه‌گذاری خود را وارد کنید"
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-2">
                        {errors.message}
                      </p>
                    )}
                    
                  </div>
                    
                  <div className="flex gap-4">

                    <button
                      onClick={() => {
                      if (validateStep()) {
                        setStep(2)
                      }
                      } }
                      className="w-1/3 bg-white/5 border border-white/10 text-white py-5 rounded-2xl font-bold"
                    >
                      بازگشت
                    </button>

                    <button
                      onClick={handleSubmit}
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 hover:scale-[1.02] hover:shadow-yellow-500/30 shadow-2xl text-black font-black py-5 rounded-2xl text-xl transition-all duration-300"
                    >
                      {loading ? "در حال ارسال..." : "ارسال درخواست"}
                    </button>

                  </div>

                  <p className="text-center text-gray-500 text-sm mt-5 leading-7">
                    اطلاعات شما کاملاً محرمانه بوده و فقط جهت ارائه خدمات تحلیل استفاده خواهد شد.
                  </p>

                </div>
              )}

          </div>           
</div>
</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-[#0b1627]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-yellow-400 font-semibold mb-4">تعرفه خدمات</p>
          <h2 className="text-5xl font-black mb-8">پلن حرفه‌ای تحلیل</h2>

          <div className="bg-white/5 border border-white/10 rounded-[40px] p-12 shadow-2xl">
            <div className="text-6xl font-black text-yellow-400 mb-4">
              ۵,۰۰۰,۰۰۰
            </div>

            <p className="text-gray-300 text-xl mb-10">تومان برای هر تحلیل تخصصی</p>

            <div className="grid md:grid-cols-2 gap-5 text-right mb-10">
              {[
                'تحلیل کامل و تخصصی',
                'گزارش قابل فهم',
                '۶ ماه پشتیبانی',
                'بروزرسانی ماهانه'
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-black/20 border border-white/5 rounded-2xl p-5"
                >
                  {item}
                </div>
              ))}
            </div>

            <a
              href="#order-form"
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black px-10 py-5 rounded-2xl font-black text-xl transition-all"
            >
              شروع همکاری
            </a>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section
  id="contact"
  className="py-24 bg-[#0b1627] relative overflow-hidden"
>

        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-yellow-400 font-semibold mb-4">
              ارتباط با ما
            </p>

            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              همیشه کنار شما هستیم
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto leading-8 text-lg">
              برای دریافت مشاوره، ثبت سفارش تحلیل و ارتباط با کارشناسان
              اسمارت تحلیل از طریق شبکه‌های زیر با ما در تماس باشید.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* WhatsApp */}
            <a
              href="https://wa.me/989927320627"
              target="_blank"
              className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-[32px] p-8 transition-all duration-300 hover:-translate-y-2 backdrop-blur-xl"
            >

              <div className="w-20 h-20 rounded-3xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-4xl mb-8">
                💬
              </div>

              <h3 className="text-3xl font-black mb-4">
                واتساپ
              </h3>

              <p className="text-gray-400 leading-8 mb-6">
                پاسخگویی سریع برای مشاوره و ثبت سفارش تحلیل تخصصی بازارهای مالی.
              </p>

              <div className="text-green-400 font-bold text-lg">
                شروع گفتگو →
              </div>

            </a>

            {/* Telegram */}
            <a
              href="https://t.me/SmartTahlil"
              target="_blank"
              className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-[32px] p-8 transition-all duration-300 hover:-translate-y-2 backdrop-blur-xl"
            >

              <div className="w-20 h-20 rounded-3xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-4xl mb-8">
                ✈️
              </div>

              <h3 className="text-3xl font-black mb-4">
                تلگرام
              </h3>

              <p className="text-gray-400 leading-8 mb-6">
                ارتباط مستقیم با تیم اسمارت تحلیل و دریافت پشتیبانی سریع.
              </p>

              <div className="text-blue-400 font-bold text-lg">
                ورود به تلگرام →
              </div>

            </a>

            {/* Rubika */}
            <a
              href="https://rubika.ir/SmartTahlil"
              className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-[32px] p-8 transition-all duration-300 hover:-translate-y-2 backdrop-blur-xl"
            >

              <div className="w-20 h-20 rounded-3xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-4xl mb-8">
                📱
              </div>

              <h3 className="text-3xl font-black mb-4">
                روبیکا
              </h3>

              <p className="text-gray-400 leading-8 mb-6">
                ارتباط و پشتیبانی از طریق پیام‌رسان روبیکا برای کاربران داخلی.
              </p>

              <div className="text-yellow-400 font-bold text-lg">
                ارتباط در روبیکا →
              </div>

            </a>

          </div>

        </div>

      </section>
 {/* Footer */}
{/* Footer */}
{/* Footer */}
{/* Footer */}
<footer id="contact" className="border-t border-white/10 py-14">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start justify-between gap-16">

    {/* RIGHT */}
    <div className="max-w-md text-right">
      <h3 className="text-3xl font-black text-yellow-400 mb-4">
        SmartTahlil
      </h3>

      <p className="text-gray-400 leading-8 text-lg">
        ارائه تحلیل تخصصی بازارهای مالی برای سرمایه‌گذاری هوشمند و حرفه‌ای.
      </p>
    </div>

    {/* CENTER */}
    <div className="text-center">
      <h3 className="text-white text-4xl font-black mb-10">
        راه‌های ارتباطی
      </h3>

      <p className="text-gray-300 text-2xl mb-6">
        شماره تماس و پیامک:
      </p>

      <a
        href="tel:+989927320627"
        dir="ltr"
        className="inline-block text-yellow-400 text-4xl font-black tracking-wide hover:text-yellow-300 transition"
      >
        +989927320627
      </a>
    </div>

    {/* LEFT */}
    <div className="flex flex-wrap justify-center gap-4">

      {/* WhatsApp */}
      <a
        href="https://wa.me/989927320627"
        target="_blank"
        className="px-7 py-4 rounded-2xl bg-green-500/20 border border-green-500/30 text-green-400 hover:bg-green-500/30 transition text-2xl font-bold"
      >
        واتساپ
      </a>

      {/* Telegram */}
      <a
        href="https://t.me/SmartTahlil"
        target="_blank"
        className="px-7 py-4 rounded-2xl bg-sky-500/20 border border-sky-500/30 text-sky-400 hover:bg-sky-500/30 transition text-2xl font-bold"
      >
        تلگرام
      </a>

      {/* Rubika */}
      <a
        href="https://rubika.ir/SmartTahlil"
        target="_blank"
        className="px-7 py-4 rounded-2xl bg-yellow-500/20 border border-yellow-500/30 text-yellow-300 hover:bg-yellow-500/30 transition text-2xl font-bold"
      >
        روبیکا
      </a>

    </div>

  </div>
</footer>
<AnimatePresence>
  {showTopBtn && (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-yellow-400 text-black text-2xl font-black shadow-2xl hover:scale-110 transition-all"
    >
      ↑
    </motion.button>
  )}
</AnimatePresence>
    </div>
      </>

  )
}

