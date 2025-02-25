import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-20 flex">
      <div className=" flex md:flex-row flex-col gap-8  ">

        {/* Name Card */}
        <div className="card bg-base-100 w-full rounded-xl  ">
          <div className="max-w-md">
            <div className="card-body ">
              <h2 className="card-title">Hi, I'm Agamjot 👋</h2>
              <p>Current Student and Software Developer @ SJSU | Passionate About Web Development and AI</p>
              <div className="card-actions pt-5 justify-start">
                <Link href="/about" className="btn btn-primary rounded-xl">Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
                </div>
            </div>
          </div>
        </div>


        {/* Socials Card */}
        
      </div>
    </div>
        
  );
}
