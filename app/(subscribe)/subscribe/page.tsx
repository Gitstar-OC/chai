"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Check, Sparkles, X } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function SubscriptionPage() {
  const router = useRouter()
  const [billingCycle, setBillingCycle] = React.useState<"monthly" | "weekly">("monthly")
  const tabsRef = React.useRef<HTMLDivElement>(null)
  const monthlyTabRef = React.useRef<HTMLButtonElement>(null)
  const [referrerIsEmpty, setReferrerIsEmpty] = React.useState(true);
  const weeklyTabRef = React.useRef<HTMLButtonElement>(null)
  const [indicatorStyle, setIndicatorStyle] = React.useState({
    left: 0,
    width: 0,
  })
  const [isLoaded, setIsLoaded] = React.useState(false)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.23, 0.86, 0.39, 0.96],
      },
    },
  }


React.useEffect(() => {

  setReferrerIsEmpty(!document.referrer);
}, []);

const handleGoBack = () => {
  if (referrerIsEmpty) {
    router.push("/");
  } else {
    router.back();
  }
}

  const updateIndicator = React.useCallback(() => {
    const activeTab = billingCycle === "monthly" ? monthlyTabRef.current : weeklyTabRef.current
    if (!activeTab || !tabsRef.current) return

    const tabRect = activeTab.getBoundingClientRect()
    const containerRect = tabsRef.current.getBoundingClientRect()

    setIndicatorStyle({
      left: tabRect.left - containerRect.left,
      width: tabRect.width,
    })

    if (!isLoaded) {
      setIsLoaded(true)
    }
  }, [billingCycle, isLoaded])

  React.useEffect(() => {
    const timer = setTimeout(() => {
      updateIndicator()
    }, 0)

    window.addEventListener("resize", updateIndicator)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("resize", updateIndicator)
    }
  }, [updateIndicator])

  React.useEffect(() => {
    updateIndicator()
  }, [billingCycle, updateIndicator])

  const handleTabChange = (cycle: "monthly" | "weekly") => {
    if (cycle === billingCycle) return
    setBillingCycle(cycle)
  }

  // const handleGoBack = () => {
  //   router.back()
  // }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-background py-8 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-rose-500/[0.02] pointer-events-none" />

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        onClick={handleGoBack}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2 rounded-full bg-white/80 dark:bg-black/50 hover:bg-white dark:hover:bg-black/70 shadow-sm border border-neutral-200 dark:border-neutral-800 transition-all duration-200"
        aria-label="Go back"
      >
        <X className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
      </motion.button>

      <motion.div
        className="container max-w-4xl px-6 py-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        <div className="mb-8 text-center">
          <motion.h1 variants={fadeIn} className="text-3xl sm:text-4xl font-bold mb-3 text-foreground">
            Upgrade Your Experience
          </motion.h1>
          <motion.p variants={fadeIn} className="text-base text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works best for you
          </motion.p>
        </div>

        <div className="flex flex-col gap-8">
          <motion.div variants={fadeIn} className="flex items-center justify-center">
            <div
              ref={tabsRef}
              className="relative w-full max-w-xs p-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 shadow-inner"
            >
              <div
                className={cn(
                  "absolute top-1.5 bottom-1.5 rounded-full bg-black dark:bg-white transition-all duration-300 ease-out",
                  isLoaded ? "opacity-100" : "opacity-0",
                )}
                style={{
                  left: `${indicatorStyle.left}px`,
                  width: `${indicatorStyle.width}px`,
                }}
              />

              <div className="relative flex w-full">
                <button
                  ref={monthlyTabRef}
                  role="tab"
                  aria-selected={billingCycle === "monthly"}
                  onClick={() => handleTabChange("monthly")}
                  className={cn(
                    "flex-1 py-2 px-4 text-sm font-medium rounded-full relative z-10 transition-colors duration-200",
                    billingCycle === "monthly"
                      ? "text-white dark:text-black"
                      : "text-neutral-600 dark:text-neutral-400",
                  )}
                >
                  Monthly
                  <span className="absolute top-0 -right-1 transform -translate-y-1/2 translate-x-1/4 bg-indigo-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full z-20">
                    -30%
                  </span>
                </button>
                <button
                  ref={weeklyTabRef}
                  role="tab"
                  aria-selected={billingCycle === "weekly"}
                  onClick={() => handleTabChange("weekly")}
                  className={cn(
                    "flex-1 py-2 px-4 text-sm font-medium rounded-full relative z-10 transition-colors duration-200",
                    billingCycle === "weekly" ? "text-white dark:text-black" : "text-neutral-600 dark:text-neutral-400",
                  )}
                >
                  Weekly
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <PlanCard
              name="premium"
              price={billingCycle === "monthly" ? "$13.99" : "$4.99"}
              cycle={billingCycle === "monthly" ? "month" : "week"}
              features={["Unlimited messages", "Unlimited bots", "Access to Web", "No ads"]}
            />
            <PlanCard
              name="ultra"
              price={billingCycle === "monthly" ? "$29.99" : "$9.99"}
              cycle={billingCycle === "monthly" ? "month" : "week"}
              features={[
                "5x Better memory",
                "2x Longer Reply",
                "More intelligent",
                "Unlimited messages",
                "Unlimited bots",
                "Access to Web",
                "No ads",
              ]}
              highlighted
            />
          </motion.div>

          <motion.div variants={fadeIn} className="text-center text-sm text-muted-foreground flex flex-col gap-1.5">
            <p>All plans include a 7-day free trial. Cancel anytime.</p>
            <p>
              Need help?{" "}
              <Link href="/help" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">
                Contact our support team
              </Link>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

