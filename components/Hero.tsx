export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 neon-text">
          Innovating AI Solutions
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8">AI Developer | Software Engineer | Database Specialist</p>
        <div className="flex flex-wrap justify-center gap-4">
          {["View My Work", "Download Resume", "Let's Connect"].map((text, index) => (
            <a
              key={text}
              href={index === 0 ? "#projects" : index === 1 ? "#" : "#contact"}
              className="px-6 py-3 rounded-full neon-border hover:bg-blue-400 hover:text-black transition-all duration-300"
            >
              {text}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

