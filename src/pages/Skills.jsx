import { motion } from "framer-motion";
import {
  Database,
  Globe,
  Server,
  Smartphone,
  Layers,
  GitBranch,
} from "lucide-react";
import SpotlightCard from "../components/UI/SpotlightCard";

/**
 * Skills Component
 * Displays technical skills and proficiency levels
 */
export default function Skills() {
  // Skills data organized by category
  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="w-6 h-6 text-[#C68EFD]" />,
      items: [
        "React",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend",
      icon: <Server className="w-6 h-6 text-[#C68EFD]" />,
      items: ["Node.js", "Express", "Python", "Django", "RESTful APIs"],
    },
    {
      category: "Database",
      icon: <Database className="w-6 h-6 text-[#C68EFD]" />,
      items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"],
    },
    // {
    //   category: "Mobile",
    //   icon: <Smartphone className="w-6 h-6 text-[#C68EFD]" />,
    //   items: ["React Native", "Flutter", "iOS", "Android"],
    // },
    // {
    //   category: "DevOps",
    //   icon: <GitBranch className="w-6 h-6 text-[#C68EFD]" />,
    //   items: ["Git", "GitHub", "Docker", "CI/CD", "AWS", "Vercel"],
    // },
    // {
    //   category: "Other",
    //   icon: <Layers className="w-6 h-6 text-[#C68EFD]" />,
    //   items: ["Agile", "Scrum", "UI/UX Design", "Testing", "Problem Solving"],
    // },
  ];

  // Animation variants for container and items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#C68EFD] to-[#1DCD9F] mx-auto"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            I've worked with a variety of technologies and frameworks to create
            robust and scalable applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants} className="  ">
              <SpotlightCard
                className="custom-spotlight-card h-44 cursor-pointer"
                spotlightColor="rgba(0, 105, 255, 0.2)"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-[#006A71]/20 rounded-lg mr-4">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1DCD9F]">
                    {skill.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
