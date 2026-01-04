import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Simeon Udoh",
  description: "Learn more about Simeon Udoh—background, interests, and what drives me.",
};

export default function About() {
  return (
    <div className="px-6 md:px-8 py-16 md:py-24">
      <article className="max-w-2xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-neutral-900 mb-10">
          About Me
        </h1>

        {/* Background */}
        <section className="mb-14">
          <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4">
            Background
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
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
        </section>

        {/* Practice Projects */}
        <section className="mb-14">
          <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4">
            Why I Build Practice Projects
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
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
        </section>

        {/* Gaming */}
        <section className="mb-14">
          <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4">
            Gaming and How It Shapes My Thinking
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
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
        </section>

        {/* Writing */}
        <section className="mb-14">
          <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4">
            Writing About Gaming and DeFi
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
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
        </section>

        {/* Current Focus */}
        <section className="mb-14">
          <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4">
            What I'm Focused On
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            Right now, I'm focused on three things: getting better at web
            development, understanding DeFi protocols more deeply, and building
            in public through this site and my newsletter.
          </p>
          <p className="text-neutral-600 leading-relaxed">
            I trade crypto and explore new protocols regularly. I'm not
            interested in hype—I want to understand how these systems actually
            work and what makes them useful.
          </p>
        </section>

        {/* Philosophy */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4">
            Learning, Building, and Sharing
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            My approach is simple: learn something, build something, share what
            I learned. It's not a formula for overnight success. It's a way to
            stay engaged and grow steadily over time.
          </p>
          <p className="text-neutral-600 leading-relaxed">
            I don't have all the answers. I'm figuring things out like everyone
            else. But I think there's value in showing the process—the
            experiments, the mistakes, the small wins. That's what this site is
            for.
          </p>
        </section>
      </article>
    </div>
  );
}
