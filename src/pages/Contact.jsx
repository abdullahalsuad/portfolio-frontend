import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import Form from "../components/Form";

export default function Contact() {
  return (
    <section className="py-20 bg-gray-800 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        {/* Gradient line below the title */}
        <div className="h-1 w-20 bg-gradient-to-r from-[#C68EFD] to-[#1DCD9F] mx-auto"></div>
        <p className="text-gray-400 max-w-2xl mx-auto mt-6">
          Have a project in mind or want to discuss potential opportunities?
          Feel free to reach out!
        </p>
      </motion.div>

      <div className="w-4/12 mx-auto ">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-[#C68EFD] text-center">
            Send a Message
          </h3>
          <Form />
        </motion.div>
      </div>

      {/* Social Media Links */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Adjusted animation for vertical entry
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }} // Added a slight delay for staggered animation
        className="mt-10 text-center"
      >
        <h3 className="text-2xl font-bold mb-6 text-[#C68EFD]">Follow Me</h3>
        <div className="flex space-x-4 justify-center">
          {" "}
          {/* justify-center to center the icons */}
          <a
            href="#"
            className="p-3 bg-[#006A71]/20 rounded-lg hover:bg-[#006A71]/40 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 text-[#1DCD9F]" />
          </a>
          <a
            href="#"
            className="p-3 bg-[#006A71]/20 rounded-lg hover:bg-[#006A71]/40 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-[#1DCD9F]" />
          </a>
          <a
            href="#"
            className="p-3 bg-[#006A71]/20 rounded-lg hover:bg-[#006A71]/40 transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-6 h-6 text-[#1DCD9F]" />
          </a>
          <a
            href="#"
            className="p-3 bg-[#006A71]/20 rounded-lg hover:bg-[#006A71]/40 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6 text-[#1DCD9F]" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
