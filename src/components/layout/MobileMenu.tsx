"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programmes", href: "/programmes" },
  { label: "Admissions", href: "/admissions" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.77l-.44 2.91h-2.33V22C18.34 21.24 22 17.08 22 12.06Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
      <path d="M7.8 2h8.4A5.81 5.81 0 0 1 22 7.8v8.4a5.81 5.81 0 0 1-5.8 5.8H7.8A5.81 5.81 0 0 1 2 16.2V7.8A5.81 5.81 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </svg>
  );
}

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-[100] lg:hidden ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      {/* Dark overlay */}
      <button
        type="button"
        aria-label="Close menu overlay"
        onClick={onClose}
        className={`absolute inset-0 bg-[#183528]/45 backdrop-blur-sm transition-opacity duration-500 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Left drawer */}
      <aside
        className={`absolute left-0 top-0 h-full w-[86%] max-w-[390px] overflow-y-auto bg-white shadow-[30px_0_90px_rgba(24,53,40,0.24)] transition-transform duration-500 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative min-h-full overflow-hidden">
          <div className="absolute -left-20 -top-20 size-60 rounded-full bg-[#d6a84f]/18 blur-3xl" />
          <div className="absolute -bottom-24 right-0 size-72 rounded-full bg-[#183528]/10 blur-3xl" />

          <div className="relative p-5">
            {/* Drawer header */}
            <div className="flex items-center justify-between border-b border-[#183528]/10 pb-4">
              <Link href="/" onClick={onClose} className="flex items-center">
                <Image
                  src="/images/Logo/logo-heavenseedsacademy.png"
                  alt="Heaven Seeds Academy"
                  width={150}
                  height={70}
                  className="h-16 w-auto object-contain"
                />
              </Link>

              <button
                type="button"
                aria-label="Close menu"
                onClick={onClose}
                className="grid size-10 place-items-center rounded-full bg-[#183528] text-white shadow-[0_14px_35px_rgba(24,53,40,0.22)]"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-5">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#d6a84f]">
                Menu
              </p>

              <nav className="mt-4 grid gap-2">
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    style={{ animationDelay: `${index * 0.06}s` }}
                    className={`hsa-mobile-menu-item flex items-center justify-between rounded-2xl border border-[#183528]/10 bg-white px-4 py-3.5 text-sm font-extrabold text-[#183528] shadow-[0_12px_30px_rgba(24,53,40,0.06)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#fff4df] ${
                      open ? "animate-hsa-mobile-item" : ""
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="size-2 rounded-full bg-[#d6a84f]" />
                  </Link>
                ))}
              </nav>
            </div>

            <div className="mt-5 rounded-[1.5rem] border border-[#183528]/10 bg-[#fffaf0] p-4 shadow-[0_14px_40px_rgba(24,53,40,0.08)]">
              <Button
                href="/admissions"
                variant="danger"
                size="md"
                onClick={onClose}
                className="w-full bg-[#7f1d1d] !text-white shadow-[0_18px_45px_rgba(127,29,29,0.28)] hover:bg-[#991b1b]"
              >
                <span className="text-white">Enroll Now</span>
              </Button>

              <div className="mt-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#426252]">
                    Follow
                  </span>

                  <a
                    href="https://www.facebook.com/share/1CKUaPFuv4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="grid size-9 place-items-center rounded-full bg-[#183528] text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#7f1d1d]"
                  >
                    <FacebookIcon />
                  </a>

                  <a
                    href="https://www.instagram.com/heavenseedsacademy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="grid size-9 place-items-center rounded-full bg-[#183528] text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#7f1d1d]"
                  >
                    <InstagramIcon />
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Switch to French"
                    className="grid size-9 place-items-center rounded-full bg-white shadow-sm ring-1 ring-[#183528]/10"
                  >
                    <Image
                      src="/images/Flags/fr.png"
                      alt="French"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                  </button>

                  <button
                    type="button"
                    aria-label="Switch to English"
                    className="grid size-9 place-items-center rounded-full bg-white shadow-sm ring-1 ring-[#183528]/10"
                  >
                    <Image
                      src="/images/Flags/en.png"
                      alt="English"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-[1.5rem] bg-[#183528] p-4 text-white shadow-[0_18px_45px_rgba(24,53,40,0.18)]">
              <p className="text-sm font-extrabold">
                Heaven Seeds Academy
              </p>
              <p className="mt-1 text-xs leading-5 text-white/75">
                A safe, loving pre-primary environment for children in Mauritius.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}