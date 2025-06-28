import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

/**
 * Terminal Component
 * Displays personal information in a terminal-style interface
 */
export default function Terminal() {
  // Reference to terminal output for auto-scrolling
  const terminalRef = useRef(null);

  // State for terminal lines
  const [lines, setLines] = useState([]);

  // Personal information to display
  const personalInfo = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (123) 456-7890",
    location: "San Francisco, CA",
    hobbies: ["Coding", "Reading", "Hiking", "Photography", "Gaming"],
    github: "github.com/johndoe",
    linkedin: "linkedin.com/in/johndoe",
  };

  // Commands to execute
  const commands = [
    { command: "whoami", delay: 500 },
    { command: "get contact", delay: 2000 },
    { command: "list hobbies", delay: 3500 },
    { command: "get social", delay: 5000 },
  ];

  // Function to process commands and generate responses
  const processCommand = (cmd) => {
    switch (cmd) {
      case "whoami":
        return `> ${personalInfo.name} - Software Engineer`;
      case "get contact":
        return `> Email: ${personalInfo.email}\n> Phone: ${personalInfo.phone}\n> Location: ${personalInfo.location}`;
      case "list hobbies":
        return `> Hobbies:\n${personalInfo.hobbies
          .map((hobby) => `  - ${hobby}`)
          .join("\n")}`;
      case "get social":
        return `> GitHub: ${personalInfo.github}\n> LinkedIn: ${personalInfo.linkedin}`;
      default:
        return `> Command not found: ${cmd}`;
    }
  };

  // Effect to simulate typing commands and responses
  useEffect(() => {
    let mounted = true;

    const executeCommands = async () => {
      // Initial welcome message
      if (mounted) {
        setLines([
          { id: 0, text: "Welcome to Terminal", type: "system" },
          {
            id: 1,
            text: "Type a command or wait for auto-execution",
            type: "system",
          },
        ]);
      }

      // Execute each command with delay
      for (let i = 0; i < commands.length; i++) {
        if (!mounted) break;

        // Wait for the specified delay
        await new Promise((resolve) => setTimeout(resolve, commands[i].delay));

        if (!mounted) break;

        // Add the command to the terminal
        const commandId = Date.now();
        setLines((prev) => [
          ...prev,
          { id: commandId, text: commands[i].command, type: "command" },
        ]);

        // Small delay to simulate processing
        await new Promise((resolve) => setTimeout(resolve, 300));

        if (!mounted) break;

        // Add the response to the terminal
        const responseId = Date.now() + 1;
        const response = processCommand(commands[i].command);
        setLines((prev) => [
          ...prev,
          { id: responseId, text: response, type: "response" },
        ]);
      }
    };

    executeCommands();

    return () => {
      mounted = false;
    };
  }, []);

  // Effect to auto-scroll to bottom of terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <motion.div
      className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Terminal Header */}
      <div className="bg-gray-800 px-4 py-2 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="mx-auto text-sm text-gray-400 font-mono">
          user@portfolio ~
        </div>
      </div>

      {/* Terminal Body */}
      <div
        ref={terminalRef}
        className="bg-gray-900 p-4 font-mono text-sm h-80 overflow-y-auto"
      >
        {lines.map((line) => (
          <div
            key={line.id}
            className={`mb-2 ${line.type === "system" ? "text-gray-400" : ""}`}
          >
            {line.type === "command" && (
              <span className="text-[#C68EFD]">$ </span>
            )}
            {line.text.split("\n").map((text, i) => (
              <div
                key={i}
                className={`${
                  line.type === "command"
                    ? "text-[#1DCD9F]"
                    : line.type === "response"
                    ? "text-gray-300"
                    : ""
                }`}
              >
                {text}
              </div>
            ))}
          </div>
        ))}
        <div className="animate-pulse">
          <span className="text-[#C68EFD]">$ </span>
          <span className="w-2 h-5 bg-[#1DCD9F] inline-block"></span>
        </div>
      </div>
    </motion.div>
  );
}
