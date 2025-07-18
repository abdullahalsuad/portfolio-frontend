// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import Form from "../components/Form";
import GlassIcons from "../components/UI/GlassIcons";

export default function Contact() {
  // update with your own icons and colors
  const items = [
    {
      icon: <Github />,
      color: "purple",
      label: "Github",
      href: "https://github.com/abdullahalsuad",
    },
    {
      icon: <Linkedin />,
      color: "blue",
      label: "LInkedin",
      href: "https://www.linkedin.com/in/abdullahalsuad",
    },
    {
      icon: <Twitter />,
      color: "black",
      label: "Twitter",
      href: "https://x.com/abdullahalsuad",
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-t from-gray-800 via-purple-600/30  to-gray-900 text-white"
      id="contact"
    >
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

      <div className="lg:w-4/12 px-2  mx-auto ">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Form />
        </motion.div>
      </div>

      {/* Social Media Links */}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10 text-center"
      >
        <div className="flex space-x-4 justify-center">
          {" "}
          {/*   text-[#1DCD9F] bg-[#006A71] */}
          <GlassIcons items={items} className="custom-class cursor-pointer" />
        </div>
      </motion.div>
    </section>
  );
}
