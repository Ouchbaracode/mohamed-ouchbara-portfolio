import { Handshake } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 neon-text">Let's Build the Future Together</h2>
        <div className="mb-8">
          <Handshake className="w-16 h-16 sm:w-24 sm:h-24 mx-auto text-blue-400" />
        </div>
        <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
          I'm open to AI projects, internships, and collaborations! Let's connect and innovate together.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="px-6 py-3 rounded-full neon-border hover:bg-blue-400 hover:text-black transition-all duration-300"
          >
            Send a Message
          </a>
          <a
            href="#projects"
            className="px-6 py-3 rounded-full neon-border hover:bg-blue-400 hover:text-black transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#"
            className="px-6 py-3 rounded-full neon-border hover:bg-blue-400 hover:text-black transition-all duration-300"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

