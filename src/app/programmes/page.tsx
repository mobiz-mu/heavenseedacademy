import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Baby,
  BookOpenCheck,
  CheckCircle2,
  Heart,
  Leaf,
  MessageCircle,
  Music,
  Palette,
  Puzzle,
  ShieldCheck,
  Sparkles,
  Sun,
  Users,
} from "lucide-react";
import { createMetadata } from "@/lib/seo/metadata";
import { pageSeo } from "@/lib/seo/site";

export const metadata = createMetadata(pageSeo.programmes);

const programmes = [
  {
    icon: Baby,
    title: "Early Childhood Care",
    age: "Ages 2+",
    description:
      "A gentle introduction to school life through love, routine, play and caring guidance.",
    points: [
      "Safe daily routines",
      "Social confidence",
      "Gentle independence",
      "Creative discovery",
    ],
  },
  {
    icon: BookOpenCheck,
    title: "Pre-Primary Readiness",
    age: "Ages 3–5",
    description:
      "Strong foundations for language, numbers, listening, confidence and school readiness.",
    points: [
      "Early literacy",
      "Early numeracy",
      "Fine motor skills",
      "School preparation",
    ],
  },
  {
    icon: Palette,
    title: "Creative Development",
    age: "Daily learning",
    description:
      "Art, craft, storytelling and sensory activities that help children express themselves.",
    points: [
      "Art and craft",
      "Sensory play",
      "Story expression",
      "Imagination building",
    ],
  },
  {
    icon: Music,
    title: "Music & Movement",
    age: "Active learning",
    description:
      "Movement, rhythm and guided play to support coordination, expression and joy.",
    points: [
      "Rhythm activities",
      "Movement games",
      "Body awareness",
      "Group participation",
    ],
  },
  {
    icon: Puzzle,
    title: "Problem Solving",
    age: "Thinking skills",
    description:
      "Simple puzzles, shapes, blocks and guided discovery to develop focus and curiosity.",
    points: [
      "Shape recognition",
      "Logical thinking",
      "Hands-on learning",
      "Focus building",
    ],
  },
  {
    icon: Leaf,
    title: "Outdoor Discovery",
    age: "Nature learning",
    description:
      "Safe outdoor moments that encourage curiosity, movement and connection with nature.",
    points: [
      "Outdoor play",
      "Garden discovery",
      "Motor development",
      "Nature awareness",
    ],
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Safe Environment",
    text: "Children learn in a calm, caring and supervised space.",
  },
  {
    icon: Heart,
    title: "Nurturing Approach",
    text: "Every child is supported with patience, kindness and attention.",
  },
  {
    icon: Users,
    title: "Parent Partnership",
    text: "We keep parents informed and involved in the learning journey.",
  },
  {
    icon: Sparkles,
    title: "Confidence Building",
    text: "Children are encouraged to explore, speak, create and shine.",
  },
];

const dailyFlow = [
  "Warm welcome and settling-in routine",
  "Circle time, stories and language moments",
  "Creative learning, play and guided activities",
  "Snack time, hygiene and healthy routines",
  "Outdoor movement and social development",
  "Reflection, calm time and parent update support",
];

