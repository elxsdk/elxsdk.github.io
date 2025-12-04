import AboutGlobeAnimate from "./AboutGlobeAnimate"
import AnimateBody from "./AnimateBody"
import AnimateHeading from "./AnimateHeading"
import AnimateParagraph from "./AnimateParagraph"
import AnimateTitle from "./AnimateTitle"
// import DiscordServer from "./DiscordServer"
import GithubGraph from "./GithubGraph"
// import SocialMedia from "./SocialMedia"
// import Spotify from "./Spotify"
// import TiktokEmbed from "./TiktokEmbed"

export default function About() {
  return (
    <section
      id="about"
      className="relative mb-10 flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      <div className="mx-auto flex w-[90%] flex-col items-start justify-center lg:max-w-[1212.8px]">
        <div className="mb-10 flex w-full items-center justify-between gap-x-2 md:mb-16">
          <AnimateTitle
            title={"About me"}
            className="text-left text-[40px] font-bold leading-[0.9em] tracking-tighter sm:text-[45px] md:text-[60px] lg:text-[80px]"
            wordSpace="mr-[14px]"
            charSpace="mr-[0.0001em]"
          />
          <AboutGlobeAnimate />
        </div>

        <div className="mx-auto flex w-full flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="lg:mg-16 mb-10 flex w-full flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:max-w-[90%] lg:text-base">
            <AnimateParagraph
              paragraph="Hi! I'm Lanang Rizky, an IT Support professional with 5 years of experience maintaining IT infrastructure at RSUP Dr. Kariadi Semarang, one of the largest hospitals in Central Java."
              delay={1.5}
            />
            <AnimateParagraph
              paragraph="Throughout my career, I've developed a strong foundation in technical troubleshooting, team coordination, and problem-solving. From managing hospital information systems (SIMRS) to minimizing downtime through hardware and software troubleshooting, I've learned the importance of reliable systems that serve real people."
              delay={1.8}
            />
            <AnimateParagraph
              paragraph="Currently, I'm pursuing my degree in Informatics Engineering at Universitas Semarang while transitioning into web development. I'm passionate about building modern, responsive web applications and have recently completed certifications in JavaScript, Next.js, and software engineering fundamentals."
              delay={2}
            />
            <AnimateParagraph
              paragraph="I'm actively seeking opportunities as a Junior Web Developer where I can combine my strong technical background with my growing expertise in modern web technologies to create impactful digital experiences."
              delay={2.5}
            />
          </div>

          <div className="mb-24 flex w-full flex-col gap-4 leading-relaxed tracking-wide sm:mb-32 md:mb-40 md:gap-6 md:leading-relaxed lg:mb-16 lg:max-w-[90%]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimateHeading title="Frontend Technologies" delay={0.5} />

              <AnimateBody
                text="JavaScript, React, Next.js, HTML5, CSS3, TypeScript, PostgreSQL"
                delay={1}
                className="text-sm"
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimateHeading title="UI/UX & Styling" delay={1.4} />
              <AnimateBody
                text="Tailwind CSS, Responsive Design, Modern UI Patterns, User Experience Design"
                delay={1.5}
                className="text-sm"
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimateHeading title="IT & Networking" delay={1.6} />
              <AnimateBody
                text="Cisco CCNA, Network Infrastructure, LAN/WAN, Mikrotik, IT Support, System Troubleshooting"
                delay={2}
                className="text-sm"
              />
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col justify-between gap-4 lg:max-w-[1200px] ">
          <GithubGraph />
        </div>
      </div>
    </section>
  )
}
