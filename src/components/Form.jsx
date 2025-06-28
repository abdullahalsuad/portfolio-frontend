import { Send } from "lucide-react";
const Form = () => {
  return (
    <div className=" bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 border border-gray-700">
      {/* Header */}
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        Contact Us
      </h2>
      <p className="text-gray-400 text-center mb-8">
        Have a question or want to work together? Send us a message!
      </p>

      {/* form */}
      <form className="space-y-6 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name Input */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-medium text-gray-300 block"
            >
              Your Name
            </label>
            <input
              id="name"
              name="name"
              placeholder="John Doe"
              required
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-gray-200 placeholder-gray-500
                           focus:outline-none focus:ring-2 focus:ring-[#1DCD9F] focus:border-transparent transition duration-200 ease-in-out"
            />
          </div>
          {/* Email Input */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-300 block"
            >
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              required
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-gray-200 placeholder-gray-500
                           focus:outline-none focus:ring-2 focus:ring-[#1DCD9F] focus:border-transparent transition duration-200 ease-in-out"
            />
          </div>
        </div>

        {/* Subject Input */}
        <div className="space-y-2">
          <label
            htmlFor="subject"
            className="text-sm font-medium text-gray-300 block"
          >
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            placeholder="Project Inquiry"
            required
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-gray-200 placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-[#1DCD9F] focus:border-transparent transition duration-200 ease-in-out"
          />
        </div>

        {/* Message Textarea */}
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-gray-300 block"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Hello, I'd like to talk about..."
            rows={5}
            required
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-gray-200 placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-[#1DCD9F] focus:border-transparent transition duration-200 ease-in-out resize-y"
          ></textarea>
        </div>

        {/* Submit button with gradient and hover effects */}
        <button
          type="submit"
          className="w-full py-3 px-6 rounded-lg font-semibold text-white transition duration-300 ease-in-out bg-gradient-to-r from-[#C68EFD] to-[#1DCD9F] hover:from-[#b57fec] hover:to-[#19b88e] transform hover:scale-105 active:scale-95 flex items-center justify-center "
        >
          <span className="flex items-center">
            <Send className="w-4 h-4 mr-2" /> Send Message
          </span>
        </button>
      </form>
    </div>
  );
};

export default Form;