export default function ProgrammesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] border border-white/45 bg-white/75 shadow-[0_26px_85px_rgba(24,53,40,0.12)] backdrop-blur-xl">
            {/* Mobile/tablet image: full 16:9, no crop, no text covering image */}
            <div className="relative aspect-video w-full overflow-hidden bg-[#183528] lg:hidden">
              <Image
                src="/images/Programmes/programmes-hero.webp"
                alt="Heaven Seeds Academy programmes for pre-primary children in Mauritius"
                fill
                priority
                quality={80}
                sizes="100vw"
                className="object-contain object-center"
              />
            </div>

            {/* Desktop hero image with premium overlay */}
            <div className="relative hidden aspect-[16/7] w-full overflow-hidden bg-[#183528] lg:block">
              <Image
                src="/images/Programmes/programmes-hero.webp"
                alt="Heaven Seeds Academy programmes for pre-primary children in Mauritius"
                fill
                priority
                quality={80}
                sizes="100vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#183528]/84 via-[#183528]/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#183528]/48 via-transparent to-transparent" />

              <div className="absolute inset-0 flex items-center">
                <div className="max-w-3xl px-10">
                  <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/14 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#f4d77b] backdrop-blur-md">
                    <Sun size={14} />
                    Our Programmes
                  </p>

                  <h1 className="mt-5 max-w-3xl text-5xl font-extrabold leading-tight tracking-[-0.055em] text-white drop-shadow-2xl xl:text-6xl">
                    Early learning programmes designed with love and purpose.
                  </h1>

                  <p className="mt-4 max-w-2xl text-lg font-semibold leading-8 text-white/88">
                    Heaven Seeds Academy supports children in Mauritius with
                    safe, joyful and confidence-building pre-primary learning.
                  </p>

                  <div className="mt-7 flex gap-3">
                    <Link
                      href="/admissions"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7f1d1d] px-6 py-3 text-sm font-extrabold !text-white shadow-[0_18px_45px_rgba(127,29,29,0.38)] transition hover:-translate-y-1 hover:bg-[#991b1b]"
                    >
                      <span className="text-white">Start Enrollment</span>
                      <ArrowRight size={17} className="text-white" />
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f28c28] px-6 py-3 text-sm font-extrabold !text-white shadow-[0_18px_45px_rgba(242,140,40,0.38)] transition hover:-translate-y-1 hover:bg-[#ff9f3f]"
                    >
                      <span className="text-white">Ask a Question</span>
                      <MessageCircle size={17} className="text-white" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile/tablet text below image */}
            <div className="p-5 sm:p-7 lg:hidden">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#183528]/10 bg-[#183528]/5 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#7f1d1d]">
                <Sun size={14} />
                Our Programmes
              </p>

              <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.055em] text-[#183528] sm:text-4xl">
                Early learning programmes designed with love and purpose.
              </h1>

              <p className="mt-3 text-sm font-semibold leading-7 text-[#426252] sm:text-base">
                Heaven Seeds Academy supports children in Mauritius with safe,
                joyful and confidence-building pre-primary learning.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/admissions"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7f1d1d] px-6 py-3 text-sm font-extrabold !text-white shadow-[0_18px_45px_rgba(127,29,29,0.28)] transition hover:-translate-y-1 hover:bg-[#991b1b]"
                >
                  <span className="text-white">Start Enrollment</span>
                  <ArrowRight size={17} className="text-white" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f28c28] px-6 py-3 text-sm font-extrabold !text-white shadow-[0_18px_45px_rgba(242,140,40,0.32)] transition hover:-translate-y-1 hover:bg-[#ff9f3f]"
                >
                  <span className="text-white">Ask a Question</span>
                  <MessageCircle size={17} className="text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-[2rem] border border-white/45 bg-white/55 p-6 shadow-[0_22px_70px_rgba(24,53,40,0.09)] backdrop-blur-xl sm:p-8 lg:p-10">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#d6a84f]">
                Learning With Care
              </p>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#183528] sm:text-4xl">
                A balanced programme for early childhood growth.
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#426252] sm:text-base sm:leading-8">
                Our programmes are designed to help children feel safe, loved
                and ready to learn. We combine guided play, language development,
                creativity, routines, movement and social growth to prepare
                children for the next stage of school life.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#426252] sm:text-base sm:leading-8">
                Every child grows at their own pace. At Heaven Seeds Academy, we
                support children gently, celebrate progress and work closely
                with parents to build confidence from the earliest years.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="group rounded-[1.75rem] border border-white/45 bg-white/45 p-5 shadow-[0_18px_55px_rgba(24,53,40,0.08)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white/65 sm:p-6"
                  >
                    <div className="grid size-12 place-items-center rounded-2xl bg-[#183528] text-white shadow-[0_16px_38px_rgba(24,53,40,0.22)] transition duration-500 group-hover:bg-[#7f1d1d]">
                      <Icon size={22} strokeWidth={2.4} />
                    </div>

                    <h3 className="mt-5 text-lg font-extrabold tracking-[-0.03em] text-[#183528]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#426252]">
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Programme Cards */}
      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#d6a84f]">
                Programme Areas
              </p>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#183528] sm:text-4xl">
                What children experience with us.
              </h2>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-[#426252] sm:text-base lg:ml-auto">
              A child-friendly blend of learning, care, creativity, movement and
              school readiness for Mauritius families.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {programmes.map((programme) => {
              const Icon = programme.icon;

              return (
                <article
                  key={programme.title}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/45 bg-white/50 p-6 shadow-[0_22px_70px_rgba(24,53,40,0.09)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white/70"
                >
                  <div className="absolute -right-16 -top-16 size-40 rounded-full bg-[#d6a84f]/16 blur-3xl transition duration-500 group-hover:bg-[#f28c28]/18" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div className="grid size-13 place-items-center rounded-2xl bg-[#183528] text-white shadow-[0_16px_38px_rgba(24,53,40,0.22)] transition duration-500 group-hover:bg-[#7f1d1d]">
                        <Icon size={24} strokeWidth={2.4} />
                      </div>

                      <span className="rounded-full border border-[#d6a84f]/35 bg-[#fff4df]/75 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#7f1d1d]">
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
                      {programme.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-2 text-sm font-bold text-[#183528]"
                        >
                          <CheckCircle2
                            size={17}
                            className="shrink-0 text-[#d6a84f]"
                            strokeWidth={2.5}
                          />
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Daily Flow */}
      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] bg-[#183528] p-6 text-white shadow-[0_26px_85px_rgba(24,53,40,0.16)] sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#f4d77b]">
                  A Day With Us
                </p>

                <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-white sm:text-4xl">
                  Gentle routines that help children feel secure.
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/76 sm:text-base sm:leading-8">
                  Young children thrive when their day feels safe, warm and
                  predictable. Our daily rhythm supports confidence, social
                  development and joyful learning.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {dailyFlow.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-white/12 bg-white/10 p-4 backdrop-blur-md"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-sm font-extrabold text-[#f4d77b]">
                        0{index + 1}
                      </span>

                      <p className="text-sm font-bold leading-6 text-white/86">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent CTA */}
      <section className="px-4 py-6 pb-12 sm:px-6 sm:py-8 sm:pb-14 lg:px-8 lg:py-10 lg:pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-white/45 bg-white/55 p-6 shadow-[0_24px_80px_rgba(24,53,40,0.10)] backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#d6a84f]">
                  Admissions Support
                </p>

                <h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#183528] sm:text-4xl">
                  Interested in a programme for your child?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#426252] sm:text-base">
                  Contact Heaven Seeds Academy to discuss your child’s age,
                  availability, school visit options and the best next step for
                  enrollment.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/admissions"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7f1d1d] px-6 py-3 text-sm font-extrabold !text-white shadow-[0_18px_45px_rgba(127,29,29,0.28)] transition hover:-translate-y-1 hover:bg-[#991b1b]"
                >
                  <span className="text-white">Start Enrollment</span>
                  <ArrowRight size={17} className="text-white" />
                </Link>

                <Link
                  href="https://wa.me/23058204613"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f28c28] px-6 py-3 text-sm font-extrabold !text-white shadow-[0_18px_45px_rgba(242,140,40,0.32)] transition hover:-translate-y-1 hover:bg-[#ff9f3f]"
                >
                  <span className="text-white">WhatsApp Us</span>
                  <MessageCircle size={17} className="text-white" />
                </Link>
              </div>
            </div>
          </div>

          <p className="sr-only">
            Heaven Seeds Academy programmes in Mauritius include early childhood
            care, pre-primary readiness, creative development, music and
            movement, problem solving and outdoor discovery for young children.
          </p>
        </div>
      </section>
    </main>
  );
}