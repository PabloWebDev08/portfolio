import React from "react";
import { Globe, Github } from "lucide-react";
import { ProjectLinks } from "@/lib/types";

interface LinksDemoGitProps {
  links: ProjectLinks;
}

const LinksDemoGit = ({ links }: LinksDemoGitProps) => {
  return (
    <div className="flex gap-4 mb-8">
      {links.demo && (
        <a
          href={links.demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Voir la démo"
          className="hoverable w-11 h-11 rounded-full relative overflow-hidden bg-linear-to-b from-[#2A2A2A] to-[#121212] border border-white/10 flex items-center justify-center text-neutral-400 hover:from-[#333333] hover:to-[#171717] hover:border-white/20 transition-all duration-300 shadow-sm"
        >
          {/* Reflet supérieur pour un rendu glossy, comme le bouton */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-b from-white/10 to-transparent opacity-50"
          />
          <Globe size={18} strokeWidth={1.5} className="relative z-10" />
        </a>
      )}
      {links.code && (
        <a
          href={links.code}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Voir le code source"
          className="hoverable w-11 h-11 rounded-full relative overflow-hidden bg-linear-to-b from-[#2A2A2A] to-[#121212] border border-white/10 flex items-center justify-center text-neutral-400 hover:from-[#333333] hover:to-[#171717] hover:border-white/20 transition-all duration-300 shadow-sm"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-b from-white/10 to-transparent opacity-50"
          />
          <Github size={18} strokeWidth={1.5} className="relative z-10" />
        </a>
      )}
    </div>
  );
};

export default LinksDemoGit;
