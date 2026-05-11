"use client";

import Link from "next/link";
import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ChevronDown,
} from "lucide-react";
import { FormEvent, useState } from "react";

const whatsappNumber = "23058204613";
const emailAddress = "Heavenseed2126@gmail.com";

const address =
  "111, Malartic Avenue, Quatre Bornes, 75947, Zone 4, Mauritius";

const enquiryTypes = [
  "Admission enquiry",
  "Book a school visit",
  "Programme information",
  "Fees and availability",
  "Parent support",
  "Other",
];

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.77l-.44 2.91h-2.33V22C18.34 21.24 22 17.08 22 12.06Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true">
      <path d="M7.8 2h8.4A5.81 5.81 0 0 1 22 7.8v8.4a5.81 5.81 0 0 1-5.8 5.8H7.8A5.81 5.81 0 0 1 2 16.2V7.8A5.81 5.81 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </svg>
  );
}

export default function HomeContact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    enquiryType: "Admission enquiry",
    message: "",
  });

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = `Hello Heaven Seeds Academy,%0A%0AI would like to request more information.%0A%0AEnquiry: ${encodeURIComponent(
      form.enquiryType
    )}%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(
      form.phone
    )}%0AEmail: ${encodeURIComponent(form.email)}%0AMessage: ${encodeURIComponent(
      form.message
    )}%0A%0AThank you.`;

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  }

  const quickWhatsappMessage = encodeURIComponent(
    "Hello Heaven Seeds Academy, I would like to know more about enrollment."
  );

  return (
    <section
      aria-labelledby="home-contact-heading"
      className="relative overflow-hidden px-4 py-7 sm:px-6 sm:py-9 lg:px-8 lg:py-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] border border-[#183528]/10 bg-white shadow-[0_26px_85px_rgba(24,53,40,0.12)]">
          <div className="grid items-stretch lg:grid-cols-2">
            {/* Left details */}
            <div className="relative flex h-full flex-col bg-[#183528] p-5 text-white sm:p-7 lg:p-8">
              <div className="absolute -left-20 -top-20 size-60 rounded-full bg-[#f4d77b]/18 blur-3xl" />
              <div className="absolute -bottom-24 right-0 size-64 rounded-full bg-[#f28c28]/14 blur-3xl" />

              <div className="relative flex h-full flex-col">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#f4d77b] sm:text-[11px]">
                  Contact Us
                </p>

                <h2
                  id="home-contact-heading"
                  className="mt-3 text-2xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-3xl"
                >
                  Speak with Heaven Seeds Academy.
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-white/78">
                  Contact us for admissions, visits, availability and parent
                  support. We will guide you with care.
                </p>

                <div className="mt-5 grid gap-2.5">
                  <Link
                    href="tel:57614680"
                    className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/10 p-3 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/15"
                  >
                    <Phone size={17} className="text-[#f4d77b]" />
                    57614680
                  </Link>

                  <Link
                    href={`https://wa.me/${whatsappNumber}?text=${quickWhatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/10 p-3 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/15"
                  >
                    <MessageCircle size={17} className="text-[#f4d77b]" />
                    WhatsApp: 58204613
                  </Link>

                  <Link
                    href={`mailto:${emailAddress}`}
                    className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/10 p-3 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/15"
                  >
                    <Mail size={17} className="text-[#f4d77b]" />
                    {emailAddress}
                  </Link>

                  <Link
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      address
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 rounded-2xl border border-white/12 bg-white/10 p-3 text-sm font-bold leading-6 text-white backdrop-blur-md transition hover:bg-white/15"
                  >
                    <MapPin size={17} className="mt-0.5 shrink-0 text-[#f4d77b]" />
                    <span>{address}</span>
                  </Link>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <Link
                    href="https://www.facebook.com/share/1CKUaPFuv4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Heaven Seeds Academy Facebook"
                    className="grid size-11 place-items-center rounded-full border border-white/20 bg-[#f4d77b] text-[#183528] shadow-[0_14px_35px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-white"
                  >
                    <FacebookIcon />
                  </Link>

                  <Link
                    href="https://www.instagram.com/heavenseedsacademy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Heaven Seeds Academy Instagram"
                    className="grid size-11 place-items-center rounded-full border border-white/20 bg-[#f4d77b] text-[#183528] shadow-[0_14px_35px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-white"
                  >
                    <InstagramIcon />
                  </Link>
                </div>

                <Link
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 block overflow-hidden rounded-[1.5rem] border border-white/14 bg-white/10 shadow-[0_18px_55px_rgba(0,0,0,0.18)]"
                  aria-label="Open Heaven Seeds Academy location on Google Maps"
                >
                  <iframe
                    title="Heaven Seeds Academy location map"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      address
                    )}&output=embed`}
                    className="h-36 w-full border-0 sm:h-40"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </Link>
              </div>
            </div>

            {/* Right form */}
            <div className="flex h-full flex-col justify-center bg-white p-5 sm:p-7 lg:p-8">
              <div className="mb-4">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#d6a84f] sm:text-[11px]">
                  Quick Message
                </p>

                <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.04em] text-[#183528] sm:text-3xl">
                  Send your enquiry quickly.
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#426252]">
                  Choose a query, fill your details, and send it directly by
                  WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="grid gap-3.5">
                <div className="grid gap-3.5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#183528]/70">
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(event) =>
                        updateField("name", event.target.value)
                      }
                      placeholder="Your name"
                      className="h-11 w-full rounded-2xl border border-[#183528]/10 bg-[#fffaf0] px-4 text-sm font-semibold text-[#183528] outline-none transition focus:border-[#d6a84f] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#183528]/70">
                      Phone Number
                    </label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(event) =>
                        updateField("phone", event.target.value)
                      }
                      placeholder="Your number"
                      className="h-11 w-full rounded-2xl border border-[#183528]/10 bg-[#fffaf0] px-4 text-sm font-semibold text-[#183528] outline-none transition focus:border-[#d6a84f] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid gap-3.5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#183528]/70">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(event) =>
                        updateField("email", event.target.value)
                      }
                      placeholder="your@email.com"
                      className="h-11 w-full rounded-2xl border border-[#183528]/10 bg-[#fffaf0] px-4 text-sm font-semibold text-[#183528] outline-none transition focus:border-[#d6a84f] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#183528]/70">
                      Query Type
                    </label>

                    <div className="relative">
                      <select
                        required
                        value={form.enquiryType}
                        onChange={(event) =>
                          updateField("enquiryType", event.target.value)
                        }
                        className="h-11 w-full appearance-none rounded-2xl border border-[#183528]/10 bg-[#fffaf0] px-4 pr-10 text-sm font-semibold text-[#183528] outline-none transition focus:border-[#d6a84f] focus:bg-white"
                      >
                        {enquiryTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>

                      <ChevronDown
                        size={17}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#183528]/55"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#183528]/70">
                    Short Message
                  </label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(event) =>
                      updateField("message", event.target.value)
                    }
                    placeholder="I would like to know more about enrollment..."
                    rows={4}
                    className="w-full resize-none rounded-2xl border border-[#183528]/10 bg-[#fffaf0] px-4 py-3 text-sm font-semibold leading-6 text-[#183528] outline-none transition focus:border-[#d6a84f] focus:bg-white"
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <button
                    type="submit"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#7f1d1d] px-5 text-sm font-extrabold !text-white shadow-[0_16px_35px_rgba(127,29,29,0.26)] transition duration-300 hover:-translate-y-1 hover:bg-[#991b1b]"
                  >
                    <span className="text-white">WhatsApp Us</span>
                    <Send size={16} className="text-white" />
                  </button>

                  <Link
                    href={`mailto:${emailAddress}`}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#f28c28] px-5 text-sm font-extrabold !text-white shadow-[0_16px_35px_rgba(242,140,40,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#ff9f3f]"
                  >
                    <span className="text-white">Email Us</span>
                    <Mail size={16} className="text-white" />
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>

        <p className="sr-only">
          Contact Heaven Seeds Academy in Quatre Bornes, Mauritius by phone,
          WhatsApp, email, Facebook, Instagram or contact form for pre-primary
          admissions and parent enquiries.
        </p>
      </div>
    </section>
  );
}