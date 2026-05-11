import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Baby,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  HeartHandshake,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { createMetadata } from "@/lib/seo/metadata";
import { pageSeo } from "@/lib/seo/site";

export const metadata = createMetadata(pageSeo.admissions);


const admissionSteps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Send Your Enquiry",
    text: "Contact us by WhatsApp, phone, email or the contact form with your childâ€™s age and preferred start date.",
  },
  {
    icon: CalendarCheck,
    step: "02",
    title: "Book a Visit",
    text: "Visit Heaven Seeds Academy, meet our team and discover our warm learning environment.",
  },
  {
    icon: ClipboardCheck,
    step: "03",
    title: "Confirm Availability",
    text: "We guide you on the suitable age group, programme availability and next enrollment details.",
  },
  {
    icon: FileText,
    step: "04",
    title: "Complete Enrollment",
    text: "Parents receive clear guidance to complete the admission process with confidence.",
  },
];

const requiredInfo = [
  "Childâ€™s full name and age",
  "Preferred start date",
  "Parent or guardian contact details",
  "Any learning, health or support needs",
  "Emergency contact information",
  "Previous nursery or school experience, if any",
];

const parentReasons = [
  {
    icon: ShieldCheck,
    title: "Safe Environment",
    text: "A calm and caring space where children feel protected and supported.",
  },
  {
    icon: Baby,
    title: "Child-Centered Start",
    text: "Gentle settling-in support for children beginning their learning journey.",
  },
  {
    icon: Users,
    title: "Parent Guidance",
    text: "Clear communication and reassuring support throughout the admission process.",
  },
  {
    icon: Sparkles,
    title: "Confidence Building",
    text: "A joyful pre-primary experience focused on growth, confidence and care.",
  },
];

const faqs = [
  {
    question: "How do I apply for admission?",
    answer:
      "You can start by contacting us through WhatsApp, phone, email, the contact page or the admissions enquiry form.",
  },
  {
    question: "Can parents visit before enrolling?",
    answer:
      "Yes. Parents are welcome to request a visit to learn more about the academy, environment and admission process.",
  },
  {
    question: "What information should I prepare?",
    answer:
      "Please prepare your childâ€™s age, preferred start date, parent contact details and any special support information.",
  },
  {
    question: "Is the admissions process parent-friendly?",
    answer:
      "Yes. We keep the process simple, warm and clear so families feel guided at every step.",
  },
];

