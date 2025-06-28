import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Terminal from "../components/Terminal";

/**
 * Hero Component
 * Main landing section with intro on left and terminal on right
 */
export default function Hero() {
  // Array of greetings in different languages
  const greetings = [
    "Hello",
    "こんにちは", // Japanese
    "Hola", // Spanish
    "What's up",
    "안녕하세요", // Korean
    "Hi there",
    "Bonjour", // French
    "Ciao", // Italian
  ];

  // State to track current greeting
  const [greetingIndex, setGreetingIndex] = useState(0);

  // Effect to cycle through greetings every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-gradient-to-t from-gray-800 via-teal-800/30  to-gray-900 "
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a2a2a2e_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      <div className="container mx-auto px-4 py-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            {/* Animated greeting text */}
            <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <motion.span
                key={greetingIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="block text-[#C68EFD]"
              >
                {greetings[greetingIndex]}
              </motion.span>
              <span className="block mt-2">I'm a </span>
              <span className="bg-gradient-to-r from-[#C68EFD] to-[#1DCD9F] bg-clip-text text-transparent">
                Frontend Developer
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I build modern, responsive, and performant web applications with
              cutting-edge technologies.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center justify-center px-6 py-3 rounded-md text-white bg-gradient-to-r from-[#C68EFD] to-[#1DCD9F] hover:from-[#b57fec] hover:to-[#19b88e] shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer"
              >
                View My Work
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-[#1DCD9F] text-[#1DCD9F] hover:bg-[#1DCD9F]/10 hover:shadow-md transition-all duration-300 ease-in-out cursor-pointer"
              >
                Contact Me
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side - Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Terminal />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          >
            <ArrowDown className="w-6 h-6 text-[#1DCD9F]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
