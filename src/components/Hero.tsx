import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between py-20">
        
        {/* Left Content */}
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
            Hi, I’m <span className="text-blue-500">Ashish</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
            A passionate Frontend Developer building modern and responsive web apps using 
            <span className="font-medium"> Next.js & Tailwind CSS</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/projects"
              className="px-6 py-3 rounded-lg bg-blue-500 text-white font-medium hover:opacity-90 transition"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg border border-blue-500 text-blue-500 font-medium hover:bg-blue-500 hover:text-white transition"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right Content: Hero Image */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="https://avatars.githubusercontent.com/u/79804607?v=4"
            alt="Developer Illustration"
            className="w-80 md:w-[400px] drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
