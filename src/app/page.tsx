import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section - Full viewport presence */}
      <section className="px-6 md:px-8 pt-12 md:pt-20 pb-24 md:pb-32">
        <div className="max-w-2xl mx-auto">
          <Image
            src="/images/simeon-pfp.png"
            alt="Simeon Udoh"
            width={88}
            height={88}
            className="rounded-full mb-8 ring-4 ring-neutral-100"
          />
          <h1 className="font-heading text-5xl md:text-7xl tracking-tight text-neutral-900 mb-6">
            Simeon Udoh
          </h1>
          <p className="text-xl md:text-2xl text-neutral-500 mb-6 font-medium">
            Developer, builder, and curious explorer.
          </p>
          <p className="text-lg text-neutral-600 leading-relaxed max-w-lg">
            I build things on the web, trade crypto, and think about how
            technology shapes the way we live. Right now, I'm focused on
            learning deeply and sharing what I discover along the way.
          </p>
        </div>
      </section>

      {/* Exploring Section - Subtle background shift */}
      <section className="px-6 md:px-8 py-20 md:py-24 bg-neutral-50/70">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-sm font-semibold text-accent-600 uppercase tracking-wide mb-3">
            Currently Exploring
          </h2>
          <h3 className="font-heading text-2xl md:text-3xl tracking-tight text-neutral-900 mb-6">
            Building in public, one project at a time
          </h3>
          <div className="space-y-4 max-w-xl">
            <p className="text-neutral-600 leading-relaxed">
              I'm a computer science graduate who spends free time building small
              practice projects—nothing groundbreaking, just things that help me
              learn. I'm interested in{" "}
              <span className="text-neutral-900 font-medium">web development</span>,{" "}
              <span className="text-neutral-900 font-medium">DeFi protocols</span>, and the
              intersection of gaming and technology.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              I also write from time to time. Mostly about gaming culture and
              DeFi ideas that catch my attention. The goal isn't to be an expert.
              It's to stay curious, build in public, and share insights as I go.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Primary CTA, visually distinct */}
      <section className="px-6 md:px-8 py-20 md:py-24">
        <div className="max-w-2xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 md:p-10">
            <div className="relative z-10">
              <h2 className="font-heading text-sm font-semibold text-accent-400 uppercase tracking-wide mb-3">
                Newsletter
              </h2>
              <h3 className="font-heading text-2xl md:text-3xl tracking-tight text-white mb-3">
                Join my weekly notes
              </h3>
              <p className="text-neutral-400 mb-8 max-w-md">
                I share thoughts on building, learning, and what I'm exploring each
                week. No spam, no fluff—just honest notes from someone figuring
                things out.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-neutral-900 font-semibold rounded-lg hover:bg-neutral-100 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
            {/* Subtle decorative element */}
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
