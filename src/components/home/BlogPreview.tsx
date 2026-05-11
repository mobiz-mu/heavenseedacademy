import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpenText } from "lucide-react";

const posts = [
  {
    image: "/images/blog/blog-01.webp",
    tag: "Parent Guide",
    title: "A Calm Morning Routine for Pre-Primary Children",
    desc: "Simple habits that help children arrive at school happy, settled and ready to learn.",
    href: "/blog/calm-morning-routine-pre-primary-children",
  },
  {
    image: "/images/blog/blog-02.webp",
    tag: "Parent Support",
    title: "How Parents and Teachers Build Confidence Together",
    desc: "Clear communication between parents and educators helps every child feel supported.",
    href: "/blog/parent-teacher-communication-confidence",
  },
  {
    image: "/images/blog/blog-03.webp",
    tag: "Outdoor Learning",
    title: "Why Outdoor Play Matters in Early Childhood",
    desc: "Fresh air, movement and discovery help children develop focus, balance and curiosity.",
    href: "/blog/outdoor-play-early-childhood",
  },
  {
    image: "/images/blog/blog-04.webp",
    tag: "Early Support",
    title: "Spotting Learning Needs Early with Care",
    desc: "Gentle observation and early support can make a meaningful difference in a child’s growth.",
    href: "/blog/spotting-learning-needs-early",
  },
  {
    image: "/images/blog/blog-05.webp",
    tag: "Child Development",
    title: "Sensory Play for Calm, Focus and Language",
    desc: "Hands-on activities help young children build vocabulary, confidence and self-control.",
    href: "/blog/sensory-play-calm-focus-language",
  },
  {
    image: "/images/blog/blog-06.webp",
    tag: "Reading Skills",
    title: "Building a Love for Books from an Early Age",
    desc: "Short reading routines can strengthen attention, pronunciation and imagination.",
    href: "/blog/love-for-books-early-age",
  },
  {
    image: "/images/blog/blog-07.webp",
    tag: "School Readiness",
    title: "Creating Safe and Happy School Transitions",
    desc: "Children feel more secure when daily routines are predictable, warm and consistent.",
    href: "/blog/safe-happy-school-transitions",
  },
  {
    image: "/images/blog/blog-08.webp",
    tag: "Inclusion",
    title: "Learning Together in a Caring Classroom",
    desc: "Inclusive early learning supports confidence, kindness, language and social skills.",
    href: "/blog/inclusive-caring-classroom",
  },
  {
    image: "/images/blog/blog-09.webp",
    tag: "Confidence",
    title: "Helping Children Express Themselves with Joy",
    desc: "Music, stories, play and guided activities help children communicate with confidence.",
    href: "/blog/helping-children-express-themselves",
  },
];

const loopPosts = [...posts, ...posts];

export default function BlogPreview() {
  return (
    <section
      aria-labelledby="home-blog-heading"
      className="relative overflow-hidden px-4 py-7 sm:px-6 sm:py-9 lg:px-8 lg:py-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 grid gap-4 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#d6a84f] sm:text-[11px]">
              Learning Journal
            </p>

            <h2
              id="home-blog-heading"
              className="mt-2 text-2xl font-extrabold leading-tight tracking-[-0.04em] text-[#183528] sm:text-3xl lg:text-4xl"
            >
              Helpful insights for Mauritius parents.
            </h2>
          </div>

          <div className="max-w-2xl lg:ml-auto">
            <p className="text-sm leading-6 text-[#426252] sm:text-base">
              Short, practical articles on early childhood, pre-primary
              readiness, routines, confidence and caring development.
            </p>

            <div className="mt-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full bg-[#183528] px-5 py-2.5 text-xs font-extrabold !text-white shadow-[0_14px_35px_rgba(24,53,40,0.20)] transition duration-300 hover:-translate-y-1 hover:bg-[#244b39] sm:text-sm"
              >
                <span className="text-white">View Blog</span>
                <ArrowRight size={16} className="text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-14 bg-gradient-to-r from-white/75 to-transparent sm:w-28" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-14 bg-gradient-to-l from-white/75 to-transparent sm:w-28" />

        <div className="hsa-blog-marquee flex w-max gap-4 py-2">
          {loopPosts.map((post, index) => (
            <Link
              key={`${post.title}-${index}`}
              href={post.href}
              className="group w-[285px] shrink-0 overflow-hidden rounded-[1.6rem] border border-white/45 bg-white/36 shadow-[0_18px_55px_rgba(24,53,40,0.10)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white/55 sm:w-[330px]"
              aria-label={`Read blog article: ${post.title}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-b-[1.2rem]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 285px, 330px"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#183528]/38 via-transparent to-transparent" />

                <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/35 bg-white/22 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white shadow-md backdrop-blur-md">
                  <BookOpenText size={12} />
                  {post.tag}
                </div>
              </div>

              <div className="p-4">
                <h3 className="line-clamp-2 text-base font-extrabold leading-snug tracking-[-0.03em] text-[#183528] sm:text-lg">
                  {post.title}
                </h3>

                <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#426252]">
                  {post.desc}
                </p>

                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#7f1d1d] px-4 py-2 text-sm font-extrabold !text-white transition duration-300 group-hover:bg-[#991b1b]">
                  <span className="text-white">Read article</span>
                  <ArrowRight
                    size={15}
                    className="text-white transition group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <p className="sr-only">
        Heaven Seeds Academy blog articles for Mauritius parents covering
        pre-primary education, early childhood development, school readiness,
        routines, inclusion and confidence building.
      </p>
    </section>
  );
}