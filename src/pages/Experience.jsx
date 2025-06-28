import { motion } from "framer-motion";

import Education from "../components/Education";

/**
 * Experience Component
 * Displays work history and education in a timeline format
 */
export default function Experience() {
 
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#C68EFD] to-[#1DCD9F] mx-auto"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            My professional journey and the companies I've had the pleasure to
            work with.
          </p>
        </motion.div>

        {/* Experience Timeline */}

        {/* Education Section */}
        <Education />
      </div>
    </section>
  );
}
