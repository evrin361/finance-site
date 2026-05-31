import Image from "next/image";
type Props = {
  params: {
    slug: string;
  };
};

export default function AnalysisPage({ params }: Props) {
  const { slug } = params;

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">

      {/* Hero */}

      <section className="mb-12">

        <span
            className="
                inline-block
                px-4
                py-2
                rounded-full
                bg-yellow-500/10
                border
                border-yellow-500/30
                text-yellow-400
                text-sm
                mb-4
            "
            >
            تحلیل آرشیوی SmartTahlil
            </span>

            


       <h1 className="text-5xl font-bold mb-4 text-yellow-500">
        تحلیل دلار آزاد ایران
        </h1>

        <p className="text-gray-400 text-lg mb-2">
          تاریخ تحلیل: ۱۰ خرداد ۱۴۰۵
        </p>

        <p className="text-gray-400 text-lg">
          قیمت هنگام تحلیل: 1,703,900 ریال
        </p>

      </section>
        <section className="mb-12">

        <div
            className="
                bg-zinc-900
                border
                border-zinc-800
                rounded-3xl
                p-8
                shadow-lg
            "
            >

            <h2 className="text-xl font-semibold mb-3">
            ارزیابی SmartTahlil
            </h2>

            <p className="text-gray-300 leading-8">
            این تحلیل بر اساس بررسی ساختار تکنیکال، رفتار قیمت،
            میانگین‌های متحرک، حجم معاملات، RSI و MACD تهیه شده است.
            سناریوهای ارائه شده صرفاً دیدگاه تحلیلی بوده و مسئولیت
            تصمیمات سرمایه‌گذاری بر عهده معامله‌گر است.
            </p>

        </div>
           
        </section>
         <section className="mb-12">

        <div
        className="
            bg-zinc-900
            border
            border-zinc-800
            rounded-3xl
            p-8
        "
        >


            <h2 className="text-3xl font-bold mb-6">
                خلاصه مدیریتی تحلیل
            </h2>

            <div className="space-y-4 text-lg">

                <p>
                روند میان‌مدت دلار همچنان صعودی ارزیابی می‌شود.
                </p>

                <p>
                اصلاح اخیر قیمت بیشتر ماهیت استراحت در روند داشته و هنوز
                نشانه‌ای از تغییر روند اصلی مشاهده نمی‌شود.
                </p>

                <p>
                محدوده 1,690,000 تا 1,700,000 ریال مهم‌ترین حمایت کوتاه‌مدت بازار محسوب می‌شود.
                </p>

            </div>
</div>
            </section>
            <section className="mb-12">
<div
        className="
            bg-zinc-900
            border
            border-zinc-800
            rounded-3xl
            p-8
        "
        >
            <h2 className="text-3xl font-bold mb-8">
                تحلیل رایگان SmartTahlil
            </h2>

            <div className="space-y-8">

                <div>
                <h3 className="text-2xl font-semibold mb-3">
                    ساختار بازار
                </h3>

                <p className="leading-8 text-gray-300">
                    روند میان‌مدت دلار همچنان صعودی ارزیابی می‌شود.
                    EMA20 بالاتر از EMA50 قرار دارد و EMA50 نیز بالاتر از EMA200
                    تثبیت شده است که نشان‌دهنده حفظ ساختار صعودی بازار است.
                </p>
                </div>

                <div>
                <h3 className="text-2xl font-semibold mb-3">
                    وضعیت حجم معاملات
                </h3>

                <p className="leading-8 text-gray-300">
                    حجم معاملات در محدوده قابل قبول قرار دارد و کاهش محسوسی
                    در مشارکت معامله‌گران مشاهده نمی‌شود.
                </p>
                </div>

                <div>
                <h3 className="text-2xl font-semibold mb-3">
                    اندیکاتور RSI
                </h3>

                <p className="leading-8 text-gray-300">
                    RSI در محدوده خنثی متمایل به صعودی قرار دارد و هنوز وارد
                    ناحیه اشباع خرید نشده است.
                </p>
                </div>

                <div>
                <h3 className="text-2xl font-semibold mb-3">
                    اندیکاتور MACD
                </h3>

                <p className="leading-8 text-gray-300">
                    مکدی همچنان سیگنال صعودی را حفظ کرده و واگرایی منفی مهمی
                    مشاهده نمی‌شود.
                </p>
                </div>

                <div>
                <h3 className="text-2xl font-semibold mb-3">
                    سناریوی غالب بازار
                </h3>

                <p className="leading-8 text-gray-300">
                    تا زمانی که حمایت‌های اصلی حفظ شوند، احتمال ادامه روند
                    صعودی بیشتر از سناریوهای نزولی ارزیابی می‌شود.
                </p>
                </div>

            </div>
</div>
            </section>

            <section className="mb-12">

            <div
                className="
                    border
                    border-yellow-500/40
                    rounded-3xl
                    p-8
                    bg-gradient-to-br
                    from-yellow-500/10
                    to-yellow-500/5
                    shadow-xl
                "
                >

                <div className="mb-6">

                <span
                    className="
                        inline-block
                        px-4
                        py-2
                        rounded-full
                        bg-yellow-500
                        text-black
                        font-bold
                        text-sm
                        mb-4
                    "
                    >
                    PREMIUM SMARTTAHLIL
                    </span>

                <h2 className="text-3xl font-bold mb-3 text-yellow-400">
                    نسخه حرفه‌ای SmartTahlil
                </h2>

                <p className="text-gray-300">
                    تحلیل کامل معامله‌گر محور همراه با برنامه عملیاتی.
                </p>

                </div>

                <div className="grid md:grid-cols-2 gap-4">

                <div>✅ نقاط ورود دقیق</div>

                <div>✅ اهداف مرحله‌ای</div>

                <div>✅ حد ضرر</div>

                <div>✅ مدیریت سرمایه</div>

                <div>✅ نسبت ریسک به بازده</div>

                <div>✅ سناریوی معامله</div>

                <div>✅ سطح ابطال تحلیل</div>

                <div>✅ برنامه عملیاتی معامله‌گر</div>

                </div>

            </div>

            </section>


<section className="mb-16 text-center">

  <h2 className="text-3xl font-bold mb-4 text-yellow-400">
    تحلیل اختصاصی نیاز داری؟
  </h2>

  <p className="text-gray-400 mb-8">
    تحلیل اختصاصی برای نماد دلخواه خود را سفارش دهید.
  </p>

  <button
  className="
    px-10
    py-5
    rounded-2xl

    bg-gradient-to-r
    from-yellow-500
    to-yellow-400

    text-black
    font-extrabold

    text-xl

    shadow-xl

    hover:scale-105
    hover:shadow-yellow-500/30

    transition-all
    duration-300
  "
>
  🚀 سفارش تحلیل اختصاصی
</button>

</section>



    </main>
  );
}