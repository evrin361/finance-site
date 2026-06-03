export default function Footer() {
  return (
    <footer
      className="
        border-t
        border-yellow-500/20

        bg-black

        mt-20
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto

          px-6
          py-12
        "
      >
        <div
          className="
            grid
            md:grid-cols-3
            gap-10
          "
        >
          {/* Brand */}

          <div>
            <h3
              className="text-right
                text-2xl
                font-extrabold
                text-yellow-400
                mb-4
              "
            >
              SmartTahlil
            </h3>

            <p className="text-gray-400 leading-8">
              تحلیل حرفه‌ای بازارهای مالی با تمرکز بر
              تصمیم‌گیری آگاهانه و مدیریت سرمایه.
            </p>
          </div>

          {/* Links */}

          <div>
            <h4
  className="text-right
    text-lg
    font-bold
    text-yellow-400
    mb-4
  "
>
  دسترسی سریع
</h4>

            <ul className="space-y-3 text-gray-400">
              <li>خانه</li>
              <li>تحلیل‌ها</li>
              <li>درباره ما</li>
              <li>تماس با ما</li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h4
  className="text-right
    text-lg
    font-bold
    text-yellow-400
    mb-4
  "
>
  ارتباط با ما
</h4>

            <div className="space-y-3 text-gray-400">
              <p>SmartTahlil Team</p>

              <p>support@smarttahlil.ir</p>

              <p>تحلیل اختصاصی بازارهای مالی</p>
            </div>
          </div>
        </div>

        <div
          className="
            mt-10
            pt-6

            border-t
            border-yellow-500/10

            text-center
            text-gray-500
            text-sm
          "
        >
          © 2026 SmartTahlil — تمامی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
}