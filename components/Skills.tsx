import { Code, Database, Brain, Globe } from "lucide-react"

const skills = [
  {
    category: "Programming",
    items: ["Python", "SQL", "NoSQL"],
    icon: Code,
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Neo4j"],
    icon: Database,
  },
  {
    category: "AI & ML",
    items: ["Data Processing", "Machine Learning Basics"],
    icon: Brain,
  },
  {
    category: "Web Development",
    items: ["Front-end", "Back-end fundamentals"],
    icon: Globe,
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center neon-text">Skills & Technologies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="glassmorphism rounded-lg p-6 hover:shadow-lg transition duration-300 transform hover:scale-105"
            >
              <skill.icon className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-4 neon-text">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

