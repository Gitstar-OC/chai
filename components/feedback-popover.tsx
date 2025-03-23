

"use client"

import { Send } from "lucide-react"
import { useState, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

export function FeedbackPopover() {
  const [open, setOpen] = useState(false)
  const [feedback, setFeedback] = useState("")
  const [formState, setFormState] = useState<"input" | "loading" | "success">("input")
  const ref = useRef(null)

  const submit = async () => {
    setFormState("loading")

    await new Promise((resolve) => setTimeout(resolve, 1500))

    setFormState("success")

    setTimeout(() => {
      setOpen(false)
      setTimeout(() => {
        setFeedback("")
        setFormState("input")
      }, 300)
    }, 2000)
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <SidebarMenuButton
              size="md"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Send className="h-4 w-4 mr-2" />
              <span className="flex-1 text-left text-sm">Feedback</span>
            </SidebarMenuButton>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-0 overflow-hidden rounded-lg border shadow-lg" align="start">
            <AnimatePresence mode="wait">
              {open && (
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative"
                >
                  <AnimatePresence mode="wait">
                    {formState === "success" ? (
                      <motion.div
                        key="success"
                        initial={{ y: -32, opacity: 0, filter: "blur(4px)" }}
                        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        transition={{ type: "spring", duration: 0.4, bounce: 0 }}
                        className="flex flex-col items-center justify-center gap-3 p-8"
                      >
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20 6L9 17L4 12"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <h3 className="text-lg font-medium">Thank you!</h3>
                        <p className="text-sm text-muted-foreground text-center">
                          Your feedback has been received and will help us improve.
                        </p>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                        transition={{ type: "spring", duration: 0.4, bounce: 0 }}
                        className="flex flex-col"
                        onSubmit={(e) => {
                          e.preventDefault()
                          submit()
                        }}
                      >
                        <textarea
                          autoFocus
                          placeholder="Tell us how can we make CHAI better?"
                          value={feedback}
                          onChange={(e) => setFeedback(e.target.value)}
                          className="w-full min-h-[140px] border-0 border-b bg-background px-4 py-3 text-sm resize-none focus-visible:outline-none focus-visible:ring-0"
                          required
                        />

                        <div className="flex justify-end p-4 bg-neutral-50 dark:bg-neutral-900">
                          <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 rounded-md blur opacity-60 group-hover:opacity-100 transition-all duration-300"></div>
                            <Button
                              size="sm"
                              type="submit"
                              disabled={formState === "loading"}
                              className={cn(
                                "relative h-8 text-sm min-w-[120px]",
                                "bg-background hover:bg-backgro dark:bg-background  dark:hover:bg-background/90 text-foreground border border-input",
                                "transition-all duration-300 ",
                              )}
                            >
                              <AnimatePresence mode="popLayout" initial={false}>
                                <motion.span
                                  key={formState}
                                  transition={{
                                    type: "spring",
                                    duration: 0.3,
                                    bounce: 0,
                                  }}
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: 10 }}
                                  className="flex items-center justify-center"
                                >
                                  {formState === "loading" ? (
                                    <svg
                                      className="animate-spin h-4 w-4 text-current"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                    >
                                      <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                      ></circle>
                                      <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                      ></path>
                                    </svg>
                                  ) : (
                                    "Send feedback"
                                  )}
                                </motion.span>
                              </AnimatePresence>
                            </Button>
                          </div>
                        </div>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </PopoverContent>
        </Popover>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

