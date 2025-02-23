"use client"

import { useState } from "react"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Contact() {
  const [isAssistantActive, setIsAssistantActive] = useState(false)

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center neon-text">Let's Work Together</h2>
        <div className="max-w-3xl mx-auto">
          <form className="glassmorphism rounded-lg p-6 sm:p-8">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 rounded-full neon-border hover:bg-blue-400 hover:text-black transition-all duration-300"
            >
              Send Message
            </button>
          </form>
          <div className="mt-8 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-12 text-center">
          <button
            onClick={() => setIsAssistantActive(!isAssistantActive)}
            className="px-6 py-3 rounded-full neon-border hover:bg-blue-400 hover:text-black transition-all duration-300"
          >
            {isAssistantActive ? "Deactivate AI Assistant" : "Activate AI Assistant"}
          </button>
          {isAssistantActive && (
            <div className="mt-4 p-4 glassmorphism rounded-lg">
              <p>AI Assistant: How can I help you today?</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

