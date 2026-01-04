import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | Simeon Udoh",
  description: "A collection of practice projects and experiments by Simeon Udoh.",
};

type ProjectStatus = "experiment" | "ongoing" | "archived";

interface Project {
  name: string;
  description: string;
  status: ProjectStatus;
  featured?: boolean;
}

interface PastProject {
  name: string;
  description: string;
  tech: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    name: "Portfolio Site",
    description:
      "This website. A minimal personal site built with Next.js and Tailwind CSS. Focused on clean design and good defaults.",
    status: "ongoing",
    featured: true,
  },
  {
    name: "DeFi Dashboard",
    description:
      "A simple dashboard to track wallet positions across DeFi protocols. Built to learn about web3 integrations and data fetching patterns.",
    status: "experiment",
  },
  {
    name: "Game Stats Tracker",
    description:
      "A tool to log and analyze gaming sessions. Exploring data visualization and local storage patterns.",
    status: "experiment",
  },
  {
    name: "Newsletter Template",
    description:
      "A custom email template system for my weekly notes. Focused on clean typography and consistent rendering across email clients.",
    status: "archived",
  },
  {
    name: "Markdown Blog Engine",
    description:
      "A lightweight blog system using markdown files. Good practice for file-based content and static generation.",
    status: "archived",
  },
];

const pastProjects: PastProject[] = [
  {
    name: "CalIT",
    description: "A calculator web app. One of my first JavaScript projects.",
    tech: "HTML, CSS, JavaScript",
    liveUrl: "https://calculatorjs-app.netlify.app/",
    githubUrl: "https://github.com/simeon4real/Calculator",
  },
  {
    name: "JQuizy",
    description: "A fun quiz app to test JavaScript knowledge.",
    tech: "HTML, CSS, JavaScript",
    liveUrl: "https://javascript-quiz-game.netlify.app/",
    githubUrl: "https://github.com/simeon4real/Javascript-quiz",
  },
  {
    name: "Portfolio v2",
    description: "My previous portfolio site. Built when I was learning Vue.",
    tech: "Vue, Tailwind CSS, Sass",
    liveUrl: "https://simicodev2.netlify.app/",
    githubUrl: "https://github.com/simeon4real/my-website",
  },
  {
    name: "Shortly",
    description: "An API-based URL shortener.",
    tech: "Vue, Sass, REST API",
    githubUrl: "https://github.com/simeon4real/Shortly",
  },
  {
    name: "WeBlog",
    description: "An API-based blog site with routing.",
    tech: "Vue, Tailwind CSS, Vue Router",
    githubUrl: "https://github.com/simeon4real/WeBlog",
  },
];

const statusConfig: Record<ProjectStatus, { bg: string; text: string; dot: string }> = {
  ongoing: {
    bg: "bg-green-50",
    text: "text-green-700",
    dot: "bg-green-500",
  },
  experiment: {
    bg: "bg-accent-50",
    text: "text-accent-700",
    dot: "bg-accent-500",
  },
  archived: {
    bg: "bg-neutral-100",
    text: "text-neutral-500",
    dot: "bg-neutral-400",
  },
};

const statusLabels: Record<ProjectStatus, string> = {
  experiment: "Experiment",
  ongoing: "Active",
  archived: "Archived",
};

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div>
      {/* Header */}
      <section className="px-6 md:px-8 pt-12 md:pt-20 pb-16 md:pb-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl tracking-tight text-neutral-900 mb-4">
            Projects
          </h1>
          <p className="text-lg text-neutral-500 max-w-lg">
            A collection of practice projects and experiments. Some are ongoing,
            some are just ideas I explored, and some have been archived.
          </p>
        </div>
      </section>

      {/* Featured Project */}
      {featuredProjects.length > 0 && (
        <section className="px-6 md:px-8 pb-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading text-sm font-semibold text-neutral-400 uppercase tracking-wide mb-4">
              Featured
            </h2>
            {featuredProjects.map((project) => (
              <article
                key={project.name}
                className="relative rounded-2xl bg-gradient-to-br from-neutral-50 to-neutral-100/50 border border-neutral-200 p-6 md:p-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <h3 className="font-heading text-xl md:text-2xl tracking-tight text-neutral-900">
                    {project.name}
                  </h3>
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full ${
                      statusConfig[project.status].bg
                    } ${statusConfig[project.status].text}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${statusConfig[project.status].dot}`} />
                    {statusLabels[project.status]}
                  </span>
                </div>
                <p className="text-neutral-600 leading-relaxed">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Other Projects */}
      <section className="px-6 md:px-8 py-12 md:py-16 bg-neutral-50/50">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-sm font-semibold text-neutral-400 uppercase tracking-wide mb-6">
            All Projects
          </h2>
          <div className="space-y-4">
            {otherProjects.map((project) => (
              <article
                key={project.name}
                className="group bg-white rounded-xl border border-neutral-200 p-5 hover:border-neutral-300 hover:shadow-sm transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <h3 className="font-heading text-lg tracking-tight text-neutral-900 group-hover:text-neutral-700 transition-colors">
                    {project.name}
                  </h3>
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-medium rounded-full ${
                      statusConfig[project.status].bg
                    } ${statusConfig[project.status].text}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${statusConfig[project.status].dot}`} />
                    {statusLabels[project.status]}
                  </span>
                </div>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Past Projects */}
      <section className="px-6 md:px-8 py-12 md:py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-sm font-semibold text-neutral-400 uppercase tracking-wide mb-2">
            Past Projects
          </h2>
          <p className="text-neutral-500 text-sm mb-6">
            Earlier work from when I was learning frontend development.
          </p>
          <div className="space-y-3">
            {pastProjects.map((project) => (
              <article
                key={project.name}
                className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-4 border-b border-neutral-100 last:border-0"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-base tracking-tight text-neutral-900 mb-1">
                    {project.name}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-1">
                    {project.description}
                  </p>
                  <p className="text-neutral-400 text-xs">
                    {project.tech}
                  </p>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-accent-600 transition-colors"
                    >
                      Live
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-neutral-900 transition-colors"
                    >
                      GitHub
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
