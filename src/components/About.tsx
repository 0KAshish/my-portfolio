import React from "react";

export default function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Git & GitHub",
    "Bootstrap",
  ];
  return (
    <section
      id="about"
      className="bg-white dark:bg-gray-900 py-20 px-6 sm:px-8 lg:px-16"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
          About <span className="text-blue-500">Me</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
          {" "}
          I’m a passionate{" "}
          <span className="font-semibold">Frontend Developer</span>
          who loves creating modern, responsive, and user-friendly web
          experiences. I enjoy turning complex ideas into smooth, functional,
          and visually appealing interfaces.
        </p>
      </div>
      {/*Skills area  */}
      <div className="max-w-5xl mx-auto mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition"
          >
            {skill}
          </span>
        ))}
      </div>
      {/* experience section */}
      <div className="max-w-3xl mx-auto mt-16 space-y-8">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
          Experience
        </h3>

        <div className="relative border-l-4 border-blue-500 pl-6">
          <div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
              Frontend Developer Intern — Innoblooms IT Services
            </h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Dec 2024 – Feb 2025
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Worked on building responsive UIs using React and Tailwind,
              improved user experience, and collaborated with backend teams.
            </p>
          </div>

          <div className="mt-8">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
              Web Developer — 6 Months Experience
            </h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              March 2025 – Till Now...
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Built websites with HTML, CSS, JavaScript, and learned version
              control with GitHub.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
