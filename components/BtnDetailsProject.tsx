"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";

interface BtnDetailsProjectProps {
  slug: string;
}

const BtnDetailsProject = ({ slug }: BtnDetailsProjectProps) => {
  return (
    <motion.div whileTap={{ scale: 0.98 }} className="w-full">
      <Link
        href={`/projects/${encodeURIComponent(slug)}`}
        className="hoverable w-full relative group/btn bg-linear-to-b from-[#2A2A2A] to-[#121212] text-white rounded-full py-4 flex items-center justify-center gap-3 font-semibold text-[15px] border border-white/10 hover:border-white/20 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.5)] overflow-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-b from-white/10 to-transparent opacity-50" />

        <Sparkles
          size={18}
          className="text-white/80 group-hover/btn:scale-110 transition-transform duration-300"
          fill="currentColor"
        />
        <span className="relative z-10 tracking-wide">Voir les détails</span>
      </Link>
    </motion.div>
  );
};

export default BtnDetailsProject;
