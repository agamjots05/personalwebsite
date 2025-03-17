  import Link from "next/link"
  import Image from "next/image"


  type Project = {
    id: string
    title: string
    description: string
    image: string
    anchored: string
    technologies: string[]
  }

  const projects: Project[] = [
    {
      id: "scammerjammer",
      title: "Scammer Jammer",
      description:
        "A fun take on an anti-scam platform, using Hume AI agents to simulate wasting a scammers time in phone calls",
      image: "/scammerjammer.png",
      anchored: "github.com/agamjots05/scammerjammer",
      technologies: ["NextJS", "Hume API", "Tailwind", "Typescript"],
    },
    {
      id: "ACM @ SJSU",
      title: "ACM @ SJSU",
      description:
        "ACM @ SJSU's very first club website where students across San Jose State University learn about everything computer-related",
      image: "/acmsjsu.png",
      anchored: "acm-devsite.vercel.app/",
      technologies: ["ReactJS", "Figma", "Tailwind"],

    },
  ]

  export default function WorkSection() {
    return (
      <div className="pt-12">
        <h2 className="pl-3 uppercase font-bold mb-6">Work</h2>

        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <div className="flex items-center gap-2 text-gray-500 mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            <span className="uppercase font-bold">Featured</span>
          </div>

          <div className="space-y-12">
            {projects.map((project) => (
              <div key={project.id} className="pb-12 border-b border-gray-100 last:border-0 last:pb-0">
                <div className="flex gap-6">
                  <div className="shrink-0">
                  <a href={`https://${project.anchored}`} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={100}
                      height={100}
                      className="mt-5 rounded-2xl hover:scale-110 duration-300 ease-in-out"
                    />
                    </a>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>

                    <p className="text-gray-700">
                      {project.description}{" "}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end mt-6">
            <Link
              href="/experience"
              className="bg-black text-white px-6 py-3 rounded-full inline-flex items-center font-medium"
            >
              VIEW ALL 
            </Link>
          </div>
        </div>
      </div>
    )
  }

