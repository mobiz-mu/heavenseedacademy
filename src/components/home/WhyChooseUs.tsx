"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Heart, ShieldCheck, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const points = [
  {
    icon: ShieldCheck,
    title: "Safe Care",
    text: "A loving, protected space for every child.",
  },
  {
    icon: Heart,
    title: "Parent Friendly",
    text: "Clear updates and simple enrollment.",
  },
  {
    icon: Sparkles,
    title: "Joyful Learning",
    text: "Play, creativity and discovery daily.",
  },
  {
    icon: CheckCircle2,
    title: "Inclusive",
    text: "Welcoming local and expat families.",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [scrollShift, setScrollShift] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = 1 - Math.min(Math.max(rect.top / windowHeight, -1), 1);

      setScrollShift(progress * 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-4 py-7 sm:px-6 sm:py-9 lg:px-8 lg:py-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-6 lg:grid-cols-[0.95fr_0.85fr] lg:gap-10">
          {/* Left Text */}
          <div
            className="flex flex-col justify-center rounded-[1.75rem] border border-white/35 bg-white/15 p-5 backdrop-blur-sm transition-transform duration-300 sm:p-6 lg:p-8"
            style={{
              transform: `translateY(${scrollShift * 0.18}px)`,
            }}
          >
            <p className="text-[11px] font-extrabold uppercase tracking-[0.26em] text-[#d6a84f]">
              Why Choose Us
            </p>

            <h2 className="mt-3 max-w-xl text-2xl font-extrabold leading-tight tracking-[-0.04em] text-[#183528] sm:text-3xl lg:text-4xl">
              A loving start for children in Mauritius.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-[#426252] sm:text-base sm:leading-7">
              Heaven Seeds Academy gives children a safe, joyful and caring
              pre-primary environment to grow with confidence.
            </p>

            <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2">
              {points.map((point) => {
                const Icon = point.icon;

                return (
                  <div key={point.title} className="flex gap-3">
                    <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#183528] text-white shadow-[0_12px_28px_rgba(24,53,40,0.16)]">
                      <Icon size={17} strokeWidth={2.4} />
                    </div>

                    <div>
                      <h3 className="text-sm font-extrabold tracking-[-0.02em] text-[#183528]">
                        {point.title}
                      </h3>

                      <p className="mt-0.5 text-xs leading-5 text-[#426252]">
                        {point.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center rounded-full bg-[#7f1d1d] px-5 py-2.5 text-xs font-extrabold !text-white shadow-[0_14px_30px_rgba(127,29,29,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#991b1b] sm:text-sm"
              >
                <span className="text-white">Start Enrollment</span>
              </Link>
            </div>
          </div>

          {/* Right Smaller Landscape Image */}
          <div
            className="relative mx-auto aspect-[3/2] w-full max-w-[620px] overflow-hidden rounded-[1.75rem] border border-white/40 shadow-[0_22px_70px_rgba(24,53,40,0.13)] transition-transform duration-300 lg:max-w-[560px]"
            style={{
              transform: `translateY(-${scrollShift * 0.25}px)`,
            }}
          >
            <Image
              src="/images/Home/why-choose-us.webp"
              alt="Children learning at Heaven Seeds Academy"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}