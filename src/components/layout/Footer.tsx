import Image from "next/image";
import Link from "next/link";
import { Heart, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Programmes", href: "/programmes" },
  { label: "Admissions", href: "/admissions" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const policyLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#183528] text-white">
      <div className="absolute -left-24 -top-24 size-72 rounded-full bg-[#d6a84f]/16 blur-3xl" />
      <div className="absolute -bottom-32 right-0 size-96 rounded-full bg-[#7f1d1d]/24 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.85fr_0.9fr]">
          {/* Column 1 */}
          <div>
            <Link href="/" className="inline-flex">
              <Image
                src="/images/Logo/logo-heavenseedsacademy.png"
                alt="Heaven Seeds Academy"
                width={190}
                height={90}
                className="h-20 w-auto rounded-2xl bg-white/95 p-2 shadow-[0_18px_45px_rgba(0,0,0,0.18)]"
              />
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/74">
              Heaven Seeds Academy provides a safe, caring and joyful
              pre-primary learning environment in Mauritius, helping children
              grow with love, confidence and strong foundations.
            </p>

            <div className="mt-5 grid gap-3 text-sm font-bold text-white/85">
              <Link
                href="tel:57614680"
                className="flex items-center gap-3 transition hover:text-[#f4d77b]"
              >
                <Phone size={17} className="text-[#f4d77b]" />
                57614680 / 58204613
              </Link>

              <Link
                href="mailto:Heavenseed2126@gmail.com"
                className="flex items-center gap-3 transition hover:text-[#f4d77b]"
              >
                <Mail size={17} className="text-[#f4d77b]" />
                Heavenseed2126@gmail.com
              </Link>

              <Link
                href="https://www.google.com/maps/search/?api=1&query=111%2C%20Malartic%20Avenue%2C%20Quatre%20Bornes%2C%2075947%2C%20Zone%204%2C%20Mauritius"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 leading-6 transition hover:text-[#f4d77b]"
              >
                <MapPin size={17} className="mt-0.5 shrink-0 text-[#f4d77b]" />
                <span>
                  111, Malartic Avenue, Quatre Bornes, 75947, Zone 4, Mauritius
                </span>
              </Link>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#f4d77b]">
              Quick Links
            </h3>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:max-w-md lg:grid-cols-1">
              {quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group inline-flex items-center gap-2 text-sm font-bold text-white/78 transition hover:text-white"
                >
                  <span className="size-1.5 rounded-full bg-[#f4d77b] opacity-60 transition group-hover:opacity-100" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#f4d77b]">
              Policies & Help
            </h3>

            <div className="mt-5 grid gap-3">
              {policyLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm font-bold text-white/82 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/14 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-5 rounded-3xl border border-[#f4d77b]/18 bg-[#f4d77b]/10 p-4">
              <p className="text-sm font-bold leading-6 text-white/82">
                Need help with enrollment? Contact us and our team will guide
                you step by step.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-9 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm font-semibold text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Heaven Seeds Academy. All rights
            reserved.
          </p>

          <p className="flex items-center gap-2">
            Built By{" "}
            <Link
              href="https://mobiz.mu"
              target="_blank"
              rel="noopener noreferrer"
              className="font-extrabold text-[#f4d77b] transition hover:text-white"
            >
              Mobiz.mu
            </Link>{" "}
            with Love
            <Heart
              size={28}
              className="hsa-footer-heart fill-[#dc2626] text-[#dc2626] drop-shadow-[0_8px_18px_rgba(220,38,38,0.55)]"
            />
          </p>
        </div>
      </div>
    </footer>
  );
}