import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import Form from "../components/Form";
import GlassIcons from "../components/UI/GlassIcons";

export default function Contact() {
  // update with your own icons and colors
  const items = [
    { icon: <Github />, color: "purple", label: "Github" },
    { icon: <Linkedin />, color: "blue", label: "LInkedin" },
    { icon: <Twitter />, color: "black", label: "Twitter" },
  ];

  return (
    <section className="py-20 bg-gray-800 text-white" id="contact">
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
