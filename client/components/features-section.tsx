"use client"

import { motion } from "framer-motion"
import { Mail, Zap, Calendar } from "lucide-react"

const features = [
  {
    icon: Mail,
    title: "AI Email Analysis",
    description: "Intelligent parsing of your emails to extract actionable insights and key information.",
  },
  {
    icon: Zap,
    title: "Smart Categorization",
    description: "Automatically organize and prioritize emails based on importance and relevance.",
  },
  {
    icon: Calendar,
    title: "Calendar Auto-Sync",
    description: "Seamlessly sync events and deadlines directly to your calendar.",
  },
]

export function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Powerful Features
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                className="p-8 rounded-lg border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300"
                  style={{ backgroundColor: "#00D4FF", color: "#0F0F0F" }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
