"use client"

import { useAnimation, useInView, motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { certificates } from "@/lib/certificates-data"
import { Award, ExternalLink } from "lucide-react"

export default function Certificates() {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true })
  const ctrls = useAnimation()

  useEffect(() => {
    if (inView) {
      ctrls.start("visible")
    }
  }, [ctrls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={ctrls}
      variants={containerVariants}
      className="w-full"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert) => (
          <motion.div
            key={cert.id}
            variants={itemVariants}
            className="group relative overflow-hidden rounded-xl bg-zinc-200 p-6 transition-all hover:shadow-lg dark:bg-zinc-800 dark:hover:shadow-zinc-900/50"
          >
            <div className="mb-4 flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-300 dark:bg-zinc-700">
                <Award className="h-6 w-6 text-zinc-700 dark:text-zinc-300" />
              </div>
              {cert.credentialUrl && cert.credentialUrl !== "#" && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                  aria-label="View certificate"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              )}
            </div>

            <h3 className="mb-2 text-lg font-semibold leading-tight text-zinc-900 dark:text-zinc-100">
              {cert.name}
            </h3>

            <div className="mb-3 flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <span className="font-medium">{cert.issuer}</span>
              <span>•</span>
              <span>{cert.date}</span>
            </div>

            {cert.description && (
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {cert.description}
              </p>
            )}

            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-zinc-300/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100 dark:from-zinc-700/50" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
