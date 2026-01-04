import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Simeon Udoh",
  description: "Learn more about Simeon Udoh—background, interests, and what drives me.",
};

export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="px-6 md:px-8 pt-12 md:pt-20 pb-16 md:pb-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl tracking-tight text-neutral-900 mb-4">
            About Me
          </h1>
          <p className="text-lg text-neutral-500 max-w-lg">
            A little context on who I am and how I think.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 md:px-8 pb-20 md:pb-24">
        <article className="max-w-2xl mx-auto">
          {/* Background */}
          <div className="mb-16">
            <h2 className="font-heading text-sm font-semibold text-accent-600 uppercase tracking-wide mb-3">
              Background
            </h2>
            <div className="space-y-4 max-w-xl">
              <p className="text-neutral-600 leading-relaxed">
                I'm Simeon—a computer science graduate with a genuine interest in
                how things work. I didn't start coding because I had some grand
                vision. I started because I was curious, and that curiosity hasn't
                gone away.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                These days, I spend my time building small web projects, exploring
                decentralized finance, and thinking about the technology that powers
                our digital lives. I'm not trying to be the smartest person in the
                room. I just want to keep learning and building.
              </p>
            </div>
          </div>

          {/* Practice Projects */}
          <div className="mb-16">
            <h2 className="font-heading text-sm font-semibold text-accent-600 uppercase tracking-wide mb-3">
              Why I Build
            </h2>
            <div className="space-y-4 max-w-xl">
              <p className="text-neutral-600 leading-relaxed">
                I believe you learn best by doing. So I build things—small tools,
                experiments, half-finished ideas. Not everything becomes a polished
                product, and that's fine. The point is to understand how things work
                and push my skills forward.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Each project teaches me something new. Sometimes it's a framework,
                sometimes it's a design pattern, sometimes it's just patience. The
                practice compounds over time.
              </p>
            </div>
          </div>

          {/* Gaming */}
          <div className="mb-16 p-6 md:p-8 rounded-2xl bg-neutral-50/70 border border-neutral-100">
            <h2 className="font-heading text-sm font-semibold text-neutral-400 uppercase tracking-wide mb-3">
              Gaming Background
            </h2>
            <h3 className="font-heading text-xl md:text-2xl tracking-tight text-neutral-900 mb-4">
              How gaming shapes my thinking
            </h3>
            <div className="space-y-4 max-w-xl">
              <p className="text-neutral-600 leading-relaxed">
                I'm a hardcore gamer. Not just someone who plays casually—I've spent
                serious time in competitive games, learning systems, optimizing
                strategies, and understanding what makes games tick.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Gaming taught me how to think systematically. You learn to read
                situations quickly, adapt under pressure, and find efficient paths
                to goals. These skills translate directly into how I approach
                coding and problem-solving.
              </p>
            </div>
          </div>

          {/* Writing */}
          <div className="mb-16">
            <h2 className="font-heading text-sm font-semibold text-accent-600 uppercase tracking-wide mb-3">
              Writing
            </h2>
            <div className="space-y-4 max-w-xl">
              <p className="text-neutral-600 leading-relaxed">
                I write about what interests me—mostly gaming culture and DeFi
                concepts. I'm not a professional writer or a finance expert. I'm
                just someone trying to make sense of things and share what I find
                along the way.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Writing forces me to think clearly. If I can't explain something, I
                probably don't understand it well enough. So I write to learn, and I
                share in case it helps someone else.
              </p>
            </div>
          </div>

          {/* Current Focus */}
          <div className="mb-16">
            <h2 className="font-heading text-sm font-semibold text-accent-600 uppercase tracking-wide mb-3">
              Current Focus
            </h2>
            <div className="space-y-4 max-w-xl">
              <p className="text-neutral-600 leading-relaxed">
                Right now, I'm focused on three things: getting better at web
                development, understanding DeFi protocols more deeply, and building
                in public through this site and my newsletter.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                I trade crypto and explore new protocols regularly. I'm not
                interested in hype—I want to understand how these systems actually
                work and what makes them useful.
              </p>
            </div>
          </div>

          {/* Philosophy */}
          <div className="p-6 md:p-8 rounded-2xl bg-neutral-900 text-white">
            <h2 className="font-heading text-sm font-semibold text-neutral-400 uppercase tracking-wide mb-3">
              Philosophy
            </h2>
            <h3 className="font-heading text-xl md:text-2xl tracking-tight text-white mb-4">
              Learn. Build. Share.
            </h3>
            <div className="space-y-4 max-w-xl">
              <p className="text-neutral-300 leading-relaxed">
                My approach is simple: learn something, build something, share what
                I learned. It's not a formula for overnight success. It's a way to
                stay engaged and grow steadily over time.
              </p>
              <p className="text-neutral-300 leading-relaxed">
                I don't have all the answers. I'm figuring things out like everyone
                else. But I think there's value in showing the process—the
                experiments, the mistakes, the small wins. That's what this site is
                for.
              </p>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
