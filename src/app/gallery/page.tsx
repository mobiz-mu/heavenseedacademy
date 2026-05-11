import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  Heart,
  Images,
  Leaf,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { createMetadata } from "@/lib/seo/metadata";
import { pageSeo } from "@/lib/seo/site";

export const metadata = createMetadata(pageSeo.gallery);


const galleryItems = [
  {
    src: "/images/Gallery/gallery-01.jpg",
    label: "Creative Learning",
    title: "Children learning through creativity",
    description:
      "A warm pre-primary classroom where children explore ideas through hands-on activities, guided discovery and gentle teacher support.",
    highlights: ["Creative activities", "Guided discovery", "Confidence building"],
    alt: "Realistic warm pre-primary classroom in Mauritius with children doing creative learning activities",
  },
  {
    src: "/images/Gallery/gallery-02.jpg",
    label: "Art & Painting",
    title: "Expression through art and painting",
    description:
      "Children develop imagination, fine motor skills and self-expression through painting, drawing and colourful classroom experiences.",
    highlights: ["Art confidence", "Fine motor skills", "Self-expression"],
    alt: "Mauritius preschool classroom with young children painting and drawing in a safe space",
  },
  {
    src: "/images/Gallery/gallery-03.jpg",
    label: "Story Time",
    title: "Language growth through stories",
    description:
      "Story time helps children build listening skills, vocabulary, imagination and a love for books from an early age.",
    highlights: ["Early language", "Listening skills", "Love for books"],
    alt: "Children in Mauritius sitting in a circle for story time with a teacher reading a book",
  },
  {
    src: "/images/Gallery/gallery-04.jpg",
    label: "Outdoor Play",
    title: "Safe outdoor play and movement",
    description:
      "Outdoor play supports movement, balance, social confidence and joyful exploration in a safe Mauritius school environment.",
    highlights: ["Safe play", "Motor skills", "Social confidence"],
    alt: "Pre-primary school outdoor play area in Mauritius with children playing safely",
  },
  {
    src: "/images/Gallery/gallery-05.jpg",
    label: "Alphabet Learning",
    title: "Early alphabet and language support",
    description:
      "Children are gently introduced to letters, sounds and early communication skills through caring teacher guidance.",
    highlights: ["Alphabet awareness", "Teacher guidance", "Early literacy"],
    alt: "Caring teacher helping a child with alphabet learning in a Mauritius nursery classroom",
  },
  {
    src: "/images/Gallery/gallery-06.jpg",
    label: "Teamwork",
    title: "Building confidence together",
    description:
      "Block play and group activities help children learn sharing, teamwork, patience and problem-solving in a joyful way.",
    highlights: ["Teamwork", "Problem-solving", "Social learning"],
    alt: "Young children building blocks in a clean pre-primary classroom in Mauritius",
  },
  {
    src: "/images/Gallery/gallery-07.jpg",
    label: "Music & Movement",
    title: "Joyful music and movement",
    description:
      "Music, rhythm and guided movement help children develop coordination, expression and confidence in group settings.",
    highlights: ["Rhythm", "Movement", "Group participation"],
    alt: "Mauritius kindergarten music and movement activity with children smiling",
  },
  {
    src: "/images/Gallery/gallery-08.jpg",
    label: "Healthy Routines",
    title: "Learning healthy daily habits",
    description:
      "Simple routines such as handwashing and hygiene help children develop independence, responsibility and self-care.",
    highlights: ["Hygiene habits", "Independence", "Daily routine"],
    alt: "Children learning hygiene routine at a preschool in Mauritius",
  },
  {
    src: "/images/Gallery/gallery-09.jpg",
    label: "Snack Time",
    title: "Calm, caring snack routines",
    description:
      "Snack time is part of a nurturing daily rhythm where children practise manners, patience and social connection.",
    highlights: ["Healthy rhythm", "Social manners", "Calm routine"],
    alt: "Pre-primary classroom snack time in Mauritius with calm nurturing atmosphere",
  },
  {
    src: "/images/Gallery/gallery-10.jpg",
    label: "Garden Discovery",
    title: "Exploring nature with curiosity",
    description:
      "Garden discovery encourages children to observe, ask questions and connect with nature in a safe tropical setting.",
    highlights: ["Nature learning", "Curiosity", "Outdoor discovery"],
    alt: "Mauritius preschool garden learning activity with children exploring plants and leaves",
  },
];

