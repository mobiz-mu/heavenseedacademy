import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  Heart,
  Leaf,
  Lightbulb,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { createMetadata } from "@/lib/seo/metadata";
import { pageSeo } from "@/lib/seo/site";

export const metadata = createMetadata(pageSeo.about);


const values = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    text: "We create a calm, protected and caring environment where children feel secure.",
  },
  {
    icon: Heart,
    title: "Love & Care",
    text: "Every child is welcomed with patience, kindness and genuine attention.",
  },
  {
    icon: Sparkles,
    title: "Confidence",
    text: "We help children express themselves, explore new ideas and grow with joy.",
  },
  {
    icon: Users,
    title: "Parent Partnership",
    text: "We work closely with parents through clear communication and support.",
  },
];

const process = [
  {
    step: "01",
    title: "Parent Enquiry",
    text: "Parents contact us by phone, WhatsApp, email or through our website form.",
  },
  {
    step: "02",
    title: "Guided Discussion",
    text: "We learn about your childâ€™s age, needs, routine and preferred start period.",
  },
  {
    step: "03",
    title: "Visit & Introduction",
    text: "Families can visit the academy, discover the environment and ask questions.",
  },
  {
    step: "04",
    title: "Enrollment Support",
    text: "We guide parents through the next steps with clarity, care and confidence.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative px-4 py-7 sm:px-6 sm:py-9 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_26px_85px_rgba(24,53,40,0.12)]">
            <div className="relative aspect-video w-full overflow-hidden bg-[#183528]">
              <Image
                src="/images/About/about-hero.webp"
                alt="Heaven Seeds Academy warm pre-primary classroom in Mauritius"
                fill
                priority
                sizes="100vw"
                className="object-contain object-center lg:object-cover"
           />
              <div className="absolute inset-0 bg-gradient-to-r from-[#183528]/78 via-[#183528]/34 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#183528]/42 via-transparent to-transparent" />

              <div className="absolute inset-0 flex items-center">
                <div className="max-w-3xl px-5 sm:px-8 lg:px-10">
                  <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/14 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#f4d77b] backdrop-blur-md sm:text-[11px]">
                    <Leaf size={14} />
                    About Heaven Seeds Academy
                  </p>

                  <h1 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.055em] text-white drop-shadow-2xl sm:text-5xl lg:text-6xl">
                    A loving foundation for early learning in Mauritius.
                  </h1>

                  <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-white/88 sm:text-lg sm:leading-8">
                    Heaven Seeds Academy is a nurturing pre-primary environment
                    where children grow with care, confidence, creativity and
                    strong foundations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div className="rounded-[2rem] border border-white/45 bg-white/55 p-6 shadow-[0_22px_70px_rgba(24,53,40,0.09)] backdrop-blur-xl sm:p-8 lg:p-10">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#d6a84f]">
                Who We Are
              </p>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#183528] sm:text-4xl">
                A warm, safe and parent-trusted academy.
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#426252] sm:text-base sm:leading-8">
                Heaven Seeds Academy supports young children in Mauritius during
                one of the most important stages of life: early childhood. Our
                academy is built around love, safety, guided discovery and joyful
                learning.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#426252] sm:text-base sm:leading-8">
                We understand that parents want more than a classroom. They want
                reassurance, structure, cleanliness, caring adults and a place
                where their child feels happy to learn. Our approach combines
                gentle routines, creative activities, social development,
                language growth and pre-primary readiness.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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
                  <span className="text-white">Contact Us</span>
                  <MessageCircle size={17} className="text-white" />
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((item) => {
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

      {/* Mission / Vision */}
      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="relative overflow-hidden rounded-[2rem] bg-[#183528] p-6 text-white shadow-[0_26px_85px_rgba(24,53,40,0.16)] sm:p-8 lg:p-10">
              <div className="absolute -left-20 -top-20 size-64 rounded-full bg-[#f4d77b]/18 blur-3xl" />
              <div className="absolute -bottom-24 right-0 size-72 rounded-full bg-[#f28c28]/12 blur-3xl" />

              <div className="relative">
                <div className="grid size-13 place-items-center rounded-2xl bg-white text-[#183528] shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
                  <BookOpenCheck size={25} />
                </div>

                <p className="mt-6 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#f4d77b]">
                  Our Mission
                </p>

                <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.04em] text-white sm:text-3xl">
                  To nurture confident, caring and curious children.
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/78 sm:text-base sm:leading-8">
                  Our mission is to provide a loving and safe pre-primary
                  environment where children in Mauritius develop confidence,
                  early learning skills, independence, kindness and a joyful
                  attitude towards discovery.
                </p>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-[2rem] border border-[#183528]/10 bg-white p-6 shadow-[0_26px_85px_rgba(24,53,40,0.10)] sm:p-8 lg:p-10">
              <div className="absolute -right-20 -top-20 size-64 rounded-full bg-[#d6a84f]/18 blur-3xl" />

              <div className="relative">
                <div className="grid size-13 place-items-center rounded-2xl bg-[#7f1d1d] text-white shadow-[0_18px_45px_rgba(127,29,29,0.22)]">
                  <Lightbulb size={25} />
                </div>

                <p className="mt-6 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#d6a84f]">
                  Our Vision
                </p>

                <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.04em] text-[#183528] sm:text-3xl">
                  To become a trusted early learning home for Mauritius families.
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#426252] sm:text-base sm:leading-8">
                  Our vision is to be recognised as a parent-trusted academy
                  where children feel valued, protected and inspired to grow â€”
                  building the foundations they need for school and life.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* How We Proceed */}
      <section className="px-4 py-6 pb-12 sm:px-6 sm:py-8 sm:pb-14 lg:px-8 lg:py-10 lg:pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#d6a84f]">
                How We Proceed
              </p>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#183528] sm:text-4xl">
                A simple, reassuring parent journey.
              </h2>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-[#426252] sm:text-base lg:ml-auto">
              From the first enquiry to enrollment, we keep the process clear,
              warm and parent-friendly.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <article
                key={item.step}
                className="group rounded-[1.75rem] border border-white/45 bg-white/50 p-5 shadow-[0_18px_55px_rgba(24,53,40,0.08)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white/70"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold tracking-[-0.06em] text-[#d6a84f]">
                    {item.step}
                  </span>

                  <CheckCircle2
                    size={22}
                    className="text-[#7f1d1d]"
                    strokeWidth={2.5}
                  />
                </div>

                <h3 className="mt-5 text-lg font-extrabold tracking-[-0.03em] text-[#183528]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#426252]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] bg-[#183528] p-6 text-white shadow-[0_26px_85px_rgba(24,53,40,0.16)] sm:p-8">
            <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <h2 className="text-2xl font-extrabold tracking-[-0.04em]">
                  Ready to speak with us?
                </h2>

                <p className="mt-2 text-sm leading-6 text-white/76">
                  We will gladly guide you through admissions, school visits and
                  your childâ€™s first steps with Heaven Seeds Academy.
                </p>
              </div>

              <Link
                href="https://wa.me/23058204613"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f28c28] px-6 py-3 text-sm font-extrabold !text-white shadow-[0_18px_45px_rgba(242,140,40,0.36)] transition hover:-translate-y-1 hover:bg-[#ff9f3f]"
              >
                <span className="text-white">WhatsApp Us</span>
                <ArrowRight size={17} className="text-white" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
