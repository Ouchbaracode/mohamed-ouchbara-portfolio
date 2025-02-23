import Image from "next/image"

const projects = [
  {
    title: "AI-Powered Optical Store Management System",
    description:
      "A web-based AI solution that uses face recognition to recommend suitable eyewear based on face shape and stock availability.",
    image: "/placeholder.svg?height=300&width=500",
    caseStudy: "#",
    demo: "#",
    github: "#",
  },
  // Add more projects here
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center neon-text">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="glassmorphism rounded-lg overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-auto"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 neon-text">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.caseStudy}
                    className="px-4 py-2 rounded-full neon-border hover:bg-blue-400 hover:text-black transition-all duration-300"
                  >
                    View Case Study
                  </a>
                  <a
                    href={project.demo}
                    className="px-4 py-2 rounded-full neon-border hover:bg-blue-400 hover:text-black transition-all duration-300"
                  >
                    Demo
                  </a>
                  <a
                    href={project.github}
                    className="px-4 py-2 rounded-full neon-border hover:bg-blue-400 hover:text-black transition-all duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

