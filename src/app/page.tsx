import Image from "next/image";

export default function Home() {
  return (
    <div className="px-6 md:px-8 py-16 md:py-24">
      <div className="max-w-2xl mx-auto">
        {/* Hero Section */}
        <section className="mb-20">
          <Image
            src="/images/simeon-pfp.png"
            alt="Simeon Udoh"
            width={80}
            height={80}
            className="rounded-full mb-6"
          />
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
            Simeon Udoh
          </h1>
          <p className="text-2xl md:text-3xl text-neutral-600 mb-8 font-medium">
            Developer, builder, and curious explorer.
          </p>
          <p className="text-lg text-neutral-600 leading-relaxed max-w-xl">
            I build things on the web, trade crypto, and think about how
            technology shapes the way we live. Right now, I'm focused on
            learning deeply and sharing what I discover along the way.
          </p>
        </section>

        {/* Exploring Section - Carded */}
        <section className="mb-20">
          <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-8 hover:border-neutral-300 hover:shadow-sm transition-all">
            <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-5">
              What I'm Exploring
            </h2>
            <div className="space-y-4 max-w-xl">
              <p className="text-neutral-600 leading-relaxed">
                I'm a computer science graduate who spends free time building small
                practice projects—nothing groundbreaking, just things that help me
                learn. I'm interested in{" "}
                <span className="text-accent-600 font-medium">web development</span>,{" "}
                <span className="text-accent-600 font-medium">DeFi protocols</span>, and the
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

        {/* Newsletter Section */}
        <section>
          <div className="border border-neutral-200 rounded-xl p-8 hover:border-neutral-300 hover:shadow-sm transition-all">
            <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-2">
              Join my weekly notes
            </h2>
            <p className="text-neutral-600 mb-6 max-w-lg">
              I share thoughts on building, learning, and what I'm exploring each
              week. No spam, no fluff—just honest notes from someone figuring
              things out.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="you@example.com"
                className="flex-1 px-4 py-3 rounded-lg border border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-shadow"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent-600 text-white font-medium rounded-lg hover:bg-accent-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
