"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoaded(true), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20); // Vitesse du loader

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.86, 0, 0.07, 1] }}
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#ffffff]"
        >
          <div className="font-display mb-4 text-6xl font-semibold tracking-tighter text-[#050505]">
            {progress}%
          </div>
          <div className="loader-bar">
            <motion.div
              className="absolute left-0 top-0 h-full bg-[#050505]"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
