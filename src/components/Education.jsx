// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mt-16"
    >
      <div className="max-w-xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
        <h4 className="text-xl font-bold mb-1 text-[#1DCD9F]">
          Higher Secondary Certificate
        </h4>
        <p className="text-[#C68EFD] mb-2">Uttara High School And Collage</p>
        <div className="flex justify-center gap-4 text-sm text-gray-400 mb-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1 text-[#1DCD9F]" />
            2021 - 2023
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1 text-[#1DCD9F]" />
            Dhaka,Uttara
          </div>
        </div>
        <p className="text-gray-300"></p>
      </div>
    </motion.div>
  );
};

export default Education;
