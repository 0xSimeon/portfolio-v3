import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Simeon Udoh",
  description: "A collection of practice projects and experiments by Simeon Udoh.",
};

type ProjectStatus = "experiment" | "ongoing" | "archived";

interface Project {
  name: string;
  description: string;
  status: ProjectStatus;
}

const projects: Project[] = [
  {
    name: "Portfolio Site",
    description:
      "This website. A minimal personal site built with Next.js and Tailwind CSS. Focused on clean design and good defaults.",
    status: "ongoing",
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

const statusStyles: Record<ProjectStatus, string> = {
  experiment: "bg-accent-50 text-accent-700",
  ongoing: "bg-green-50 text-green-700",
  archived: "bg-neutral-100 text-neutral-600",
};

const statusLabels: Record<ProjectStatus, string> = {
  experiment: "Experiment",
  ongoing: "Ongoing",
  archived: "Archived",
};

export default function Projects() {
  return (
    <div className="px-6 md:px-8 py-16 md:py-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
          Projects
        </h1>
        <p className="text-lg text-neutral-600 mb-12 max-w-lg">
          A collection of practice projects and experiments. Some are ongoing,
          some are just ideas I explored, and some have been archived. The goal
          is always learning.
        </p>

        <div className="space-y-5">
          {projects.map((project) => (
            <article
              key={project.name}
              className="border border-neutral-200 rounded-xl p-6 hover:border-neutral-300 hover:shadow-sm transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <h2 className="font-heading text-xl font-bold text-neutral-900">
                  {project.name}
                </h2>
                <span
                  className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                    statusStyles[project.status]
                  }`}
                >
                  {statusLabels[project.status]}
                </span>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