function PlanCard({
  name,
  price,
  cycle,
  features,
  highlighted = false,
}: {
  name: string
  price: string
  cycle: string
  features: string[]
  highlighted?: boolean
}) {
  return (
    <motion.div
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className={cn(
        "flex flex-col p-5 sm:p-6 rounded-xl border transition-all duration-300 h-full justify-between",
        highlighted
          ? "border-indigo-200 bg-gradient-to-br from-indigo-50/50 to-rose-50/30 dark:border-indigo-800/40 dark:from-indigo-950/30 dark:to-rose-950/20 shadow-md"
          : "border-border bg-white/40 dark:bg-black/20 hover:bg-white/60 dark:hover:bg-black/30 shadow-sm",
      )}
    >
      <div className="mb-6 relative">
        {highlighted && (
          <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-full blur opacity-40 animate-pulse"></div>
              <div className="relative bg-white dark:bg-black p-1.5 rounded-full">
                <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-indigo-500 dark:text-indigo-400" />
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center space-x-2 mb-2">
          <h3
            className={cn(
              "text-xl sm:text-2xl font-bold capitalize",
              highlighted
                ? "bg-gradient-to-r from-indigo-700 to-rose-600 dark:from-indigo-400 dark:to-rose-400 bg-clip-text text-transparent"
                : "",
            )}
          >
            {name}
          </h3>
          {highlighted && (
            <span className="bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 text-xs font-medium px-2 py-0.5 rounded-full">
              Recommended
            </span>
          )}
        </div>

        <div className="flex items-baseline mt-3">
          <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-br from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-300 bg-clip-text text-transparent">
            {price}
          </span>
          <span className="text-sm text-muted-foreground ml-2">/ {cycle}</span>
        </div>
      </div>

      <div className="relative group mb-6">
        {highlighted ? (
          <>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-xl blur opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
            <Button className="relative bg-white hover:bg-white/90 dark:bg-black dark:hover:bg-black/90 text-black dark:text-white border border-transparent w-full font-medium text-sm sm:text-base py-2.5 sm:py-3 transition-colors duration-200 rounded-xl">
              Start Free Trial
            </Button>
          </>
        ) : (
          <Button
            variant="outline"
            className="w-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-neutral-300/30 dark:border-neutral-700/40 text-sm sm:text-base py-2.5 sm:py-3 transition-colors duration-200 rounded-xl"
          >
            Start Free Trial
          </Button>
        )}
      </div>

      <ul className="space-y-3 flex-1">
        {features.map((feature, i) => (
          <motion.li
            key={i}
            className="flex items-start"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
          >
            <div
              className={cn(
                "flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center mr-2.5 mt-0.5",
                highlighted ? "bg-gradient-to-br from-indigo-500 to-rose-500" : "bg-neutral-200 dark:bg-neutral-800",
              )}
            >
              <Check className={cn("h-3 w-3", highlighted ? "text-white" : "text-neutral-700 dark:text-neutral-300")} />
            </div>
            <span className="text-sm sm:text-base">{feature}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}
