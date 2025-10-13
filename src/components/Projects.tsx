import Link from "next/link";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built using Next.js and Tailwind CSS to showcase my skills, experience, and projects.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    demo: "#",
    github: "https://github.com/0KAshish",
    image: "/projects/portfolio.png",
  },
  {
    title: "Blog Platform",
    description:
      "A dynamic blog website with categories, search, and markdown support — perfect for content creators.",
    tech: ["React", "Firebase", "Tailwind"],
    demo: "#",
    github: "https://github.com/0KAshish",
    image: "/projects/blog.png",
  },
  {
    title: "Task Manager App",
    description:
      "A Trello-like app with drag-and-drop tasks, built with React DnD and persistent local storage.",
    tech: ["React", "Tailwind", "LocalStorage"],
    demo: "#",
    github: "https://github.com/0KAshish",
    image: "/projects/taskmanager.png",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-gray-50 dark:bg-gray-900 py-20 px-6 sm:px-8 lg:px-16"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
          My <span className="text-brand">Projects</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed mb-12">
          Here are some of the projects I’ve worked on recently. Each one
          reflects my focus on clean design, performance, and user experience.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <Link
                    href={project.demo}
                    className="px-4 py-2 bg-brand text-white rounded-lg text-sm font-medium hover:opacity-90 transition"
                  >
                    Live Demo
                  </Link>
                  <Link
                    href={project.github}
                    className="px-4 py-2 border border-brand text-brand rounded-lg text-sm font-medium hover:bg-brand hover:text-white transition"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
