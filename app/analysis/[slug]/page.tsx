import Image from "next/image";
import Reveal from "@/components/Reveal";
type Props = {
  params: Promise<{
  slug: string;
}>;
};

export default async function AnalysisPage({ params }: Props) {
  const { slug } = await params;

  const isGold = slug === "gold18";

  console.log("SLUG =", slug);

const analysisTitle = isGold
  ? "تحلیل طلای ۱۸ عیار ایران"
  : "تحلیل دلار آزاد ایران";

const analysisPrice = isGold
  ? "18,682,000 ریال"
  : "1,703,900 ریال";

const analysisChart = isGold
  ? "/charts/gold18-analysis.png"
  : "/charts/dollar-analysis.png";



  return (
    <main className="max-w-6xl mx-auto px-6 py-12">

      {/* Hero */}

      <section className="mb-16">
<div className="text-right">
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
</div>
            


       <h1 className="text-4xl md:text-5xl md:text-6xl font-black mb-6 text-yellow-500 leading-tight">
  {analysisTitle}
</h1>

        <p className="text-gray-400 text-lg mb-2">
          تاریخ تحلیل: ۱۰ خرداد ۱۴۰۵
        </p>

        <p className="text-gray-400 text-lg">
          قیمت هنگام تحلیل: {analysisPrice}
        </p>

      </section>
<Reveal>
        <section className="mb-16">

        <div
            className="
                bg-zinc-900
                border
                border-zinc-800
                rounded-3xl
                p-8
                shadow-xl
                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-yellow-500/40
                hover:shadow-yellow-500/10
               
            "
            >

            <h2 className="text-xl font-semibold mb-3 text-right">
            ارزیابی SmartTahlil
            </h2>
<div
  className="
    text-right
    leading-8
    space-y-4
  "
>
            <p className="text-gray-300 leading-8">
            این تحلیل بر اساس بررسی ساختار تکنیکال، رفتار قیمت،
            میانگین‌های متحرک، حجم معاملات، RSI و MACD تهیه شده است.
            سناریوهای ارائه شده صرفاً دیدگاه تحلیلی بوده و مسئولیت
            تصمیمات سرمایه‌گذاری بر عهده معامله‌گر است.
            </p>

        </div>
 </div>          
        </section>
</Reveal>
<Reveal>
         <section className="mb-16 pt-6">

        <div
        className="
            bg-zinc-900
            border
            border-zinc-800
            rounded-3xl
            p-8
            shadow-xl
            transition-all
            duration-300

            hover:-translate-y-1
            hover:border-yellow-500/40
            hover:shadow-yellow-500/10
        "
        >


            <h2 className="text-3xl font-bold mb-6 text-right">
                خلاصه مدیریتی تحلیل
            </h2>

            <div
  className="
    text-right
    leading-8
    space-y-4
  "
>

                <p>
روند میان‌مدت طلای ۱۸ عیار همچنان صعودی ارزیابی می‌شود.
</p>

<p>
اصلاح اخیر قیمت بیشتر ماهیت استراحت در روند داشته و هنوز
نشانه‌ای از تغییر روند اصلی مشاهده نمی‌شود.
</p>

<p>
محدوده 18,350,000 تا 18,500,000 ریال مهم‌ترین حمایت کوتاه‌مدت بازار محسوب می‌شود.
</p>

<p>
تا زمانی که قیمت بالای 17,700,000 ریال باقی بماند،
سناریوی غالب بازار همچنان صعودی خواهد بود.
</p>

<p>
عبور قیمت از مقاومت 18,750,000 ریال می‌تواند آغاز موج جدید رشد
و حرکت به سمت اهداف بالاتر باشد.
</p>

            </div>
</div>
            </section>
</Reveal>

<Reveal>
                <section className="mb-16">

                <div
                    className="
                    bg-zinc-900
                    border
                    border-zinc-800
                    rounded-3xl
                    p-8
                    shadow-xl
                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-yellow-500/40
                    hover:shadow-yellow-500/10
                    "
                >

                    <h2 className="text-3xl font-bold mb-6 text-yellow-400 text-center">
                 📈 نمودار تحلیل طلای ۱۸ عیار
                    </h2>

                    <p className="text-gray-400 mb-8 text-center">
                    نمودار مبنای تحلیل شامل EMA20 ،EMA50 ،EMA200 ،RSI و MACD
                    </p>

                    <div className="overflow-hidden rounded-2xl border border-zinc-700 shadow-2xl">

                    <Image
                        src={analysisChart}
                        alt="Dollar Analysis Chart"
                        width={1600}
                        height={900}
                        className="w-full h-auto"
                    />

                    </div>

                    <div
                    className="
                        mt-8
                        grid
                        md:grid-cols-3
                        gap-4
                    "
                    >

                    <div className="bg-zinc-800 rounded-2xl p-5 text-center shadow-lg">
                        <div className="text-yellow-400 font-bold mb-2">
                        روند بلندمدت
                        </div>

                        <div className="text-green-400">
                        صعودی
                        </div>
                    </div>

                    <div className="bg-zinc-800 rounded-2xl p-5 text-center shadow-lg">
                        <div className="text-yellow-400 font-bold mb-2">
                        روند میان‌مدت
                        </div>

                        <div className="text-green-400">
                        صعودی
                        </div>
                    </div>

                    <div className="bg-zinc-800 rounded-2xl p-5 text-center shadow-lg">
                        <div className="text-yellow-400 font-bold mb-2">
                        روند کوتاه‌مدت
                        </div>

                        <div className="text-yellow-300">
                        اصلاحی
                        </div>
                    </div>

                    </div>

                </div>

                </section>
</Reveal>

<Reveal>
            <section className="mb-16">
            <div
            className="
            bg-zinc-900
            border
            border-zinc-800
            rounded-3xl
            p-8
            shadow-xl
            transition-all
            duration-300

            hover:-translate-y-1
            hover:border-yellow-500/40
            hover:shadow-yellow-500/10
        "
        >
            <h2 className="text-3xl font-bold mb-8 text-right">
                تحلیل رایگان SmartTahlil
            </h2>

            <div className="space-y-10 text-gray-300">

                <div>
                    <h3 className="text-2xl font-semibold mb-3 text-yellow-400">
                    📈 روند اصلی بازار
                    </h3>
<div
  className="
    text-right
    leading-8
    space-y-4
  "
>
                    <p className="leading-8">طلای ۱۸ عیار ایران همچنان در یک ساختار صعودی میان‌مدت قرار دارد. میانگین متحرک 20 روزه بالاتر از EMA50 و EMA50 نیز بالاتر از EMA200 قرار گرفته که نشان‌دهنده حفظ قدرت روند و برتری خریداران در بازار است.
.
                    </p>
                </div>
</div>
                <div>
                    <h3 className="text-2xl font-semibold mb-3 text-yellow-400">
                    🎯 محدوده‌های کلیدی بازار
                    </h3>
<div
  className="
    text-right
    leading-8
    space-y-4
  "
>
                    <p className="leading-8">مهم‌ترین حمایت فعلی بازار در محدوده 17,700,000 ریال قرار دارد. تا زمانی که این سطح حفظ شود، ساختار صعودی معتبر ارزیابی می‌شود. مقاومت مهم بعدی بازار نیز در محدوده 18,750,000 ریال قرار گرفته است.
</p>
                </div>
</div>
                <div>
                    <h3 className="text-2xl font-semibold mb-3 text-yellow-400">
                    📊 وضعیت حجم معاملات
                    </h3>
<div
  className="
    text-right
    leading-8
    space-y-4
  "
>
                    <p className="leading-8">حجم معاملات نسبت به میانگین دوره‌های اخیر در وضعیت مطلوب قرار دارد و هنوز نشانه‌ای از خروج سنگین نقدینگی مشاهده نمی‌شود. این موضوع از تداوم روند فعلی حمایت می‌کند.

                    </p>
                </div>
</div>
                <div>
                    <h3 className="text-2xl font-semibold mb-3 text-yellow-400">
                    📉 اندیکاتور RSI
                    </h3>
<div
  className="
    text-right
    leading-8
    space-y-4
  "
>
                    <p className="leading-8">شاخص قدرت نسبی در محدوده خنثی متمایل به صعود قرار گرفته است. هنوز وارد ناحیه اشباع خرید نشده و فضای کافی برای ادامه رشد قیمت وجود دارد.

                    </p>
                </div>
</div>
                <div>
                    <h3 className="text-2xl font-semibold mb-3 text-yellow-400">
                    📈 اندیکاتور MACD
                    </h3>

                    <p className="leading-8">مکدی همچنان سیگنال صعودی خود را حفظ کرده است. واگرایی منفی معناداری مشاهده نمی‌شود و قدرت روند در وضعیت قابل قبول قرار دارد.

                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-3 text-yellow-400">
                    🚀 سناریوی صعودی
                    </h3>

                    <p className="leading-8">در صورت عبور قیمت از مقاومت 18,750,000 ریال، احتمال آغاز موج جدید صعودی افزایش خواهد یافت و بازار می‌تواند وارد فاز رشد پرشتاب‌تری شود.

                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-3 text-yellow-400">
                    ⚠️ سناریوی نزولی
                    </h3>

                    <p className="leading-8">تنها در صورتی که حمایت 17,700,000 ریال از دست برود، احتمال اصلاح عمیق‌تر و افزایش فشار فروش مطرح خواهد شد.

                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-3 text-yellow-400">
                    📌 جمع‌بندی تحلیل
                    </h3>

                    <p className="leading-8">تا زمان حفظ حمایت‌های کلیدی، سناریوی غالب بازار همچنان صعودی است. رفتار میانگین‌های متحرک، حجم معاملات، RSI و MACD همگی در مجموع از ادامه روند فعلی حمایت می‌کنند.

                    </p>
                </div>

                </div>
                </div>
            </section>
</Reveal>
<Reveal>
            <section className="mb-16">

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

                <div className="mb-6 text-right">

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
</div>
                <p className="text-gray-300">
                    تحلیل کامل معامله‌گر محور همراه با برنامه عملیاتی.
                </p>

                

                <div className="space-y-8 text-gray-300 leading-8">

            <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">
                🎯 نقاط ورود پیشنهادی
                </h3>

                <p className="mb-4 text-gray-400">این ناحیه بر اساس رفتار قیمت در اطراف EMA50، ساختار حمایتی بازار و موقعیت فعلی روند انتخاب شده است. معامله‌گر محافظه‌کار منتظر تأیید بازگشت قیمت خواهد ماند و معامله‌گر تهاجمی عبور از مقاومت اصلی را مبنای ورود قرار می‌دهد.
                </p>


                <p>
                ورود محافظه‌کارانه:
              17,900,000 تا 18,150,000 ریال
                </p>

                <p>ورود تهاجمی:
بالاتر از 18,750,000 ریال
                </p>
            </div>

            <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">
                🎯 اهداف قیمتی
                </h3>

                <p className="mb-4 text-gray-400">اهداف زیر بر اساس مقاومت‌های تکنیکال، رفتار تاریخی قیمت و ساختار روند فعلی تعیین شده‌اند. هر هدف می‌تواند محل برداشت بخشی از سود باشد.
                </p>


                <ul className="space-y-2">
                <li>هدف اول:
19,200,000 ریال</li>
                <li>هدف دوم: 19,800,000 ریال</li>
                <li>هدف سوم: 20,500,000 ریال</li>
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">
                🛑 حد ضرر
                </h3>


                <p className="mb-4 text-gray-400">شکست این سطح نشان می‌دهد سناریوی فعلی بازار اعتبار خود را از دست داده و مدیریت ریسک باید فعال شود.
                </p>

                <p>
                17,700,000 ریال
                </p>
            </div>

            <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">
                💰 مدیریت سرمایه
                </h3>

                <p>
                حداکثر 20 تا 25 درصد سرمایه قابل معامله در هر مرحله ورود.
                ورود پله‌ای توصیه می‌شود.
                </p>
            </div>

            <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">
                ⚖️ نسبت ریسک به بازده
                </h3>

                <p>
               حدود 1 به 3 برای هدف اول

و تا 1 به 5 برای اهداف بالاتر
                </p>
            </div>

            <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">
                📈 سناریوی صعودی
                </h3>

                <p>تا زمانی که قیمت بالای 17,700,000 ریال باقی بماند، روند میان‌مدت صعودی ارزیابی می‌شود.

عبور از 18,750,000 ریال می‌تواند آغاز موج جدید رشد باشد.
                </p>
            </div>

            <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">
                📉 سناریوی نزولی
                </h3>

                <p>در صورت شکست 17,700,000 ریال احتمال اصلاح تا محدوده 17,000,000 ریال وجود خواهد داشت.
                </p>
            </div>

            <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">
                ❌ سطح ابطال تحلیل
                </h3>

                <p>
              بسته شدن چند کندل روزانه زیر 17,700,000 ریال
                </p>
            </div>

            <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">
                🚀 برنامه عملیاتی معامله‌گر
                </h3>


                <p className="mb-4 text-gray-400">هدف این برنامه حفظ سرمایه، مدیریت ریسک و افزایش بازده در صورت ادامه روند صعودی بازار است.
                </p>

                <ul className="space-y-2">
                <li>برداشت سود بخشی در هدف اول</li>
                <li>انتقال حد ضرر به نقطه سر به سر</li>
                <li>نگهداری بخشی از موقعیت برای اهداف بالاتر</li>
                <li>مدیریت حجم معامله در مسیر صعود</li>
                </ul>
            </div>


            <div className="mt-10">

            <h3 className="text-2xl font-bold text-yellow-400 mb-6">
                📊 جمع‌بندی حرفه‌ای معامله
            </h3>

            <div className="grid md:grid-cols-3 gap-4">

                <div
                className="
                    bg-zinc-800
                    rounded-2xl
                    p-5
                    text-center
                "
                >
                <div className="text-yellow-400 font-bold mb-2">
                    وضعیت بازار
                </div>

                <div className="text-green-400 text-lg font-bold">
                    صعودی
                </div>
                </div>

                <div
                className="
                    bg-zinc-800
                    rounded-2xl
                    p-5
                    text-center
                "
                >
                <div className="text-yellow-400 font-bold mb-2">
                    سطح اطمینان تحلیل
                </div>

                <div className="text-green-400 text-lg font-bold">
                    79٪
                </div>
                </div>

                <div
                className="
                    bg-zinc-800
                    rounded-2xl
                    p-5
                    text-center
                "
                >
                <div className="text-yellow-400 font-bold mb-2">
                    ریسک معامله
                </div>

                <div className="text-yellow-300 text-lg font-bold">
                    متوسط
                </div>
                </div>

            </div>

            </div>


            </div>

            </div>

            </section>
</Reveal>

<Reveal>
<section className="mt-16 mb-16">

  <div
    className="
      border-t
      border-yellow-500/20
      pt-10
      text-center
    "
  >
    <div className="text-yellow-500/60 text-sm mb-3">
      ━━━━━━━━━━━━━━
    </div>

    <div className="text-2xl font-black text-yellow-400">
      SMARTTAHLIL
    </div>

    <div className="text-zinc-300 mt-2">
      تحلیل هوشمند بازارهای مالی
    </div>

    <div className="text-zinc-500 text-sm mt-1">
      Professional Market Analysis
    </div>

    <div className="text-yellow-500/60 text-sm mt-3">
      ━━━━━━━━━━━━━━
    </div>
  </div>

</section>
</Reveal>

<Reveal>
<section className="mb-24 mt-10 text-center">

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

    hover:-translate-y-1
    hover:shadow-yellow-500/30

    transition-all
    duration-300
  "
>
  🚀 سفارش تحلیل اختصاصی
</button>

</section>
</Reveal>


    </main>
  );
}