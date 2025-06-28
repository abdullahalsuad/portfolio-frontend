// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import AboutImg from "../assets/img.jpeg";

import { FileText } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#C68EFD] to-[#1DCD9F] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative h-[400px] w-full md:w-[400px] mx-auto overflow-hidden rounded-lg shadow-xl">
              <img
                src={AboutImg}
                alt="Profile"
                width={400}
                height={400}
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#006A71]/30 to-[#C68EFD]/30"></div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-[#1DCD9F]">
              Frontend Developer
            </h3>
            <p className="text-gray-300 mb-6">
              Hi, I’m a Front-End Web Developer from Bangladesh with a passion
              for coding and continuous learning. I specialize in React.js and
              have experience building both static and dynamic websites using
              HTML5, CSS3, JavaScript (ES6), and frameworks like Next.js,
              Node.js, and Express. I also enjoy working with Python and C++ in
              my spare time.
            </p>
            <p className="text-gray-300 mb-6">
              Beyond coding, I’m committed to personal and professional growth.
              I believe in learning by doing, embracing challenges, and
              improving a little each day. Let’s connect and create something
              impactful together.
            </p>

            {/* Personal Info Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-semibold mb-2 text-[#C68EFD]">Name:</h4>
                <p className="text-gray-300">Abdullah Al Suad</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-[#C68EFD]">Role:</h4>
                <p className="text-gray-300">Frontend Developer</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-[#C68EFD]">Location:</h4>
                <p className="text-gray-300">Bangladesh</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-[#C68EFD]">
                  Availability:
                </h4>
                <p className="text-gray-300">Full-time</p>
              </div>
            </div>

            {/* Resume Button */}
            <button className="flex items-center gap-2 px-4 py-2 bg-[#006A71] hover:bg-[#169976] text-white rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer">
              <FileText className="w-4 h-4" />
              Download Resume
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
