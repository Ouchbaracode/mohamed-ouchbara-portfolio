import Header from "../components/Header"
import Hero from "../components/Hero"
import AboutMe from "../components/AboutMe"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Blog from "../components/Blog"
import Contact from "../components/Contact"
import FinalCTA from "../components/FinalCTA"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
      <FinalCTA />
    </main>
  )
}

