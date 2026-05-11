import Link from "next/link";
import {
  ArrowRight,
  Baby,
  BookOpenCheck,
  CheckCircle2,
  Heart,
  Palette,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const programmes = [
  {
    icon: Baby,
    title: "Early Childhood Care",
    age: "Ages 2+",
    description:
      "A gentle, caring introduction to school life through play, routine, music, stories and guided discovery.",
    highlights: ["Safe routines", "Social confidence", "Creative play"],
  },
  {
    icon: BookOpenCheck,
    title: "Pre-Primary Readiness",
    age: "Ages 3–5",
    description:
      "Strong foundations for language, numbers, independence, confidence and school readiness in Mauritius.",
    highlights: ["Language skills", "Early numeracy", "School readiness"],
  },
  {
    icon: Palette,
    title: "Creative Development",
    age: "Daily activities",
    description:
      "Children explore art, movement, storytelling and hands-on activities that build imagination and expression.",
    highlights: ["Art & craft", "Movement", "Storytelling"],
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    label: "Safe Environment",
  },
  {
    icon: Heart,
    label: "Nurturing Teachers",
  },
  {
    icon: Users,
    label: "Parent Partnership",
  },
  {
    icon: Sparkles,
    label: "Confidence Building",
  },
];

export default function ProgrammesPreview() {
  return (
    <section
      aria-labelledby="programmes-preview-heading"
      className="relative overflow-hidden px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Top Heading */}
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-[#d6a84f]">
              Our Programmes
            </p>

            <h2
              id="programmes-preview-heading"
              className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#183528] sm:text-4xl lg:text-5xl"
            >
              Premium early learning programmes for Mauritius families.
            </h2>
          </div>

          <div className="max-w-2xl lg:ml-auto">
            <p className="text-sm leading-7 text-[#426252] sm:text-base sm:leading-8">
              Heaven Seeds Academy provides a warm pre-primary environment where
              every child can grow with love, structure, creativity and
              confidence. Our programmes support early development, school
              readiness and joyful learning.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {trustPoints.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/45 bg-white/35 px-3 py-2 text-xs font-extrabold text-[#183528] shadow-sm backdrop-blur-md"
                  >
                    <Icon size={14} className="text-[#7f1d1d]" />
                    {item.label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Programme Cards */}
        <div className="mt-8 grid gap-5 md:grid-cols-3 lg:mt-10">
          {programmes.map((programme, index) => {
            const Icon = programme.icon;

            return (
              <article
                key={programme.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/45 bg-white/35 p-5 shadow-[0_22px_70px_rgba(24,53,40,0.10)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white/48 sm:p-6"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <div className="absolute -right-14 -top-14 size-36 rounded-full bg-[#d6a84f]/18 blur-3xl transition duration-500 group-hover:bg-[#f28c28]/22" />
                <div className="absolute -bottom-16 -left-16 size-40 rounded-full bg-[#183528]/8 blur-3xl transition duration-500 group-hover:bg-[#183528]/12" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid size-13 place-items-center rounded-2xl bg-[#183528] text-white shadow-[0_16px_38px_rgba(24,53,40,0.24)] transition duration-500 group-hover:-translate-y-1 group-hover:bg-[#7f1d1d]">
                      <Icon size={24} strokeWidth={2.4} />
                    </div>

                    <span className="rounded-full border border-[#d6a84f]/40 bg-[#fff4df]/65 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#7f1d1d]">
                      {programme.age}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold tracking-[-0.035em] text-[#183528] sm:text-2xl">
                    {programme.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#426252]">
                    {programme.description}
                  </p>

                  <div className="mt-5 grid gap-2">
                    {programme.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-2 text-sm font-bold text-[#183528]"
                      >
                        <CheckCircle2
                          size={17}
                          className="shrink-0 text-[#d6a84f]"
                          strokeWidth={2.6}
                        />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/45 bg-[#183528] p-6 text-white shadow-[0_26px_80px_rgba(24,53,40,0.18)] sm:p-8 lg:mt-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#f4d77b]">
                Admissions Open
              </p>

              <h3 className="mt-3 max-w-3xl text-2xl font-extrabold leading-tight tracking-[-0.04em] sm:text-3xl">
                Give your child a loving, confident start at Heaven Seeds
                Academy.
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/78 sm:text-base">
                Speak with us about availability, age group, enrollment steps
                and how our pre-primary environment supports your child.
              </p>
            </div>

            <Link
              href="/programmes"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f28c28] px-6 py-3 text-sm font-extrabold text-white shadow-[0_18px_45px_rgba(242,140,40,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-[#ff9f3f] sm:px-7 sm:py-4"
              aria-label="View all Heaven Seeds Academy programmes"
            >
              View Programmes
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}