import { useState, useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
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
  // State to hold the text currently being typed (for the animation)
  const [currentTypingText, setCurrentTypingText] = useState("");
  // State to track if typing animation is active
  const [isTyping, setIsTyping] = useState(false);

  // Personal information to display (simplified)
  const personalInfo = {
    name: "Abdullah Al Suad",
    role: "Frontend Developer",
    techSkills: ["JavaScript", "React", "HTML", "CSS", "Tailwind CSS", "Git"],
  };

  // Commands to execute
  const commands = [
    { command: "whoami", delay: 500 },
    { command: "skills", delay: 2000 },
  ];

  // Function to process commands and generate responses
  const processCommand = (cmd) => {
    switch (cmd) {
      case "whoami":
        return `> Name: ${personalInfo.name}\n> Role: ${personalInfo.role}`;
      case "skills":
        return `> Tech Skills:\n${personalInfo.techSkills
          .map((skill) => `  - ${skill}`)
          .join("\n")}`;
      default:
        return `> Command not found: ${cmd}`;
    }
  };

  // Function to simulate typing effect
  const typeText = async (text, type) => {
    setIsTyping(true);
    let typed = "";
    for (let i = 0; i < text.length; i++) {
      typed += text[i];
      // Split the text by newline to handle multiline responses
      const parts = typed.split("\n");
      setCurrentTypingText(parts); // Update state with characters for current line
      await new Promise((resolve) => setTimeout(resolve, 30)); // Typing speed
    }
    // Add the fully typed line(s) to the main lines state
    setLines((prev) => [...prev, { id: Date.now(), text: text, type: type }]);
    setCurrentTypingText(""); // Clear typing text for the next line
    setIsTyping(false);
  };

  // Effect to simulate typing commands and responses continuously
  useEffect(() => {
    let mounted = true;
    let timeoutId; // To store the timeout ID for cleanup

    const executeCommands = async () => {
      while (mounted) {
        // Clear any residual typing text before starting a new cycle
        setCurrentTypingText("");
        setIsTyping(false);

        // Initial welcome message
        if (mounted) {
          await new Promise((resolve) => {
            timeoutId = setTimeout(async () => {
              const welcomeMessage =
                "Welcome to Terminal Type a command or wait for auto-execution";
              await typeText(welcomeMessage, "system");
              resolve();
            }, 500); // Small delay before welcome message appears
          });
        }

        // Execute each command with delay
        for (let i = 0; i < commands.length; i++) {
          if (!mounted) break;

          // Wait for the specified delay before showing the command
          await new Promise((resolve) => {
            timeoutId = setTimeout(resolve, commands[i].delay);
          });

          if (!mounted) break;

          // Type the command itself
          await typeText(commands[i].command, "command");

          // Small delay to simulate processing before response
          await new Promise((resolve) => {
            timeoutId = setTimeout(resolve, 300);
          });

          if (!mounted) break;

          // Type the response
          const response = processCommand(commands[i].command);
          await typeText(response, "response");
        }

        // Wait a bit after all commands are done before starting the clear animation
        await new Promise((resolve) => {
          timeoutId = setTimeout(resolve, 1500); // Wait for 1.5 seconds after the last response
        });

        if (!mounted) break;

        // Animate clearing lines from bottom upwards
        const currentTotalLines = lines.length; // Capture current length of lines
        for (let i = currentTotalLines - 1; i >= 0; i--) {
          if (!mounted) break;
          setLines((prev) => prev.slice(0, i)); // Remove the last line visually
          await new Promise((resolve) => {
            timeoutId = setTimeout(resolve, 70); // Slightly increased delay for smoother clearing
          });
        }

        // Ensure all lines are completely removed before the next cycle starts
        setLines([]);
        // The loop will immediately restart from the welcome message after this
      }
    };

    executeCommands();

    return () => {
      mounted = false; // Set mounted to false to stop the loop
      clearTimeout(timeoutId); // Clear any pending timeouts on component unmount
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // Effect to auto-scroll to bottom of terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines, currentTypingText]); // Auto-scroll when lines or typing text changes

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
          jhinku@portfolio ~
        </div>
      </div>

      {/* Terminal Body */}
      <div
        ref={terminalRef}
        className="bg-gray-900 p-4 font-mono text-sm h-96 overflow-y-auto"
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
        {/* Render the currently typing text */}
        {isTyping && currentTypingText && (
          <div
            className={`mb-2 ${
              currentTypingText[0].startsWith("Welcome") ? "text-gray-400" : ""
            }`}
          >
            {/* Conditional rendering for '$' prompt only for commands, not system/response */}
            {currentTypingText[0].startsWith(">") ||
            currentTypingText[0].startsWith("Welcome") ? (
              ""
            ) : (
              <span className="text-[#C68EFD]">$ </span>
            )}
            {currentTypingText.map((text, i) => (
              <div
                key={`typing-${i}`}
                className={`${
                  text.startsWith(">") || text.startsWith("Welcome")
                    ? "text-gray-300" // Response or system text color
                    : "text-[#1DCD9F]" // Command text color
                }`}
              >
                {text}
              </div>
            ))}
          </div>
        )}

        {/* Always active blinking cursor/typing animation */}
        <div className="animate-pulse">
          <span className="text-[#C68EFD]">$ </span>
          <span className="w-2 h-5 bg-[#1DCD9F] inline-block"></span>
        </div>
      </div>
    </motion.div>
  );
}
