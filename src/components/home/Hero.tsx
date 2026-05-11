"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    const playVideo = async () => {
      try {
        if (video.paused) {
          await video.play();
        }
      } catch {
        // Some mobile browsers delay autoplay until the video is ready.
      }
    };

    const handleCanPlay = () => {
      playVideo();
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current + 8;
      const scrollingUp = currentScrollY < lastScrollY.current - 8;

      if (scrollingDown && currentScrollY > 80) {
        video.pause();
      }

      if (scrollingUp) {
        playVideo();
      }

      lastScrollY.current = currentScrollY;
    };

    video.addEventListener("canplay", handleCanPlay);
    window.addEventListener("scroll", handleScroll, { passive: true });

    playVideo();

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative m-0 w-full overflow-hidden bg-white p-0">
      <div className="relative aspect-video w-full overflow-hidden bg-[#183528]">
        <video
          ref={videoRef}
          className="block h-full w-full bg-[#183528] object-contain lg:object-cover"
          poster="/images/Hero/heaven-seeds-hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Heaven Seeds Academy hero video"
        >
          <source
            src="/Video/Hero/heaven-seeds-hero-optimized.mp4"
            type="video/mp4"
          />
        </video>

        {/* Premium readable overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#183528]/78 via-[#183528]/36 to-transparent sm:from-[#183528]/72 sm:via-[#183528]/28 lg:from-[#183528]/70 lg:via-[#183528]/24" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#183528]/42 via-transparent to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
            <div className="hero-copy max-w-[94%] sm:max-w-xl lg:max-w-2xl">
              <p className="mb-2 hidden rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.24em] text-white/85 shadow-lg backdrop-blur-md sm:inline-flex sm:text-xs">
                Heaven Seeds Academy
              </p>

              <h1 className="max-w-[360px] text-[27px] font-extrabold leading-[1.02] tracking-[-0.055em] text-white drop-shadow-2xl min-[390px]:text-[31px] sm:max-w-2xl sm:text-5xl lg:text-6xl xl:text-7xl">
                Planting Seeds of Love, Learning &amp; Confidence
              </h1>

              <p className="mt-3 max-w-[330px] text-[13px] font-semibold leading-5 text-white/92 drop-shadow-xl min-[390px]:text-sm min-[390px]:leading-6 sm:mt-5 sm:max-w-xl sm:text-lg sm:leading-8 lg:text-xl">
                A warm pre-primary environment where every child can grow,
                explore and shine.
              </p>

              <div className="mt-4 sm:mt-8">
                <Link
                  href="/admissions"
                  className="hero-cta inline-flex items-center justify-center gap-2 rounded-full bg-[#f28c28] px-5 py-2.5 text-xs font-extrabold !text-white shadow-[0_18px_45px_rgba(242,140,40,0.38)] transition duration-300 hover:-translate-y-1 hover:bg-[#ff9f3f] min-[390px]:px-6 min-[390px]:py-3 min-[390px]:text-sm sm:px-7 sm:py-4 sm:text-base"
                >
                  <span className="text-white">Start Enrollment</span>
                  <ArrowRight size={16} className="text-white sm:size-[18px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}