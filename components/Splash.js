"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Splash() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#232D26]">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mx-auto mb-6"
        >
          <Image
            src="/logo.svg"
            alt="Church of the Holy Spirit Logo"
            width={120}
            height={120}
            priority
            className="mx-auto"
          />
        </motion.div>

        <h1 className="text-3xl md:text-5xl font-semibold text-[#CCD4C9]">
          Church of the Holy Spirit
        </h1>

        <p className="mt-2 text-[#899C8F] text-lg">Rumouke</p>

        <motion.div
          className="mt-8 text-[#AAC64B]"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          Entering...
        </motion.div>
      </motion.div>
    </div>
  );
          }
