import Image from "next/image";
import { Star, StarHalf } from "lucide-react";

const testimonials = [
  {
    name: "James Thompson",
    role: "Parent, Mauritius",
    lang: "EN",
    rating: 5,
    image: "/images/Home/testimonials/man/profileenglish2.png",
    text: "A warm, safe and professional academy. My son settled quickly and became more confident every week.",
  },
  {
    name: "Julien Moreau",
    role: "Parent francophone",
    lang: "FR",
    rating: 4.5,
    image: "/images/Home/testimonials/man/profilefrance.png",
    text: "Une équipe rassurante, douce et très attentive. Mon enfant aime venir à l’école chaque matin.",
  },
  {
    name: "Claire Bennett",
    role: "Parent, Mauritius",
    lang: "EN",
    rating: 5,
    image: "/images/Home/testimonials/women/profileengland1.png",
    text: "The environment feels premium, calm and caring. Communication with parents is clear and very professional.",
  },
  {
    name: "Camille Martin",
    role: "Maman, Maurice",
    lang: "FR",
    rating: 5,
    image: "/images/Home/testimonials/women/profilefrance.png",
    text: "Un très bel encadrement pour les petits. L’école inspire confiance dès la première visite.",
  },
  {
    name: "Arjun Mehta",
    role: "Parent, Moka",
    lang: "EN",
    rating: 4,
    image: "/images/Home/testimonials/man/profileindia.png",
    text: "A caring pre-primary environment with structure, kindness and strong parent support.",
  },
  {
    name: "Priya Nair",
    role: "Parent, Mauritius",
    lang: "EN",
    rating: 4.5,
    image: "/images/Home/testimonials/women/profileindia.png",
    text: "My daughter feels happy, safe and excited to learn. The teachers are patient and loving.",
  },
  {
    name: "Marc Dubois",
    role: "Papa, expatrié",
    lang: "FR",
    rating: 5,
    image: "/images/Home/testimonials/man/profileparis.png",
    text: "Un cadre propre, accueillant et bien organisé. Nous sommes très rassurés comme parents.",
  },
  {
    name: "Élise Laurent",
    role: "Maman, Grand Baie",
    lang: "FR",
    rating: 4.5,
    image: "/images/Home/testimonials/women/profilefrance1.png",
    text: "Une école douce et familiale avec une vraie attention au développement de chaque enfant.",
  },
  {
    name: "Daniel Tan",
    role: "Parent, Mauritius",
    lang: "EN",
    rating: 5,
    image: "/images/Home/testimonials/man/profilesingapore.png",
    text: "Very reassuring for young children. The academy feels safe, modern and genuinely caring.",
  },
  {
    name: "Anastasia Petrova",
    role: "Expat parent",
    lang: "EN",
    rating: 4,
    image: "/images/Home/testimonials/women/profilerussia.png",
    text: "A peaceful learning space with kind teachers and excellent attention to children’s confidence.",
  },
  {
    name: "Kwame Mensah",
    role: "Parent, Mauritius",
    lang: "EN",
    rating: 4.5,
    image: "/images/Home/testimonials/man/profileafrican.png",
    text: "The team is approachable, professional and warm. It feels like a second home for children.",
  },
  {
    name: "Thandiwe Mokoena",
    role: "Parent, Mauritius",
    lang: "EN",
    rating: 5,
    image: "/images/Home/testimonials/women/profilesouthafrica.png",
    text: "A beautiful place for early learning. Safe, caring and focused on every child’s growth.",
  },
  {
    name: "Thomas Bernard",
    role: "Papa, Maurice",
    lang: "FR",
    rating: 4.5,
    image: "/images/Home/testimonials/man/profileparis2.png",
    text: "Très bonne communication avec les parents. L’environnement est calme, joyeux et sécurisant.",
  },
  {
    name: "Amélie Dubois",
    role: "Maman francophone",
    lang: "FR",
    rating: 5,
    image: "/images/Home/testimonials/women/profilefrance3.png",
    text: "Heaven Seeds Academy donne une vraie impression de confiance, de douceur et de qualité.",
  },
  {
    name: "William Parker",
    role: "Parent, Mauritius",
    lang: "EN",
    rating: 4,
    image: "/images/Home/testimonials/man/profileenglish.png",
    text: "A premium early learning experience with a family feeling. Very good support for parents.",
  },
  {
    name: "Sophie Carter",
    role: "Parent, Mauritius",
    lang: "EN",
    rating: 5,
    image: "/images/Home/testimonials/women/profileengland.png",
    text: "My child became more independent and expressive. We feel very happy with the care given.",
  },
  {
    name: "Étienne Laurent",
    role: "Parent, Maurice",
    lang: "FR",
    rating: 4.5,
    image: "/images/Home/testimonials/man/profilefrance1.png",
    text: "Une approche humaine, professionnelle et bienveillante. Les enfants sont vraiment valorisés.",
  },
  {
    name: "Naledi Dlamini",
    role: "Parent, Mauritius",
    lang: "EN",
    rating: 5,
    image: "/images/Home/testimonials/women/profilesouthafrica1.png",
    text: "A safe and joyful environment where children are encouraged to explore and shine.",
  },
];

