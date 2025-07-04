import React from "react";

const Experience = () => {
  // Work experience data
  const experiences = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      duration: "2021 - Present",
      location: "San Francisco, CA",
      description: [
        "Led the development of a high-traffic e-commerce platform using React and Node.js",
        "Implemented CI/CD pipelines that reduced deployment time by 40%",
        "Mentored junior developers and conducted code reviews to ensure code quality",
        "Optimized database queries resulting in a 30% improvement in application performance",
      ],
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      duration: "2018 - 2021",
      location: "New York, NY",
      description: [
        "Developed and maintained multiple web applications using React, Node.js, and MongoDB",
        "Collaborated with UX/UI designers to implement responsive and accessible interfaces",
        "Integrated third-party APIs and services to enhance application functionality",
        "Participated in agile development processes, including daily stand-ups and sprint planning",
      ],
    },
    {
      id: 3,
      role: "Frontend Developer",
      company: "WebCraft Studios",
      duration: "2016 - 2018",
      location: "Boston, MA",
      description: [
        "Built responsive and interactive user interfaces using HTML, CSS, and JavaScript",
        "Worked with design team to translate mockups into functional web pages",
        "Implemented performance optimizations that improved page load times by 25%",
        "Contributed to the development of the company's component library",
      ],
    },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative border-l-2 border-gray-700 ml-3">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-12 ml-6"
          >
            {/* Timeline Node */}
            <span className="absolute flex items-center justify-center w-6 h-6 bg-gradient-to-r from-[#C68EFD] to-[#1DCD9F] rounded-full -left-3 ring-8 ring-gray-900">
              <Briefcase className="w-3 h-3 text-white" />
            </span>

            {/* Experience Card */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-xl font-bold mb-1 text-[#1DCD9F]">
                {exp.role}
              </h3>
              <h4 className="text-lg font-semibold text-[#C68EFD] mb-3">
                {exp.company}
              </h4>

              {/* Duration and Location */}
              <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1 text-[#1DCD9F]" />
                  {exp.duration}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1 text-[#1DCD9F]" />
                  {exp.location}
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-gradient-to-r from-[#C68EFD] to-[#1DCD9F] rounded-full mt-1.5 mr-2"></span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
