import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ExternalLink, Github, Code } from "lucide-react";

import Demo1 from "../assets/demo1.png";
import Demo2 from "../assets/demo2.png";
import Demo3 from "../assets/demo3.png";
import Demo4 from "../assets/demo4.png";
import Demo5 from "../assets/demo5.png";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Frontend", "Backend", "Full Stack"];

  // Project data
  const projects = [
    {
      id: 1,
      title: "Knowledge sharing platform",
      description:
        "Publish articles, explore trending topics, connect with top contributors, and grow your academic network—all in a beautiful, fast, and responsive app.",
      image: Demo1,
      tags: [
        "React",
        "Axios",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Express",
        "Mongoose",
      ],
      demoLink: "https://brain-wave-client-theta.vercel.app",
      codeLink: "https://github.com/abdullahalsuad/BrainWave-Client",
      category: "Full Stack",
    },
    {
      id: 2,
      title: "HobbyHub",
      description:
        "HobbyHub is a vibrant, responsive web application designed to connect people through shared hobbies and interests. HobbyHub helps you find or create groups.",
      image: Demo2,
      tags: [
        "React",
        "Axios",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Express",
        "Mongoose",
      ],
      demoLink: "https://jhinku-hobbyhub.vercel.app/",
      codeLink: "https://github.com/abdullahalsuad/Jhinku-hobbyhub-client",
      category: "Full Stack",
    },
    {
      id: 3,
      title: "Brain Wave Server",
      description:
        "BrainWave Server powers a modern article publishing platform for tech creators and enthusiasts. It provides secure, scalable APIs for managing articles, likes, comments.",
      image: Demo3,
      tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
      demoLink: "https://brain-wave-server.vercel.app",
      codeLink: "https://github.com/abdullahalsuad/BrainWave-Server",
      category: "Backend",
    },
    {
      id: 4,
      title: "Crypto Daddy",
      description:
        "CryptoDaddy is a cryptocurrency tracking platform that provides real-time data on prices, market caps, and trading volumes for major cryptocurrencies like Bitcoin, Ethereum.",
      image: Demo4,
      tags: ["React", "Axios", "Tailwind CSS"],
      demoLink: "https://cryptodaddy.netlify.app/",
      codeLink: "https://github.com/abdullahalsuad/CryptoDaddy",
      category: "Frontend",
    },
    {
      id: 5,
      title: "Flip The Galaxy",
      description:
        "Flip The Galaxy is a React-based web game. It features a space theme, a grid of rocket cards. Goal seems to involve flipping or matching cards in some way. Short on details.",
      image: Demo5,
      tags: ["React", "Tailwind CSS"],
      demoLink: "https://flip-the-galaxy.netlify.app/ ",
      codeLink: "https://github.com/abdullahalsuad/memory-game",
      category: "Frontend",
    },
  ];

  // Filter projects based on selected category
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container px-4 mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">My Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#C68EFD] to-[#1DCD9F] mx-auto"></div>
          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Here are some of my recent projects that showcase my skills and
            expertise.
          </p>
        </motion.div>

        {/* Category Filter buttons */}
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full font-medium transition duration-200 cursor-pointer
          ${
            filter === category
              ? "bg-gradient-to-r from-[#C68EFD] to-[#1DCD9F] text-white shadow-md"
              : "border border-[#006A71] text-[#1DCD9F] hover:bg-[#1DCD9F] hover:text-white"
          }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="overflow-hidden bg-gray-900 rounded-lg border border-gray-700 shadow-lg transition-shadow hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              {/* Project Image */}
              <div className="overflow-hidden relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                />
                {/* Hover Overlay with Links */}
                <div className="flex absolute inset-0 items-end bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-300 from-black/60 hover:opacity-100">
                  <div className="flex justify-between p-4 w-full">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      className="text-white hover:text-[#1DCD9F] transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      className="text-white hover:text-[#C68EFD] transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-[#1DCD9F]">
                    {project.title}
                  </h3>
                  <span className="text-xs px-2 py-1 bg-[#006A71]/30 rounded-full text-[#1DCD9F]">
                    {project.category}
                  </span>
                </div>
                <p className="mb-4 text-gray-400">{project.description}</p>

                {/* Project Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-[#C68EFD]/10 text-[#C68EFD] rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex justify-between py-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    className="flex items-center gap-1 text-[#1DCD9F] px-3 py-1 rounded text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    className="flex items-center gap-1  text-[#1DCD9F] px-3 py-1 rounded text-sm"
                  >
                    <Code className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/abdullahalsuad"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-[#C68EFD] to-[#1DCD9F] hover:from-[#b57fec] hover:to-[#19b88e] transition-all duration-200 shadow-lg"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
