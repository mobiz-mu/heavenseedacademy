import { Baby, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Safe & Caring",
    text: "A warm environment where children feel protected, loved and confident.",
  },
  {
    icon: Baby,
    title: "Early Learning",
    text: "Pre-primary foundations through play, creativity and guided discovery.",
  },
  {
    icon: HeartHandshake,
    title: "Parent Partnership",
    text: "Clear communication with families to support every child’s progress.",
  },
  {
    icon: Sparkles,
    title: "Confidence Building",
    text: "Helping children grow, explore, express themselves and shine.",
  },
];

export default function TrustStrip() {
  return (
    <section className="relative z-10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] border border-white/45 bg-white/35 shadow-[0_24px_80px_rgba(24,53,40,0.10)] backdrop-blur-xl">
          <div className="grid grid-cols-1 divide-y divide-white/45 md:grid-cols-2 md:divide-x md:divide-y-0 xl:grid-cols-4">
            {trustItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden p-6 transition duration-500 hover:bg-white/45 sm:p-7"
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  <div className="absolute -right-8 -top-8 size-24 rounded-full bg-[#d6a84f]/20 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-start gap-4">
                    <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#183528]/95 text-white shadow-[0_14px_35px_rgba(24,53,40,0.22)] transition duration-500 group-hover:-translate-y-1 group-hover:bg-[#7f1d1d]">
                      <Icon size={22} strokeWidth={2.4} />
                    </div>

                    <div>
                      <h3 className="text-base font-extrabold tracking-[-0.02em] text-[#183528]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#426252]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}