export default function AdmissionsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative px-4 py-7 sm:px-6 sm:py-9 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_26px_85px_rgba(24,53,40,0.12)]">
            <div className="relative aspect-video w-full overflow-hidden bg-[#183528]">
              <Image
                src="/images/Admissions/admissions-hero.webp"
                alt="Parents visiting Heaven Seeds Academy for admissions in Mauritius"
                fill
                priority
                sizes="100vw"
                className="object-contain object-center lg:object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#183528]/84 via-[#183528]/42 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#183528]/48 via-transparent to-transparent" />

              <div className="absolute inset-0 flex items-center">
                <div className="max-w-3xl px-5 sm:px-8 lg:px-10">
                  <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/14 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#f4d77b] backdrop-blur-md sm:text-[11px]">
                    <HeartHandshake size={14} />
                    Admissions Open
                  </p>

                  <h1 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.055em] text-white drop-shadow-2xl sm:text-5xl lg:text-6xl">
                    Begin your childâ€™s journey with confidence.
                  </h1>

                  <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-white/88 sm:text-lg sm:leading-8">
                    Heaven Seeds Academy welcomes Mauritius families looking for
                    a safe, loving and joyful pre-primary environment.
                  </p>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="https://wa.me/23058204613"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7f1d1d] px-6 py-3 text-sm font-extrabold !text-white shadow-[0_18px_45px_rgba(127,29,29,0.38)] transition hover:-translate-y-1 hover:bg-[#991b1b]"
                    >
                      <span className="text-white">WhatsApp Admissions</span>
                      <ArrowRight size={17} className="text-white" />
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f28c28] px-6 py-3 text-sm font-extrabold !text-white shadow-[0_18px_45px_rgba(242,140,40,0.38)] transition hover:-translate-y-1 hover:bg-[#ff9f3f]"
                    >
                      <span className="text-white">Contact Us</span>
                      <MessageCircle size={17} className="text-white" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / Contact Summary */}
      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <div className="rounded-[2rem] border border-white/45 bg-white/55 p-6 shadow-[0_22px_70px_rgba(24,53,40,0.09)] backdrop-blur-xl sm:p-8 lg:p-10">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#d6a84f]">
                Admissions Guidance
              </p>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#183528] sm:text-4xl">
                A simple and reassuring process for parents.
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#426252] sm:text-base sm:leading-8">
                Choosing a pre-primary school is an important decision. Our
                admission process is designed to help families feel informed,
                welcomed and confident before taking the next step.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#426252] sm:text-base sm:leading-8">
                Whether you are enquiring for the first time, booking a visit or
                preparing your childâ€™s enrollment, Heaven Seeds Academy will
                guide you with care and clarity.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <Link
                  href="tel:57614680"
                  className="flex items-center gap-3 rounded-2xl border border-[#183528]/10 bg-white/65 p-4 text-sm font-extrabold text-[#183528] shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <Phone size={18} className="text-[#7f1d1d]" />
                  57614680
                </Link>

                <Link
                  href="https://wa.me/23058204613"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-[#183528]/10 bg-white/65 p-4 text-sm font-extrabold text-[#183528] shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <MessageCircle size={18} className="text-[#7f1d1d]" />
                  WhatsApp 58204613
                </Link>

                <Link
                  href="mailto:Heavenseed2126@gmail.com"
                  className="flex items-center gap-3 rounded-2xl border border-[#183528]/10 bg-white/65 p-4 text-sm font-extrabold text-[#183528] shadow-sm transition hover:-translate-y-0.5 hover:bg-white sm:col-span-2"
                >
                  <Mail size={18} className="text-[#7f1d1d]" />
                  Heavenseed2126@gmail.com
                </Link>

                <Link
                  href="https://www.google.com/maps/search/?api=1&query=111%2C%20Malartic%20Avenue%2C%20Quatre%20Bornes%2C%2075947%2C%20Zone%204%2C%20Mauritius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 rounded-2xl border border-[#183528]/10 bg-white/65 p-4 text-sm font-extrabold leading-6 text-[#183528] shadow-sm transition hover:-translate-y-0.5 hover:bg-white sm:col-span-2"
                >
                  <MapPin size={18} className="mt-0.5 shrink-0 text-[#7f1d1d]" />
                  <span>
                    111, Malartic Avenue, Quatre Bornes, 75947, Zone 4,
                    Mauritius
                  </span>
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {parentReasons.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="group rounded-[1.75rem] border border-white/45 bg-white/45 p-5 shadow-[0_18px_55px_rgba(24,53,40,0.08)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white/65"
                  >
                    <div className="flex gap-4">
                      <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#183528] text-white shadow-[0_16px_38px_rgba(24,53,40,0.22)] transition duration-500 group-hover:bg-[#7f1d1d]">
                        <Icon size={22} strokeWidth={2.4} />
                      </div>

                      <div>
                        <h3 className="text-lg font-extrabold tracking-[-0.03em] text-[#183528]">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-[#426252]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Admission Steps */}
      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#d6a84f]">
                Enrollment Steps
              </p>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#183528] sm:text-4xl">
                How admissions work.
              </h2>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-[#426252] sm:text-base lg:ml-auto">
              A clear step-by-step journey from the first parent enquiry to your
              childâ€™s first day with us.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {admissionSteps.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.step}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/45 bg-white/50 p-6 shadow-[0_22px_70px_rgba(24,53,40,0.09)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white/70"
                >
                  <div className="absolute -right-16 -top-16 size-40 rounded-full bg-[#d6a84f]/16 blur-3xl transition duration-500 group-hover:bg-[#f28c28]/18" />

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <span className="text-4xl font-extrabold tracking-[-0.07em] text-[#d6a84f]">
                        {item.step}
                      </span>

                      <div className="grid size-12 place-items-center rounded-2xl bg-[#183528] text-white shadow-[0_16px_38px_rgba(24,53,40,0.22)] transition duration-500 group-hover:bg-[#7f1d1d]">
                        <Icon size={22} strokeWidth={2.4} />
                      </div>
                    </div>

                    <h3 className="mt-6 text-xl font-extrabold tracking-[-0.035em] text-[#183528]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#426252]">
                      {item.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Required Info */}
      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] bg-[#183528] p-6 text-white shadow-[0_26px_85px_rgba(24,53,40,0.16)] sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#f4d77b]">
                  Prepare Before Applying
                </p>

                <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-white sm:text-4xl">
                  Information parents may prepare.
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/76 sm:text-base sm:leading-8">
                  Preparing a few details helps us guide you quickly and
                  understand the right next step for your child.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {requiredInfo.map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-white/12 bg-white/10 p-4 backdrop-blur-md"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        size={19}
                        className="mt-0.5 shrink-0 text-[#f4d77b]"
                        strokeWidth={2.5}
                      />

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

      {/* FAQ */}
      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 text-center">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#d6a84f]">
              Admissions FAQ
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#183528] sm:text-4xl">
              Questions parents often ask.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[1.75rem] border border-white/45 bg-white/55 p-5 shadow-[0_18px_55px_rgba(24,53,40,0.08)] backdrop-blur-xl sm:p-6"
              >
                <h3 className="text-lg font-extrabold tracking-[-0.03em] text-[#183528]">
                  {faq.question}
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#426252]">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-6 pb-12 sm:px-6 sm:py-8 sm:pb-14 lg:px-8 lg:py-10 lg:pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-white/45 bg-white/55 p-6 shadow-[0_24px_80px_rgba(24,53,40,0.10)] backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#d6a84f]">
                  Start Today
                </p>

                <h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#183528] sm:text-4xl">
                  Ready to start the admissions conversation?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#426252] sm:text-base">
                  Message us today and our team will guide you with availability,
                  visit options and next steps.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="https://wa.me/23058204613"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7f1d1d] px-6 py-3 text-sm font-extrabold !text-white shadow-[0_18px_45px_rgba(127,29,29,0.28)] transition hover:-translate-y-1 hover:bg-[#991b1b]"
                >
                  <span className="text-white">WhatsApp Admissions</span>
                  <ArrowRight size={17} className="text-white" />
                </Link>

                <Link
                  href="mailto:Heavenseed2126@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f28c28] px-6 py-3 text-sm font-extrabold !text-white shadow-[0_18px_45px_rgba(242,140,40,0.32)] transition hover:-translate-y-1 hover:bg-[#ff9f3f]"
                >
                  <span className="text-white">Email Us</span>
                  <Mail size={17} className="text-white" />
                </Link>
              </div>
            </div>
          </div>

          <p className="sr-only">
            Heaven Seeds Academy admissions page for Mauritius parents looking
            for pre-primary school enrollment, school visits, contact details and
            admission steps.
          </p>
        </div>
      </section>
    </main>
  );
}
