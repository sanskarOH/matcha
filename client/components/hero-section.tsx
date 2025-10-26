"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "#00D4FF" }}
        ></div>
      </div>

      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-6xl md:text-7xl font-bold mb-6 tracking-tight"
          variants={itemVariants}
          style={{ color: "#00D4FF" }}
        >
          Inverno
        </motion.h1>

        <motion.p className="text-xl md:text-2xl mb-4 text-gray-300" variants={itemVariants}>
          AI that declutters your inbox.
        </motion.p>

        <motion.p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed" variants={itemVariants}>
          Inverno analyzes your emails, extracts key info, and syncs events to your calendar — automatically.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Button
            className="px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
            style={{
              backgroundColor: "#00D4FF",
              color: "#0F0F0F",
            }}
            onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
          >
            Join Waitlist
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
