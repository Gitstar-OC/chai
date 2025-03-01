import { Search } from "lucide-react"

export default function Home() {

  return (
    <main className="flex flex-col items-center pt-10 bg-background">
          <div className="w-full max-w-xl">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-neutral-500 dark:text-neutral-400">
                <Search className="h-5 w-5" />
              </div>
              <input
                type="search"
                className="w-full p-3 pl-10 text-sm text-neutral-900 dark:text-white 
                border rounded-md border-neutral-200 dark:border-neutral-700 
                bg-white dark:bg-black  transition-shadow duration-200
                focus:outline-none focus:ring-1 focus:ring-neutral-400 dark:focus:ring-neutral-500 focus:border-neutral-400 dark:focus:border-neutral-500"
                placeholder="Search for bots"
                aria-label="Search for Bots"
              />
            </div>
          </div>
    </main>
  )
}

