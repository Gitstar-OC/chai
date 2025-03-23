"use client"

import { Button } from "@/components/ui/button"
import { MessageSquarePlus } from "lucide-react"
import { useEffect, useState } from "react"
import { motion, Variants } from "framer-motion"

export default function EmptyChatHistory() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => { }
  }, [])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.23, 0.86, 0.39, 0.96] }
    }
  }

  const leftChatVariants: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.23, 0.86, 0.39, 0.96]
      }
    }
  }

  const rightChatVariants: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.23, 0.86, 0.39, 0.96]
      }
    }
  }

  const textLineVariants: Variants = {
    hidden: { opacity: 0, width: 0 },
    visible: (custom: number) => ({
      opacity: 1,
      width: "100%",
      transition: {
        delay: custom * 0.15,
        duration: 0.5,
        ease: "easeInOut"
      }
    })
  }

  const floatVariants: Variants = {
    initial: {},  // Add an initial state
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "mirror"
      }
    }
  }

  const pulseVariants: Variants = {
    initial: {},  // Add an initial state
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  if (!mounted) return null;

  return (
    <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-black p-6 transition-colors duration-500">
      <motion.div
        className="flex max-w-md flex-col items-center text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="mb-10 w-80 h-80 relative">

          <motion.div
            className="absolute rounded-2xl overflow-hidden p-4"
            style={{
              left: "-2rem", 
              top: "12px",
              height: "9rem", 
              width: "19.5rem",  
              background: "linear-gradient(to right, rgba(79, 70, 229, 0.03) 0%, rgba(79, 70, 229, 0.02) 100%)",
              backdropFilter: "blur(8px)",
              boxShadow: "0 8px 32px rgba(79, 70, 229, 0.08), 0 0 0 1px rgba(79, 70, 229, 0.1)",
              border: "1.5px solid rgba(79, 70, 229, 0.2)"
            }}
            variants={leftChatVariants}
            custom={1}
          >
            <motion.div
              className="flex flex-col gap-3"
              variants={floatVariants}
              animate="float"
            >
              {[24, 36, 28, 20].map((width, i) => (
                <motion.div
                  key={i}
                  className="h-3 rounded-full bg-neutral-200 dark:bg-neutral-800"
                  style={{ width: `${width}%` }}
                  variants={textLineVariants}
                  custom={i}
                />
              ))}
            </motion.div>

            <div className="absolute bottom-4 right-4 flex space-x-1.5">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="h-2 w-2 rounded-full bg-indigo-400 dark:bg-indigo-500"
                  animate={{
                    y: [0, -4, 0],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </motion.div>


          <motion.div
            className="absolute rounded-2xl overflow-hidden p-4"
            style={{
              right: "-2rem", // Moved further right
              top: "10rem",
              height: "8rem",  // Original height (h-32)
              width: "16.5rem", // 150% of original width
              background: "linear-gradient(to right, rgba(217, 70, 219, 0.03) 0%, rgba(217, 70, 219, 0.02) 100%)",
              backdropFilter: "blur(8px)",
              boxShadow: "0 8px 32px rgba(217, 70, 219, 0.08), 0 0 0 1px rgba(217, 70, 219, 0.1)",
              border: "1.5px solid rgba(217, 70, 219, 0.2)"
            }}
            variants={rightChatVariants}
            custom={2}
          >
            <motion.div
              className="flex flex-col gap-3"
              variants={floatVariants}
              animate="float"
              transition={{ delay: 0.5 }}
            >
              {[24, 32, 20, 16].map((width, i) => (
                <motion.div
                  key={i}
                  className="h-3 rounded-full bg-neutral-200 dark:bg-neutral-800"
                  style={{ width: `${width}%` }}
                  variants={textLineVariants}
                  custom={i}
                />
              ))}
            </motion.div>


            <div className="absolute bottom-4 right-4 flex space-x-1.5">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="h-2 w-2 rounded-full bg-rose-400 dark:bg-rose-500"
                  animate={{
                    y: [0, -4, 0],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </motion.div>


          {[
            { pos: "left-24 top-0", size: "h-10 w-10", delay: 1.2, color: "bg-indigo-50 dark:bg-indigo-950", border: "border-indigo-200/50 dark:border-indigo-800/50" },
            { pos: "right-8 top-12", size: "h-6 w-6", delay: 1.4, color: "bg-rose-50 dark:bg-rose-950", border: "border-rose-200/50 dark:border-rose-800/50" },
            { pos: "left-12 bottom-4", size: "h-8 w-8", delay: 1.6, color: "bg-violet-50 dark:bg-violet-950", border: "border-violet-200/50 dark:border-violet-800/50" }
          ].map((elem, i) => (
            <motion.div
              key={i}
              className={`absolute ${elem.pos} ${elem.size} rounded-full ${elem.color} ${elem.border} border-2 shadow-lg`}
              style={{
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.06)"
              }}
              variants={itemVariants}
              custom={3 + i * 0.3}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent dark:from-white/10"
                variants={pulseVariants}
                animate="pulse"
                style={{ animationDelay: `${i * 0.7}s` }}
              />
            </motion.div>
          ))}


          <svg
            className="absolute inset-0 w-full h-full z-[-1]"
            viewBox="0 0 320 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            {[
              { d: "M160 160 L80 80", color: "text-indigo-300/60 dark:text-indigo-700/60" },
              { d: "M160 160 L240 100", color: "text-rose-300/60 dark:text-rose-700/60" },
              { d: "M160 160 L100 220", color: "text-violet-300/60 dark:text-violet-700/60" }
            ].map((line, i) => (
              <motion.path
                key={i}
                d={line.d}
                stroke="currentColor"
                className={line.color}
                strokeWidth="1.5"
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: 0.8,
                  transition: {
                    delay: 1 + i * 0.3,
                    duration: 1.5,
                    ease: "easeInOut"
                  }
                }}
              />
            ))}
          </svg>
        </div>


        <motion.h2
          className="text-2xl font-semibold tracking-tight mb-3 text-black dark:text-white"
          variants={itemVariants}
          custom={4}
        >
          No conversations yet!
        </motion.h2>

        <motion.p
          className="text-neutral-600 dark:text-neutral-300 mb-8 max-w-sm leading-relaxed"
          variants={itemVariants}
          custom={5}
        >
          Your chat history will appear here. Start a conversation to collaborate, share ideas, or get assistance.
        </motion.p>
        <motion.div
          className="relative group"
          variants={itemVariants}
          custom={6}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-lg blur opacity-75 dark:opacity-60 group-hover:opacity-100 group-hover:dark:opacity-80 transition duration-300"></div>
          <Button
            size="lg"
            className="relative rounded-xl px-8 py-6 bg-white hover:bg-white dark:bg-black dark:hover:bg-black text-black dark:text-white  border border-transparent flex items-center gap-2  transition-shadow duration-300"
          >
            <MessageSquarePlus className="w-5 h-5 text-indigo-600 dark:text-rose-400" />
            <span className="font-medium">Start a new conversation</span>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}