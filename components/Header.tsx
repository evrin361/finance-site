"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
export default function Header() {
const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header
      className="
        sticky
        top-0
        z-50

        bg-black/80
        backdrop-blur-md

        border-b
        border-yellow-500/20
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto

          px-6
          py-3

          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}
        <Link href="/">

        <Image
            src="/logonew.png"
            alt="SmartTahlil"

            width={320}
            height={90}

            className="
            hidden
            md:block
            h-16
            w-auto
            "
        />

        <Image
            src="/logonew.png"
            alt="SmartTahlil"

            width={220}
            height={60}

            className="
            md:hidden
            h-14
            w-auto
            "
        />

        </Link>

        {/* Desktop Menu */}

        <nav
          className="
            hidden
            md:flex
            items-center
            gap-8
          "
        >
          <Link href="/" className="
relative

text-gray-300

hover:text-yellow-400

transition-all
duration-300

after:content-['']
after:absolute
after:left-0
after:-bottom-1

after:h-[2px]
after:w-0

after:bg-yellow-400

after:transition-all
after:duration-300

hover:after:w-full
">
            خانه
          </Link>

          <Link href="/analysis" className="
relative

text-gray-300

hover:text-yellow-400

transition-all
duration-300

after:content-['']
after:absolute
after:left-0
after:-bottom-1

after:h-[2px]
after:w-0

after:bg-yellow-400

after:transition-all
after:duration-300

hover:after:w-full
">
            تحلیل‌ها
          </Link>

          <Link href="/about" className="
relative

text-gray-300

hover:text-yellow-400

transition-all
duration-300

after:content-['']
after:absolute
after:left-0
after:-bottom-1

after:h-[2px]
after:w-0

after:bg-yellow-400

after:transition-all
after:duration-300

hover:after:w-full
">
            درباره ما
          </Link>

          <Link href="/contact" className="
relative

text-gray-300

hover:text-yellow-400

transition-all
duration-300

after:content-['']
after:absolute
after:left-0
after:-bottom-1

after:h-[2px]
after:w-0

after:bg-yellow-400

after:transition-all
after:duration-300

hover:after:w-full
">
            تماس با ما
          </Link>
        </nav>

        {/* CTA */}


        <div className="flex items-center gap-4">

        <button
            className="
            md:hidden
            text-yellow-400
            text-3xl
            "
            onClick={() => setMenuOpen(!menuOpen)}
        >
            ☰
        </button>

        <button
            className="
            hidden
            md:block

            px-5
            py-3

            rounded-xl

            bg-yellow-500
            text-black

            font-bold

            hover:scale-105

            transition-all
            "
        >
            سفارش تحلیل
        </button>

        </div>

      </div>
      
        {menuOpen && (

            <div
                className="
                md:hidden

                bg-black

                border-t
                border-yellow-500/20

                px-6
                py-6

                flex
                flex-col

                gap-5
                "
            >

                <Link
                href="/"
                className="block text-lg"
                >
                خانه
                </Link>

                <Link
                href="/analysis"
                className="block text-lg"
                >
                تحلیل‌ها
                </Link>

                <Link
                href="/about"
                className="block text-lg"
                >
                درباره ما
                </Link>

                <Link
                href="/contact"
                className="block text-lg"
                >
                تماس با ما
                </Link>

                <button
                className="
                    mt-2

                    w-full

                    bg-yellow-500
                    text-black

                    py-3

                    rounded-xl

                    font-bold
                "
                >
                سفارش تحلیل
                </button>

            </div>

            )}



    </header>
  );
}