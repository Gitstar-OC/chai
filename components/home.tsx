"use client"

import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Compass, MessageSquare, PenTool } from "lucide-react"
import { FaApple, FaAndroid } from "react-icons/fa"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15] dark:border-black/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)] dark:after:bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.2),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  )
}

export default function Home() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  if (!mounted) return null

  return (
    <div className="relative w-full min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] dark:from-indigo-500/[0.05] dark:via-transparent dark:to-rose-500/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-violet-500 to-indigo-600 dark:from-indigo-300 dark:via-violet-300 dark:to-indigo-300",
                  pacifico.className,
                )}
              >
                AI
              </span>{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-black to-black/80 dark:from-white dark:to-white/80">
                chat
              </span>{" "}
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-rose-600 via-pink-500 to-rose-600 dark:from-rose-300 dark:via-pink-300 dark:to-rose-300",
                  pacifico.className,
                )}
              >
                Reimagined
              </span>
            </h1>
          </motion.div>

          <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
            <p className="text-base sm:text-lg md:text-xl text-black/60 dark:text-white/60 mb-10 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4">
              Our app revolutionizes the way we interact with AI chatbots. With our advanced technology, our chatbots
              think and reply like real characters, complete with authentic voices.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12"
          >
            <Link
              href="/search"
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-black/[0.05] dark:bg-white/[0.05] hover:bg-black/[0.1] dark:hover:bg-white/[0.1] transition-colors duration-200"
            >
              <Compass className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <span className="font-medium">Explore</span>
            </Link>
            <Link
              href="/chat"
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-black/[0.05] dark:bg-white/[0.05] hover:bg-black/[0.1] dark:hover:bg-white/[0.1] transition-colors duration-200"
            >
              <MessageSquare className="h-5 w-5 text-rose-600 dark:text-rose-400" />
              <span className="font-medium">Chats</span>
            </Link>
            <Link
              href="/create"
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-black/[0.05] dark:bg-white/[0.05] hover:bg-black/[0.1] dark:hover:bg-white/[0.1] transition-colors duration-200"
            >
              <PenTool className="h-5 w-5 text-violet-600 dark:text-violet-400" />
              <span className="font-medium">Create</span>
            </Link>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
            <a
              href="https://apps.apple.com/us/app/chai-social-ai-platform-chat/id1544750895"
              target="_blank"
              className="flex items-center border-neutral-300 dark:border-neutral-400 border-[1px] justify-center gap-3 px-6 py-3.5 bg-white dark:bg-black text-black dark:text-white rounded-full hover:opacity-90 transition-opacity shadow-lg"
            >
              <FaApple className="h-6 w-6" />
              <div className="flex flex-col items-start">
                <span className="text-xs">Download on the</span>
                <span className="text-sm font-semibold">App Store</span>
              </div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.Beauchamp.Messenger.external"
              target="_blank"
              className="flex border-neutral-300 dark:border-neutral-400 border-[1px] items-center justify-center gap-3 px-6 py-3.5 bg-white dark:bg-black text-black dark:text-white rounded-full hover:opacity-90 transition-opacity shadow-lg"
            >
              <FaAndroid className="h-6 w-6" />
              <div className="flex flex-col items-start">
                <span className="text-xs">Get it on</span>
                <span className="text-sm font-semibold">Google Play</span>
              </div>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/80 dark:from-black dark:via-transparent dark:to-black/80 pointer-events-none" />

      <div className="absolute bottom-6 left-0 right-0 text-center z-10">
        <div className="text-sm text-black/40 dark:text-white/40 flex justify-center space-x-4">
          <Link href="/terms" className="hover:underline hover:text-black/60 dark:hover:text-white/60 transition-colors">
            Terms of Service
          </Link>
          <span>•</span>
          <Link href="/privacy" className="hover:underline hover:text-black/60 dark:hover:text-white/60 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  )
}
