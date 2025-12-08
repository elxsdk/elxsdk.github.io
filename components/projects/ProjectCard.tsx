"use client"
import { GithubIcon, LinkIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import {
  projectCardAnimation,
  projectCardDescriptionAnimation,
  projectCardImageAnimation,
  projectCardLinksAnimation,
  projectCardTechAnimation,
  projectCardTitleAnimation,
} from "./animationCard"

interface ProjectCardProps {
  title: string
  description: string
  images: string[]
  tech: string[]
  repo: string
  projectLink: string
}

export default function ProjectCard({
  title,
  description,
  images,
  tech,
  repo,
  projectLink,
}: ProjectCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const ctrls = useAnimation()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (isInView) {
      ctrls.start("visible")
    }
  }, [ctrls, isInView])

  // Auto-advance carousel every 4 seconds if multiple images
  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [images.length])

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <motion.div
      ref={ref}
      animate={ctrls}
      initial="hidden"
      variants={projectCardAnimation}
      aria-hidden="true"
      className="relative z-10 h-[550px] w-full items-stretch justify-center overflow-hidden rounded-3xl border border-foreground/20 bg-zinc-200 dark:bg-zinc-800"
    >
      {/* Image Carousel */}
      <motion.div
        animate={ctrls}
        initial="hidden"
        variants={projectCardImageAnimation}
        aria-hidden="true"
        className="relative"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              width={1000}
              height={600}
              src={images[currentImageIndex]}
              alt={`${title} - Image ${currentImageIndex + 1}`}
              className="absolute top-24 right-0 w-[85%] object-contain md:w-[60%] lg:max-w-[55%] lg:top-32"
            />
          </motion.div>
        </AnimatePresence>

        {/* Carousel Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 z-20 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentImageIndex
                    ? "w-6 bg-foreground"
                    : "bg-foreground/30 hover:bg-foreground/50"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </motion.div>
      {/* Temporarily hidden - GitHub and Demo links */}
      {/* <motion.div
        ref={ref}
        animate={ctrls}
        initial="hidden"
        variants={projectCardLinksAnimation}
        aria-hidden="true"
        className="absolute left-0 top-0 ml-8 mt-6 flex items-center justify-center gap-4 lg:ml-14 lg:mt-10"
      >
        <Link
          href={repo}
          target="_blank"
          className="rounded-full bg-foreground p-2 transition-all duration-300 ease-in-out hover:bg-foreground/50"
          aria-label="Open Github Repo"
        >
          <GithubIcon className="h-6 w-6 text-zinc-100 dark:text-zinc-800 md:h-8 md:w-8 lg:h-10 lg:w-10" />
        </Link>
        <Link
          href={projectLink}
          target="_blank"
          className="rounded-full bg-foreground p-2 transition-all duration-300 ease-in-out hover:bg-foreground/50"
          aria-label="Open Live Demo"
        >
          <LinkIcon className="h-6 w-6 text-zinc-100 dark:text-zinc-800 md:h-8 md:w-8 lg:h-10 lg:w-10" />
        </Link>
      </motion.div> */}

      <div className="absolute left-10 top-10 mb-10 ml-0 text-foreground lg:top-16 lg:mb-14 lg:ml-4">
        <h3 className="max-w-[90%] text-5xl font-bold leading-none text-foreground md:text-4xl md:leading-none lg:max-w-[450px] lg:text-5xl lg:leading-none">
          <motion.span
            ref={ref}
            animate={ctrls}
            initial="hidden"
            variants={projectCardTitleAnimation}
            aria-hidden="true"
          >
            {title}
          </motion.span>
        </h3>
        <p className="mt-4 w-[90%] max-w-[454px] text-xs font-semibold text-foreground/50">
          <motion.span
            ref={ref}
            animate={ctrls}
            initial="hidden"
            variants={projectCardDescriptionAnimation}
            aria-hidden="true"
          >
            {description}
          </motion.span>
        </p>
        <motion.div
          ref={ref}
          animate={ctrls}
          initial="hidden"
          variants={projectCardTechAnimation}
          aria-hidden="true"
          className="mt-9 flex gap-4"
        >
          {tech.map((tech, index) => (
            <p
              key={index}
              className="text-xs font-semibold text-foreground/50 md:text-sm"
            >
              {tech}
            </p>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
