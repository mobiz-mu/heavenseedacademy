"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import Button from "@/components/ui/Button";

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
    <svg viewBox="0 0 24 24" className="size-3.5 fill-current" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.77l-.44 2.91h-2.33V22C18.34 21.24 22 17.08 22 12.06Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-3.5 fill-current" aria-hidden="true">
      <path d="M7.8 2h8.4A5.81 5.81 0 0 1 22 7.8v8.4a5.81 5.81 0 0 1-5.8 5.8H7.8A5.81 5.81 0 0 1 2 16.2V7.8A5.81 5.81 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      <div className="relative z-[70] border-b border-white/10 bg-[#183528] text-white">
        <div className="grid h-10 w-full grid-cols-[1fr_auto] items-center px-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
          {/* Left Socials */}
          <div className="flex animate-hsa-fade items-center justify-start gap-3">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-white/75 sm:text-[11px]">
              Follow Us
            </span>

            <a
              href="https://www.facebook.com/share/1CKUaPFuv4/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid size-7 place-items-center rounded-full bg-white/12 text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#d6a84f] hover:text-[#183528]"
            >
              <FacebookIcon />
            </a>

            <a
              href="https://www.instagram.com/heavenseedsacademy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid size-7 place-items-center rounded-full bg-white/12 text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#d6a84f] hover:text-[#183528]"
            >
              <InstagramIcon />
            </a>
          </div>

          {/* Desktop Center Animated Message */}
          <div className="hidden min-w-[620px] items-center justify-center lg:flex">
            <p className="hsa-typewriter overflow-hidden whitespace-nowrap text-sm font-extrabold tracking-[0.06em] text-[#f4d77b]">
              Planted with love, growing under Heaven&apos;s light...
            </p>
          </div>

          {/* Right Flags */}
          <div className="flex animate-hsa-fade items-center justify-end gap-2">
            <button
              type="button"
              aria-label="Switch to French"
              className="grid size-8 place-items-center rounded-full bg-white/12 transition duration-300 hover:-translate-y-0.5 hover:bg-white/25"
            >
              <Image
                src="/images/Flags/fr.png"
                alt="French"
                width={22}
                height={22}
                className="rounded-full object-cover"
              />
            </button>

            <button
              type="button"
              aria-label="Switch to English"
              className="grid size-8 place-items-center rounded-full bg-white/12 transition duration-300 hover:-translate-y-0.5 hover:bg-white/25"
            >
              <Image
                src="/images/Flags/en.png"
                alt="English"
                width={22}
                height={22}
                className="rounded-full object-cover"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-[60] m-0 border-b border-[#183528]/10 bg-white shadow-[0_12px_38px_rgba(24,53,40,0.08)]">
        {/* Desktop-only background image */}
        <div className="absolute inset-0 hidden overflow-hidden lg:block">
          <Image
            src="/images/header/header-bg.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-white/72 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/62 to-white/85" />
        </div>

        {/* Mobile/tablet clean white background */}
        <div className="absolute inset-0 bg-white lg:hidden" />

        <div className="relative z-10 grid h-24 w-full grid-cols-[auto_1fr_auto] items-center gap-3 px-4 sm:gap-4 sm:px-6 lg:px-8">
          {/* Mobile Menu Button - Left */}
          <div className="flex items-center justify-start lg:hidden">
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
              className="grid size-11 place-items-center rounded-full border border-[#183528]/10 bg-white text-[#183528] shadow-[0_12px_30px_rgba(24,53,40,0.12)] transition hover:bg-[#fff4df]"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="flex h-24 items-center justify-center lg:justify-start"
          >
            <Image
              src="/images/Logo/logo-heavenseedsacademy.png"
              alt="Heaven Seeds Academy"
              width={230}
              height={100}
              priority
              className="h-[74px] w-auto object-contain min-[390px]:h-[80px] sm:h-[88px] lg:h-[94px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center justify-center gap-3 lg:flex">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ animationDelay: `${index * 0.12}s` }}
                className="animate-hsa-menu-fade rounded-full bg-white/68 px-4 py-2 text-sm font-extrabold text-[#183528]/95 shadow-sm backdrop-blur-md transition duration-300 hover:bg-[#fff4df] hover:text-[#183528]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA - Right */}
          <div className="flex items-center justify-end">
            <Button
              href="/admissions"
              variant="danger"
              size="sm"
              className="bg-[#7f1d1d] px-4 !text-white shadow-[0_16px_35px_rgba(127,29,29,0.32)] hover:bg-[#991b1b] sm:px-5"
            >
              <span className="text-white">Enroll</span>
              <span className="hidden text-white sm:inline"> Now</span>
            </Button>
          </div>
        </div>

        <MobileMenu open={open} onClose={() => setOpen(false)} />
      </header>
    </>
  );
}