export default function GalleryPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative px-4 py-7 sm:px-6 sm:py-9 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] bg-[#183528] p-6 text-white shadow-[0_26px_85px_rgba(24,53,40,0.14)] sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#f4d77b] backdrop-blur-md sm:text-[11px]">
                  <Camera size={14} />
                  Heaven Seeds Gallery
                </p>

                <h1 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
                  Real moments of care, play and discovery.
                </h1>

                <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-white/78 sm:text-lg sm:leading-8">
                  Explore the warm learning environment of Heaven Seeds Academy
                  in Mauritius â€” from creative classroom moments to outdoor
                  discovery, story time, healthy routines and joyful pre-primary
                  development.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/admissions"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7f1d1d] px-6 py-3 text-sm font-extrabold !text-white shadow-[0_18px_45px_rgba(127,29,29,0.36)] transition hover:-translate-y-1 hover:bg-[#991b1b]"
                  >
                    <span className="text-white">Start Enrollment</span>
                    <ArrowRight size={17} className="text-white" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f28c28] px-6 py-3 text-sm font-extrabold !text-white shadow-[0_18px_45px_rgba(242,140,40,0.36)] transition hover:-translate-y-1 hover:bg-[#ff9f3f]"
                  >
                    <span className="text-white">Contact Us</span>
                    <MessageCircle size={17} className="text-white" />
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Safe Space",
                    text: "A caring environment where children feel secure.",
                  },
                  {
                    icon: Heart,
                    title: "Warm Care",
                    text: "Gentle support, kindness and daily encouragement.",
                  },
                  {
                    icon: Sparkles,
                    title: "Joyful Learning",
                    text: "Creative activities that build confidence.",
                  },
                  {
                    icon: Leaf,
                    title: "Nature Moments",
                    text: "Outdoor discovery in a tropical Mauritius setting.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="rounded-[1.5rem] border border-white/12 bg-white/10 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.12)] backdrop-blur-xl"
                    >
                      <div className="grid size-11 place-items-center rounded-2xl bg-white text-[#183528]">
                        <Icon size={20} strokeWidth={2.4} />
                      </div>

                      <h2 className="mt-4 text-lg font-extrabold tracking-[-0.03em] text-white">
                        {item.title}
                      </h2>

                      <p className="mt-2 text-sm leading-6 text-white/72">
                        {item.text}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Rows */}
      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#d6a84f]">
                <Images size={15} />
                Learning Moments
              </p>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#183528] sm:text-4xl">
                Inside our pre-primary environment.
              </h2>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-[#426252] sm:text-base lg:ml-auto">
              Each moment reflects our approach: safety, love, creativity,
              structure, confidence and joyful early childhood learning.
            </p>
          </div>

          <div className="grid gap-8 lg:gap-10">
            {galleryItems.map((item, index) => (
              <article
                key={item.src}
                className="group grid gap-5 rounded-[2rem] border border-white/45 bg-white/55 p-4 shadow-[0_24px_80px_rgba(24,53,40,0.10)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white/70 sm:p-5 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-8 lg:p-6"
              >
                {/* Text Left */}
                <div className="order-2 flex flex-col justify-center px-1 py-2 lg:order-1 lg:px-4">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-2xl bg-[#183528] text-sm font-extrabold text-white shadow-[0_14px_35px_rgba(24,53,40,0.18)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="rounded-full border border-[#d6a84f]/35 bg-[#fff4df]/70 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#7f1d1d]">
                      {item.label}
                    </p>
                  </div>

                  <h3 className="mt-5 text-2xl font-extrabold leading-tight tracking-[-0.04em] text-[#183528] sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-[#426252] sm:text-base">
                    {item.description}
                  </p>

                  <div className="mt-5 grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                    {item.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-2 rounded-2xl border border-[#183528]/10 bg-white/64 px-3 py-2 text-xs font-extrabold text-[#183528] shadow-sm"
                      >
                        <CheckCircle2
                          size={15}
                          className="shrink-0 text-[#d6a84f]"
                          strokeWidth={2.5}
                        />
                        {highlight}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/admissions"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7f1d1d] px-5 py-2.5 text-sm font-extrabold !text-white shadow-[0_16px_38px_rgba(127,29,29,0.25)] transition hover:-translate-y-1 hover:bg-[#991b1b]"
                    >
                      <span className="text-white">Start Enrollment</span>
                      <ArrowRight size={16} className="text-white" />
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f28c28] px-5 py-2.5 text-sm font-extrabold !text-white shadow-[0_16px_38px_rgba(242,140,40,0.28)] transition hover:-translate-y-1 hover:bg-[#ff9f3f]"
                    >
                      <span className="text-white">Ask About Visits</span>
                      <MessageCircle size={16} className="text-white" />
                    </Link>
                  </div>
                </div>

                {/* Image Right */}
                <div className="order-1 lg:order-2">
                  <div className="relative aspect-[3/2] overflow-hidden rounded-[1.75rem] bg-[#183528] shadow-[0_22px_70px_rgba(24,53,40,0.15)]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover object-center transition duration-700 group-hover:scale-105"
                      priority={index === 0}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#183528]/50 via-transparent to-transparent opacity-80" />

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/25 bg-white/18 px-4 py-3 text-white shadow-lg backdrop-blur-md">
                      <span className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em]">
                        <Sparkles size={14} />
                        Heaven Seeds Academy
                      </span>

                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-6 pb-12 sm:px-6 sm:py-8 sm:pb-14 lg:px-8 lg:py-10 lg:pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] bg-[#183528] p-6 text-white shadow-[0_26px_85px_rgba(24,53,40,0.16)] sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#f4d77b]">
                  Visit Heaven Seeds
                </p>

                <h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.045em] text-white sm:text-4xl">
                  Want to experience the environment in person?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/76 sm:text-base">
                  Contact us to discuss admissions, visits and how Heaven Seeds
                  Academy can support your childâ€™s early learning journey.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/admissions"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7f1d1d] px-6 py-3 text-sm font-extrabold !text-white shadow-[0_18px_45px_rgba(127,29,29,0.36)] transition hover:-translate-y-1 hover:bg-[#991b1b]"
                >
                  <span className="text-white">Start Enrollment</span>
                  <ArrowRight size={17} className="text-white" />
                </Link>

                <Link
                  href="https://wa.me/23058204613"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f28c28] px-6 py-3 text-sm font-extrabold !text-white shadow-[0_18px_45px_rgba(242,140,40,0.36)] transition hover:-translate-y-1 hover:bg-[#ff9f3f]"
                >
                  <span className="text-white">WhatsApp Us</span>
                  <MessageCircle size={17} className="text-white" />
                </Link>
              </div>
            </div>
          </div>

          <p className="sr-only">
            Heaven Seeds Academy gallery page showing realistic pre-primary
            school life in Mauritius, including creative learning, painting,
            story time, outdoor play, alphabet learning, teamwork, music,
            hygiene routines, snack time and garden discovery.
          </p>
        </div>
      </section>
    </main>
  );
}
