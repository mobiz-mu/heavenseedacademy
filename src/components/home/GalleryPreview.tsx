import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Images, Sparkles } from "lucide-react";

const galleryImages = [
  {
    src: "/images/Gallery/gallery-01.jpg",
    label: "Creative Learning",
    alt: "Realistic warm pre-primary classroom in Mauritius with children doing creative learning activities",
  },
  {
    src: "/images/Gallery/gallery-02.jpg",
    label: "Art & Painting",
    alt: "Mauritius preschool classroom with young children painting and drawing in a safe space",
  },
  {
    src: "/images/Gallery/gallery-03.jpg",
    label: "Story Time",
    alt: "Children in Mauritius sitting in a circle for story time with a teacher reading a book",
  },
  {
    src: "/images/Gallery/gallery-04.jpg",
    label: "Outdoor Play",
    alt: "Pre-primary school outdoor play area in Mauritius with children playing safely",
  },
  {
    src: "/images/Gallery/gallery-05.jpg",
    label: "Alphabet Learning",
    alt: "Caring teacher helping a child with alphabet learning in a Mauritius nursery classroom",
  },
  {
    src: "/images/Gallery/gallery-06.jpg",
    label: "Teamwork",
    alt: "Young children building blocks in a clean pre-primary classroom in Mauritius",
  },
  {
    src: "/images/Gallery/gallery-07.jpg",
    label: "Music & Movement",
    alt: "Mauritius kindergarten music and movement activity with children smiling",
  },
  {
    src: "/images/Gallery/gallery-08.jpg",
    label: "Healthy Routines",
    alt: "Children learning hygiene routine at a preschool in Mauritius",
  },
  {
    src: "/images/Gallery/gallery-09.jpg",
    label: "Snack Time",
    alt: "Pre-primary classroom snack time in Mauritius with calm nurturing atmosphere",
  },
  {
    src: "/images/Gallery/gallery-10.jpg",
    label: "Garden Discovery",
    alt: "Mauritius preschool garden learning activity with children exploring plants and leaves",
  },
];

const loopImages = [...galleryImages, ...galleryImages];

export default function GalleryPreview() {
  return (
    <section
      aria-labelledby="gallery-preview-heading"
      className="relative overflow-hidden px-4 py-7 sm:px-6 sm:py-9 lg:px-8 lg:py-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 grid gap-4 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#d6a84f] sm:text-[11px]">
              <Camera size={14} />
              Gallery Preview
            </p>

            <h2
              id="gallery-preview-heading"
              className="mt-2 text-2xl font-extrabold leading-tight tracking-[-0.04em] text-[#183528] sm:text-3xl lg:text-4xl"
            >
              Real moments of care, play and discovery.
            </h2>
          </div>

          <div className="max-w-2xl lg:ml-auto">
            <p className="text-sm leading-6 text-[#426252] sm:text-base">
              A premium look inside our Mauritius pre-primary environment —
              warm classrooms, creative learning, outdoor play and nurturing
              daily routines.
            </p>

            <div className="mt-4">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 rounded-full bg-[#7f1d1d] px-5 py-2.5 text-xs font-extrabold !text-white shadow-[0_14px_35px_rgba(127,29,29,0.24)] transition duration-300 hover:-translate-y-1 hover:bg-[#991b1b] sm:text-sm"
                aria-label="View Heaven Seeds Academy gallery"
              >
                <span className="text-white">View Gallery</span>
                <ArrowRight size={16} className="text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-14 bg-gradient-to-r from-white/80 to-transparent sm:w-28" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-14 bg-gradient-to-l from-white/80 to-transparent sm:w-28" />

        <div className="hsa-gallery-marquee flex w-max gap-4 py-2">
          {loopImages.map((image, index) => (
            <Link
              key={`${image.src}-${index}`}
              href="/gallery"
              className="group relative aspect-[3/2] w-[282px] shrink-0 overflow-hidden rounded-[1.75rem] shadow-[0_20px_65px_rgba(24,53,40,0.14)] ring-1 ring-white/45 transition duration-500 hover:-translate-y-1 sm:w-[370px] lg:w-[430px]"
              aria-label={`Open gallery: ${image.label}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 282px, (max-width: 1024px) 370px, 430px"
                loading="lazy"
                quality={70}
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#183528]/58 via-[#183528]/8 to-transparent transition duration-500 group-hover:from-[#183528]/46" />

              <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/35 bg-white/20 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white shadow-lg backdrop-blur-md">
                <Sparkles size={12} />
                Premium Care
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-2xl border border-white/25 bg-white/18 px-3 py-2 text-white shadow-lg backdrop-blur-md">
                <span className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em]">
                  <Images size={14} />
                  {image.label}
                </span>

                <ArrowRight
                  size={15}
                  className="transition duration-300 group-hover:translate-x-1"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <p className="sr-only">
        Heaven Seeds Academy gallery preview showing realistic pre-primary
        school life in Mauritius, including creative learning, painting, story
        time, outdoor play, alphabet learning, teamwork, music, hygiene routines,
        snack time and garden discovery.
      </p>
    </section>
  );
}