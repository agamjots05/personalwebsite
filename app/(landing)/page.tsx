import Link from "next/link";
import SocialLinks from "@/components/socialLinks";
import githubIcon from "@/components/Icons/githubIcon";
import LinkedInIcon from "@/components/Icons/linkedinIcon";
import WorkSection from "@/components/worksection";


const Icons = [LinkedInIcon,githubIcon]

export default function Home() {
  return (
    <>
    <div className="pt-20 ">
    <h2 className="pl-3 uppercase font-bold mb-6">About</h2>
      <div className="flex md:flex-row flex-col gap-8  ">
        <div className="card bg-base-100 w-full rounded-xl">
            <div className="card-body ">
              <h2 className="card-title">Hi, I'm Agamjot 👋</h2>
              <p>Current Student and Software Developer @ SJSU | Passionate About Web Development and AI</p>
              <div className="card-actions pt-5 justify-start">
                <Link href="/about" className="btn duration-300 ease-in-out hover:scale-105 btn-primary rounded-xl">Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
                </div>
            </div>
        </div>
        <SocialLinks allIcons={Icons}/>
      </div>
    </div>
    <WorkSection></WorkSection>
    </>
    
        
  );
}