const marqueeItems = [...testimonials.slice(0, 10), ...testimonials.slice(0, 6)];

function RatingStars({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div
      className="flex items-center gap-0.5 text-[#f5b301]"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: fullStars }).map((_, index) => (
        <Star
          key={`full-${index}`}
          size={14}
          className="fill-[#f5b301]"
          strokeWidth={2.1}
        />
      ))}

      {hasHalf ? (
        <StarHalf
          size={14}
          className="fill-[#f5b301]"
          strokeWidth={2.1}
        />
      ) : null}

      {Array.from({ length: emptyStars }).map((_, index) => (
        <Star
          key={`empty-${index}`}
          size={14}
          className="text-[#f5b301]/35"
          strokeWidth={2.1}
        />
      ))}

      <span className="ml-2 text-[11px] font-extrabold text-[#183528]/65">
        {rating.toFixed(rating % 1 === 0 ? 0 : 1)}
      </span>
    </div>
  );
}

export default function ParentTestimonials() {
  return (
    <section
      aria-labelledby="parent-testimonials-heading"
      className="relative overflow-hidden px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-9"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 grid gap-3 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#d6a84f] sm:text-[11px]">
              Parent Reviews
            </p>

            <h2
              id="parent-testimonials-heading"
              className="mt-2 text-2xl font-extrabold leading-tight tracking-[-0.04em] text-[#183528] sm:text-3xl lg:text-4xl"
            >
              Trusted by families in Mauritius.
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-6 text-[#426252] sm:text-base lg:ml-auto">
            English and French parent feedback that reflects safety, care,
            confidence and joyful early learning.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-white/75 to-transparent sm:w-28" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-white/75 to-transparent sm:w-28" />

        <div className="hsa-testimonial-marquee flex gap-4 py-2">
          {marqueeItems.map((item, index) => (
            <article
              key={`${item.name}-${index}`}
              className="w-[300px] shrink-0 rounded-[1.45rem] border border-white/45 bg-white/36 p-4 shadow-[0_18px_55px_rgba(24,53,40,0.10)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white/52 sm:w-[350px]"
            >
              <div className="flex items-start gap-3">
                <div className="relative size-13 shrink-0 overflow-hidden rounded-full bg-transparent shadow-[0_10px_28px_rgba(24,53,40,0.14)] ring-2 ring-white/80">
                  <Image
                    src={item.image}
                    alt={`${item.name} parent review avatar`}
                    fill
                    sizes="52px"
                    loading="lazy"
                    quality={65}
                    className="rounded-full object-cover object-center"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-extrabold tracking-[-0.02em] text-[#183528]">
                        {item.name}
                      </h3>

                      <p className="mt-0.5 truncate text-xs font-bold text-[#426252]/80">
                        {item.role}
                      </p>
                    </div>

                    <span className="shrink-0 rounded-full bg-[#183528]/8 px-2 py-1 text-[10px] font-extrabold text-[#183528]">
                      {item.lang}
                    </span>
                  </div>

                  <div className="mt-2">
                    <RatingStars rating={item.rating} />
                  </div>
                </div>
              </div>

              <p className="mt-3 h-[72px] overflow-hidden text-sm leading-6 text-[#426252]">
                “{item.text}”
              </p>
            </article>
          ))}
        </div>
      </div>

      <p className="sr-only">
        Parent testimonials for Heaven Seeds Academy, a pre-primary school in
        Mauritius offering safe, caring and nurturing early childhood education.
      </p>
    </section>
  );
}