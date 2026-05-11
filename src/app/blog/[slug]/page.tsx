import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpenText,
  CheckCircle2,
  Clock,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { blogPosts, getBlogPost } from "@/lib/blog-posts";

type BlogArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: post.title,
    description: post.desc,
    openGraph: {
      title: post.title,
      description: post.desc,
      images: [post.image],
      type: "article",
    },
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="relative px-4 py-7 sm:px-6 sm:py-9 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/blog"
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-sm font-extrabold text-[#183528] shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <article className="overflow-hidden rounded-[2rem] bg-[#183528] shadow-[0_26px_85px_rgba(24,53,40,0.14)]">
            <div className="relative aspect-video w-full overflow-hidden bg-[#183528]">
              <Image
                src={post.image}
                alt={post.title}
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
                    <BookOpenText size={14} />
                    {post.tag}
                  </p>

                  <h1 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.055em] text-white drop-shadow-2xl sm:text-5xl lg:text-6xl">
                    {post.title}
                  </h1>

                  <div className="mt-5 flex flex-wrap items-center gap-3 text-sm font-bold text-white/82">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 backdrop-blur-md">
                      <Clock size={15} />
                      {post.readTime}
                    </span>

                    <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 backdrop-blur-md">
                      <Sparkles size={15} />
                      Heaven Seeds Academy
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_320px] lg:items-start">
          <article className="rounded-[2rem] border border-white/45 bg-white/65 p-6 shadow-[0_24px_80px_rgba(24,53,40,0.10)] backdrop-blur-xl sm:p-8 lg:p-10">
            <p className="text-lg font-semibold leading-9 text-[#426252]">
              {post.content.intro}
            </p>

            <div className="mt-8 grid gap-8">
              {post.content.sections.map((section, index) => (
                <section key={section.heading}>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-2xl bg-[#183528] text-sm font-extrabold text-white shadow-[0_14px_35px_rgba(24,53,40,0.18)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h2 className="text-2xl font-extrabold leading-tight tracking-[-0.04em] text-[#183528] sm:text-3xl">
                      {section.heading}
                    </h2>
                  </div>

                  <p className="text-base leading-8 text-[#426252]">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>

            <div className="mt-10 rounded-[1.75rem] bg-[#183528] p-6 text-white shadow-[0_22px_70px_rgba(24,53,40,0.14)]">
              <h2 className="text-2xl font-extrabold tracking-[-0.04em]">
                Final thought
              </h2>

              <p className="mt-3 text-sm leading-7 text-white/78 sm:text-base">
                {post.content.conclusion}
              </p>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="rounded-[2rem] border border-white/45 bg-white/55 p-5 shadow-[0_22px_70px_rgba(24,53,40,0.09)] backdrop-blur-xl lg:sticky lg:top-32">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#d6a84f]">
              Parent Support
            </p>

            <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.04em] text-[#183528]">
              Need help choosing the next step?
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#426252]">
              Speak with Heaven Seeds Academy about admissions, school visits
              and your child’s early learning journey.
            </p>

            <Link
              href="https://wa.me/23058204613"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#7f1d1d] px-5 py-3 text-sm font-extrabold !text-white shadow-[0_18px_45px_rgba(127,29,29,0.28)] transition hover:-translate-y-1 hover:bg-[#991b1b]"
            >
              <span className="text-white">WhatsApp Us</span>
              <MessageCircle size={17} className="text-white" />
            </Link>

            <div className="mt-6 border-t border-[#183528]/10 pt-5">
              <h3 className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#183528]/70">
                Article Checklist
              </h3>

              <div className="mt-4 grid gap-3">
                {["Practical", "Parent-friendly", "Early learning focused"].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm font-bold text-[#426252]"
                    >
                      <CheckCircle2
                        size={17}
                        className="text-[#d6a84f]"
                        strokeWidth={2.5}
                      />
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Posts */}
      <section className="px-4 py-6 pb-12 sm:px-6 sm:py-8 sm:pb-14 lg:px-8 lg:py-10 lg:pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#d6a84f]">
              Continue Reading
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#183528] sm:text-4xl">
              More helpful articles.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {relatedPosts.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="group overflow-hidden rounded-[1.75rem] border border-white/45 bg-white/60 shadow-[0_18px_55px_rgba(24,53,40,0.08)] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/75"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#d6a84f]">
                    {item.tag}
                  </p>

                  <h3 className="mt-2 text-lg font-extrabold leading-tight tracking-[-0.035em] text-[#183528]">
                    {item.title}
                  </h3>

                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-[#7f1d1d]">
                    Read next
                    <ArrowRight size={15} />
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