import Image from "next/image"

export default function AboutMe() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center neon-text">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Mohamed Ouchbara"
              width={400}
              height={400}
              className="rounded-lg shadow-lg neon-border max-w-full h-auto"
            />
          </div>
          <div className="space-y-4">
            <p className="text-base sm:text-lg">
              I am a BTS student in AI development with a focus on Python, databases, and machine learning. I am
              passionate about AI-powered business solutions and leveraging data to create smarter applications.
            </p>
            <p className="text-base sm:text-lg">
              My goal is to bridge the gap between cutting-edge AI technologies and real-world business challenges,
              creating innovative solutions that drive efficiency and growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

