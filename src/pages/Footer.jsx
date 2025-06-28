import { Heart } from "lucide-react";

/**
 * Footer Component
 * Displays copyright information and credits
 */
export default function Footer() {
  return (
    <footer className="py-6 bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400 flex items-center justify-center">
          © {new Date().getFullYear()} Made with
          <Heart className="w-4 h-4 mx-1 text-red-500" fill="currentColor" />
          Abdullah Al Suad
        </p>
      </div>
    </footer>
  );
}
