const blogPosts = [
  {
    title: "How AI is Changing Business Automation",
    excerpt: "Exploring the impact of AI on modern business processes and automation...",
    date: "2023-05-15",
    link: "#",
  },
  {
    title: "AI-Powered Databases: The Future of Data Management",
    excerpt: "Discover how AI is revolutionizing database management and query optimization...",
    date: "2023-05-01",
    link: "#",
  },
  {
    title: "My Journey in AI Development",
    excerpt: "Personal insights and lessons learned from my experience in AI development...",
    date: "2023-04-20",
    link: "#",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center neon-text">AI Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.title}
              className="glassmorphism rounded-lg overflow-hidden hover:shadow-lg transition duration-300 transform hover:scale-105"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 neon-text">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">{post.date}</span>
                  <a
                    href={post.link}
                    className="px-4 py-2 rounded-full neon-border hover:bg-blue-400 hover:text-black transition-all duration-300"
                  >
                    Read More
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

