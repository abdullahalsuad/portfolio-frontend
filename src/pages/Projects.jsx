"use client";

import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import { ExternalLink, Github, Code } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Frontend", "Backend", "Full Stack"];

  // Project data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "#",
      codeLink: "#",
      category: "Full Stack",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Firebase", "Tailwind CSS"],
      demoLink: "#",
      codeLink: "#",
      category: "Frontend",
    },
    {
      id: 3,
      title: "Finance Dashboard",
      description:
        "An interactive dashboard for tracking financial data with advanced filtering and visualization.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "D3.js", "Express", "PostgreSQL"],
      demoLink: "#",
      codeLink: "#",
      category: "Full Stack",
    },
    {
      id: 4,
      title: "Social Media API",
      description:
        "A RESTful API for a social media platform with user authentication, posts, comments, and likes.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Node.js", "Express", "MongoDB", "JWT"],
      demoLink: "#",
      codeLink: "#",
      category: "Backend",
    },
    {
      id: 5,
      title: "Weather App",
      description:
        "A weather application that provides real-time weather data and forecasts for locations worldwide.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "OpenWeather API", "Tailwind CSS"],
      demoLink: "#",
      codeLink: "#",
      category: "Frontend",
    },
    {
      id: 6,
      title: "Inventory Management System",
      description:
        "A comprehensive inventory management system for tracking products, orders, and suppliers.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "MySQL", "Docker"],
      demoLink: "#",
      codeLink: "#",
      category: "Full Stack",
    },
  ];

  // Filter projects based on selected category
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#C68EFD] to-[#1DCD9F] mx-auto"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {/* Hover Overlay with Links */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full flex justify-between">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#1DCD9F] transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#C68EFD] transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-[#1DCD9F]">
                    {project.title}
                  </h3>
                  <span className="text-xs px-2 py-1 bg-[#006A71]/30 rounded-full text-[#1DCD9F]">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>

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
                <div className="flex justify-between">
                  <button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1 border-[#006A71] text-[#1DCD9F]"
                    asChild
                  >
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </button>
                  <button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1 border-[#006A71] text-[#1DCD9F]"
                    asChild
                  >
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Code className="w-4 h-4" />
                      Code
                    </a>
                  </button>
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
          className="text-center mt-16"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
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
