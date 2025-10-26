"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 px-4">
      <motion.div
        className="max-w-6xl mx-auto text-center text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p>© 2025 Inverno. All rights reserved.</p>
      </motion.div>
    </footer>
  )
}
