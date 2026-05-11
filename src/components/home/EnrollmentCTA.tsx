import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Contact Us",
    text: "Share your child’s age and preferred start date.",
  },
  {
    icon: CalendarCheck,
    title: "Book a Visit",
    text: "Discover our warm learning space.",
  },
  {
    icon: CheckCircle2,
    title: "Start Enrollment",
    text: "Complete the steps and prepare for the first day.",
  },
];

const highlights = [
  "Pre-primary education in Mauritius",
  "Safe and caring environment",
  "Simple parent support",
  "Warm early childhood learning",
];

export default function EnrollmentCTA() {
  return (
    <section
      aria-labelledby="enrollment-cta-heading"
      className="relative overflow-hidden px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] shadow-[0_26px_85px_rgba(24,53,40,0.18)]">
          {/* Background Image - no extra border/container */}
          <Image
            src="/images/Home/enrollment-image.webp"
            alt="Heaven Seeds Academy enrollment and pre-primary learning in Mauritius"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority={false}
          />

          {/* Premium readable overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#183528]/82 via-[#183528]/46 to-[#183528]/8" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#183528]/55 via-transparent to-white/8" />

          {/* Soft glow */}
          <div className="absolute -left-20 -top-24 size-72 rounded-full bg-[#f4d77b]/20 blur-3xl" />
          <div className="absolute -bottom-28 right-0 size-80 rounded-full bg-[#f28c28]/18 blur-3xl" />

          <div className="relative z-10 grid min-h-[620px] gap-5 p-4 sm:min-h-[560px] sm:p-6 lg:min-h-[500px] lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:p-8 xl:p-10">
            {/* Left Glass Content */}
            <div className="rounded-[1.75rem] border border-white/20 bg-white/14 p-5 text-white shadow-[0_22px_70px_rgba(0,0,0,0.16)] backdrop-blur-xl sm:p-6 lg:p-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/14 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#f4d77b] backdrop-blur-md">
                <Sparkles size={14} />
                Admissions Open
              </div>

              <h2
                id="enrollment-cta-heading"
                className="mt-4 max-w-3xl text-2xl font-extrabold leading-tight tracking-[-0.05em] text-white drop-shadow-xl sm:text-3xl lg:text-4xl xl:text-5xl"
              >
                Give your child a safe, loving and confident start.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/88 sm:text-base">
                Heaven Seeds Academy welcomes Mauritius families looking for a
                nurturing pre-primary environment where children can grow,
                explore and shine with care.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/18 bg-white/14 px-4 py-3 text-xs font-bold text-white shadow-sm backdrop-blur-md sm:text-sm"
                  >
                    <ShieldCheck
                      size={17}
                      className="shrink-0 text-[#f4d77b]"
                      strokeWidth={2.5}
                    />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/admissions"
                  aria-label="Start enrollment at Heaven Seeds Academy"
                  className="enroll-cta-pulse inline-flex items-center justify-center gap-2 rounded-full bg-[#7f1d1d] px-6 py-3 text-sm font-extrabold !text-white shadow-[0_18px_45px_rgba(127,29,29,0.42)] transition duration-300 hover:-translate-y-1 hover:bg-[#991b1b]"
                >
                  <span className="text-white">Start Enrollment</span>
                  <ArrowRight size={18} className="text-white" />
                </Link>

                <Link
                  href="/contact"
                  aria-label="Contact Heaven Seeds Academy"
                  className="enroll-cta-float inline-flex items-center justify-center gap-2 rounded-full bg-[#f28c28] px-6 py-3 text-sm font-extrabold !text-white shadow-[0_18px_45px_rgba(242,140,40,0.42)] transition duration-300 hover:-translate-y-1 hover:bg-[#ff9f3f]"
                >
                  <span className="text-white">Contact Us</span>
                  <HeartHandshake size={18} className="text-white" />
                </Link>
              </div>
            </div>

            {/* Right Glass Process */}
            <div className="rounded-[1.75rem] border border-white/20 bg-white/16 p-5 text-white shadow-[0_22px_70px_rgba(0,0,0,0.14)] backdrop-blur-xl sm:p-6 lg:ml-auto lg:max-w-[460px]">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.26em] text-[#f4d77b] sm:text-[11px]">
                Enrollment Journey
              </p>

              <h3 className="mt-3 text-2xl font-extrabold tracking-[-0.04em] text-white sm:text-3xl">
                Simple steps for parents.
              </h3>

              <div className="mt-5 grid gap-3">
                {steps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.title}
                      className="group relative overflow-hidden rounded-3xl border border-white/16 bg-white/14 p-4 transition duration-500 hover:bg-white/22"
                    >
                      <div className="absolute -right-10 -top-10 size-24 rounded-full bg-[#f4d77b]/16 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

                      <div className="relative flex gap-4">
                        <div className="grid size-10 shrink-0 place-items-center rounded-2xl bg-white text-[#183528] shadow-[0_14px_35px_rgba(0,0,0,0.14)]">
                          <Icon size={19} strokeWidth={2.4} />
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-extrabold text-[#f4d77b]">
                              0{index + 1}
                            </span>

                            <h4 className="text-sm font-extrabold text-white sm:text-base">
                              {step.title}
                            </h4>
                          </div>

                          <p className="mt-1 text-xs leading-5 text-white/78 sm:text-sm sm:leading-6">
                            {step.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 rounded-3xl border border-[#f4d77b]/26 bg-[#183528]/45 p-4 backdrop-blur-md">
                <p className="text-xs font-bold leading-5 text-white/88 sm:text-sm sm:leading-6">
                  Prepare your child’s age, preferred start date and parent
                  contact details before applying.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="sr-only">
          Heaven Seeds Academy admissions for pre-primary school in Mauritius.
          Parents can contact the academy, book a visit and start enrollment for
          early childhood education.
        </p>
      </div>
    </section>
  );
}