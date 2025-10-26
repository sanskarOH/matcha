"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle } from "lucide-react"
import { supabase } from "@/lib/supabase"

export function WaitlistSection() {
  const [formData, setFormData] = useState({ name: "", email: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ name: formData.name, email: formData.email }])

      if (error) throw error

      setSubmitted(true)
      setFormData({ name: "", email: "" })

      // Reset after 3 seconds
      setTimeout(() => setSubmitted(false), 3000)
    } catch (err: any) {
      alert("Error: " + err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="waitlist" className="py-20 px-4 relative">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Join the Waitlist</h2>
          <p className="text-gray-400 text-lg">Be the first to experience the future of email management.</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="space-y-3">
            <Input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-colors"
            />
            <Input
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-colors"
            />
          </div>

          {submitted ? (
            <motion.div
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg"
              style={{ backgroundColor: "#00D4FF", color: "#0F0F0F" }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">Successfully joined the waitlist!</span>
            </motion.div>
          ) : (
            <Button
              type="submit"
              disabled={loading}
              className="w-full py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
              style={{
                backgroundColor: "#00D4FF",
                color: "#0F0F0F",
              }}
            >
              {loading ? "Joining..." : "Join Waitlist"}
            </Button>
          )}
        </motion.form>
      </div>
    </section>
  )
}
