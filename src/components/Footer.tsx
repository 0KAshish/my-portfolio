import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Left */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-white">Ashish Kumar</h3>
          <p className="text-sm text-gray-400 mt-1">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Right */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://github.com/0KAshish"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/ashish-kumar-maurya-99626516b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/001Ashishkumar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
