import githubIcon from "@/components/Icons/githubIcon"
import LinkedInIcon from "@/components/Icons/linkedinIcon"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import SocialLinks from "@/components/socialLinks"

// Just show a limited set of skills
const displayedSkills = [
  "Typescript",
  "Javascript",
  "Python",
  "Java",
  "Tailwind",
  "LLM",
  "React.js",
  "Next.js",
  "Node.js",
  "OpenAI",
  "Plaid",
]

const Icons = [LinkedInIcon, githubIcon]

export default function About() {
  return (
    <div className="pt-20">
      <div className="card bg-base-100 w-full rounded-xl">
        <div className="card-body gap-8 flex flex-col items-center">
          <Image src={"/agamjot.png"} alt="faceImg" width={180} height={180} className="pt-4 rounded-full" />
          <h2 className="card-title font-bold text-gray-500">Hi, I'm Agamjot 👋</h2>
          <h1 className="font-bold text-3xl">
            Passionate About building{" "}
            <a href="/experience" className="underline">
              Apps.{" "}
            </a>
          </h1>
          <p className="text-center">
            Currently interested in full-stack web development, machine learnine, and solving coding problems in
            leetcode :)
          </p>
          <div className="card-actions justify-start"></div>
        </div>
      </div>

      {/* Education */}
      <div className="mt-10 card bg-base-100 w-full rounded-xl">
        <div className="card-body">
          <div className="flex gap-2 text-gray-500 mb-8">
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
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
            </svg>
            <span className="uppercase font-bold">Education</span>
          </div>
          {/* Uni */}
          <div className="mb-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold">San Jose State University</h3>
                <p className="text-gray-700">Bachelor of Science in Computer Science</p>
              </div>
              <span className="text-gray-500">2023 - 2027</span>
            </div>
          </div>
          {/*Coursework */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Relevant Coursework</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=42151"
                  className="underline"
                >
                  Data Structures and Algorithms
                </a>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=42193"
                  className="underline"
                >
                  Information Security
                </a>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=42154"
                  className="underline"
                >
                  Object Oriented Design
                </a>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://catalog.sjsu.edu/preview_course_nopop.php?catoid=15&coid=133115"
                  className="underline"
                >
                  Server Side Web Programming
                </a>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://catalog.sjsu.edu/preview_course_nopop.php?catoid=13&coid=122970"
                  className="underline"
                >
                  {" "}
                  Processing Big Data
                </a>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://catalog.sjsu.edu/preview_course_nopop.php?catoid=10&coid=42150"
                  className="underline"
                >
                  Computer Systems
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="mt-10 flex md:flex-row flex-col  gap-8 ">
      <div className="card bg-base-100 w-full rounded-xl">
        <div className="card-body">
          <div className="flex gap-2 text-gray-500 mb-8">
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
              <rect width="7" height="7" x="3" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="14" rx="1" />
              <rect width="7" height="7" x="3" y="14" rx="1" />
            </svg>
            <span className="uppercase font-bold">Experiences</span>
          </div>

          <div className="flex flex-wrap gap-3">
            {displayedSkills.map((skill) => (
              <div className="px-4 py-3 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                {skill}
              </div>
              
            ))}
            <Link
              href="/experience"
              className="bg-black text-white px-4 py-2 rounded-full inline-flex items-center font-medium"
            >
              Show More <ArrowRight className="ml-2 w-3 h-3" />
            </Link>
          </div>

        </div>
        </div>
        <SocialLinks allIcons={Icons}/>
      </div>
    </div>
  )
}

