import Image from "next/image"

const botCategories = [
  {
    title: "For You",
    bots: [
      {
        name: "AI Assistant",
        description: "Your personal AI helper for various tasks",
        image: "https://github.com/github.png",
      },
      { name: "Code Buddy", description: "Assists with coding and debugging", image: "https://github.com/google.png" },
      {
        name: "Data Analyst",
        description: "Helps analyze and visualize complex data",
        image: "https://github.com/microsoft.png",
      },
      {
        name: "Image Creator",
        description: "Generates images from text descriptions",
        image: "https://github.com/openai.png",
      },
    ],
  },
  {
    title: "Featured",
    bots: [
      {
        name: "Language Tutor",
        description: "Helps you learn new languages",
        image: "https://github.com/duolingo.png",
      },
      {
        name: "Music Composer",
        description: "Creates original music in various styles",
        image: "https://github.com/spotify.png",
      },
      {
        name: "Fitness Trainer",
        description: "Personalized workout and nutrition plans",
        image: "https://github.com/fitbit.png",
      },
      {
        name: "Story Writer",
        description: "Helps create engaging stories and narratives",
        image: "https://github.com/medium.png",
      },
    ],
  },
  {
    title: "New Arrivals",
    bots: [
      {
        name: "Travel Planner",
        description: "Plans your perfect trip itinerary",
        image: "https://github.com/airbnb.png",
      },
      {
        name: "Recipe Generator",
        description: "Creates custom recipes based on your preferences",
        image: "https://github.com/foodnetwork.png",
      },
      {
        name: "Financial Advisor",
        description: "Provides personalized financial advice and planning",
        image: "https://github.com/robinhood.png",
      },
      {
        name: "Virtual Interior Designer",
        description: "Helps design and visualize interior spaces",
        image: "https://github.com/houzz.png",
      },
    ],
  },
]

export default function ExploreBots() {
  return (
    <div className="w-full bg-white dark:bg-black font-sans">
      <div className="max-w-7xl mx-auto py-8">
        <h2 className="text-2xl mb-4 text-neutral-800 dark:text-neutral-200">Explore Bots</h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-2xl mb-12">
          Discover a wide range of AI-powered bots to assist you with various tasks and enhance your productivity.
        </p>

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-6 w-[2px] bg-neutral-200 dark:bg-neutral-700" />
          {botCategories.map((category, index) => (
            <div key={index} className="mb-12 pl-12">
              <div className="flex items-center mb-6 -ml-12">
                <div className="h-10 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center mr-4 z-10">
                  <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-neutral-800 dark:text-neutral-200">
                  {category.title}
                </h3>
              </div>
              <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                <div className="flex space-x-4 pb-4">
                  {category.bots.map((bot, botIndex) => (
                    <div
                      key={botIndex}
                      className="bg-neutral-100 dark:bg-neutral-900 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex-shrink-0 w-72 flex"
                    >
                      <div className="relative w-24 flex-shrink-0">
                        <Image src={bot.image || "/placeholder.svg"} alt={bot.name} layout="fill" objectFit="cover" />
                      </div>
                      <div className="p-4 flex-grow">
                        <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                          {bot.name}
                        </h4>
                        <p className="text-sm text-neutral-700 dark:text-neutral-300 line-clamp-2">{bot.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

