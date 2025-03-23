
"use client"

import { Button } from "@/components/ui/button"
import { MessageSquarePlus } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function EmptyChatHistory() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => {}
  }, [])

  // Animation variants
  const containerVariants = {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.23, 0.86, 0.39, 0.96] }
    }
  }

  const leftChatVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.23, 0.86, 0.39, 0.96] 
      }
    }
  }
  
  const rightChatVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.23, 0.86, 0.39, 0.96] 
      }
    }
  }

  const textLineVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: custom => ({
      opacity: 1, 
      width: "100%",
      transition: { 
        delay: custom * 0.15, 
        duration: 0.5, 
        ease: "easeInOut" 
      }
    })
  }

  const floatVariants = {
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

  const pulseVariants = {
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
          {/* Left chat bubble */}
          <motion.div
            className="absolute left-4 top-12 h-36 w-52 rounded-2xl overflow-hidden p-4"
            style={{
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

          {/* Right chat bubble */}
          <motion.div
            className="absolute right-4 top-40 h-32 w-44 rounded-2xl overflow-hidden p-4"
            style={{
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
          </motion.div>

          {/* Decorative elements */}
          {[
            { pos: "left-24 top-0", size: "h-12 w-12", delay: 1.2, color: "bg-indigo-50 dark:bg-indigo-950", border: "border-indigo-200/50 dark:border-indigo-800/50" },
            { pos: "right-8 top-12", size: "h-8 w-8", delay: 1.4, color: "bg-rose-50 dark:bg-rose-950", border: "border-rose-200/50 dark:border-rose-800/50" },
            { pos: "left-12 bottom-4", size: "h-10 w-10", delay: 1.6, color: "bg-violet-50 dark:bg-violet-950", border: "border-violet-200/50 dark:border-violet-800/50" }
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

          {/* Connection lines */}
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

        {/* Content */}
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
          variants={itemVariants}
          custom={6}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <Button
            size="lg"
            className="group relative overflow-hidden px-8 py-6 text-white shadow-lg"
            style={{
              background: "linear-gradient(to right, #4F46E5, #6366F1)",
              boxShadow: "0 8px 24px rgba(79, 70, 229, 0.15), 0 0 0 1px rgba(79, 70, 229, 0.1)"
            }}
          >
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-indigo-500/10"
              initial={{ opacity: 0, x: -100 }}
              whileHover={{ opacity: 1, x: 200 }}
              transition={{ duration: 0.8 }}
            />
            
            <div className="flex items-center gap-2 relative z-10">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 500, damping: 10 }}
              >
                <MessageSquarePlus className="h-5 w-5" />
              </motion.div>
              <span className="font-medium">Start a new conversation</span>
            </div>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}