import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpenText, Clock, Sparkles } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";
import { createMetadata } from "@/lib/seo/metadata";
import { pageSeo } from "@/lib/seo/site";

export const metadata = createMetadata(pageSeo.blog);


export default function BlogPage() {
  const featured = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  return (
    <main>
      {/* Hero */}
      <section className="relative px-4 py-7 sm:px-6 sm:py-9 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] bg-[#183528] p-6 text-white shadow-[0_26px_85px_rgba(24,53,40,0.14)] sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#f4d77b] backdrop-blur-md sm:text-[11px]">
                  <BookOpenText size={14} />
                  Heaven Seeds Journal
                </p>

                <h1 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
                  Helpful insights for Mauritius parents.
                </h1>

                <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-white/78 sm:text-lg sm:leading-8">
                  Practical articles on early childhood, pre-primary readiness,
                  routines, confidence, inclusion and caring child development.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["Early Childhood", "Pre-Primary", "Parent Support"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/14 bg-white/10 px-4 py-2 text-xs font-extrabold text-white/85"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>

              <Link
                href={`/blog/${featured.slug}`}
                className="group overflow-hidden rounded-[1.75rem] border border-white/14 bg-white/10 shadow-[0_22px_70px_rgba(0,0,0,0.14)] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/14"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#183528]/58 via-transparent to-transparent" />

                  <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/18 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                    Featured
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3 text-xs font-extrabold text-[#f4d77b]">
                    <span>{featured.tag}</span>
                    <span>â€¢</span>
                    <span>{featured.readTime}</span>
                  </div>

                  <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-3xl">
                    {featured.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-white/75">
                    {featured.desc}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#f28c28] px-5 py-2.5 text-sm font-extrabold !text-white">
                    <span className="text-white">Read featured article</span>
                    <ArrowRight size={16} className="text-white" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#d6a84f]">
                <Sparkles size={15} />
                Latest Articles
              </p>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#183528] sm:text-4xl">
                Read, learn and feel prepared.
              </h2>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-[#426252] sm:text-base lg:ml-auto">
              Browse practical guidance created for parents who want a calm,
              safe and confident pre-primary journey for their children.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {remainingPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-[2rem] border border-white/45 bg-white/55 shadow-[0_22px_70px_rgba(24,53,40,0.09)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white/70"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#183528]/42 via-transparent to-transparent" />

                  <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/35 bg-white/22 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white shadow-md backdrop-blur-md">
                    <BookOpenText size={12} />
                    {post.tag}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-[#7f1d1d]/80">
                    <Clock size={14} />
                    {post.readTime}
                  </div>

                  <h3 className="mt-3 text-xl font-extrabold leading-tight tracking-[-0.035em] text-[#183528]">
                    {post.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#426252]">
                    {post.desc}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#7f1d1d] px-5 py-2.5 text-sm font-extrabold !text-white shadow-[0_16px_35px_rgba(127,29,29,0.22)] transition group-hover:bg-[#991b1b]">
                    <span className="text-white">Read article</span>
                    <ArrowRight size={16} className="text-white" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
