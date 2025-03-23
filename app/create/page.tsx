"use client"

import type React from "react"

import { useState } from "react"
import { Pencil, Globe, Lock, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"

export default function CharacterCreation() {
  const [name, setName] = useState("")
  const [tagline, setTagline] = useState("")
  const [description, setDescription] = useState("")
  const [firstMessage, setFirstMessage] = useState("")
  const [personality, setPersonality] = useState("")
  const [visibility, setVisibility] = useState("public")
  const [avatar, setAvatar] = useState<string | null>(null)

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setAvatar(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-2xl mx-auto">
        <div className="space-y-12">
          <div className="flex justify-center">
            <div className="relative">
              <div
                className={cn(
                  "w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500",
                  "flex items-center justify-center cursor-pointer",
                )}
                onClick={() => document.getElementById("avatar-input")?.click()}
              >
                {avatar ? (
                  <img
                    src={avatar || "/placeholder.svg"}
                    alt="Character avatar"
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : null}
                <Pencil className="h-6 w-6 text-white absolute bottom-2 right-2" />
              </div>
              <input type="file" id="avatar-input" className="hidden" accept="image/*" onChange={handleAvatarChange} />
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground/80">
                Character name
              </Label>
              <div className="relative">
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value.slice(0, 20))}
                  placeholder="e.g. Albert Einstein"
                  className="bg-background border-input text-foreground h-12 pr-16 focus:ring-1 focus:ring-ring"
                  maxLength={20}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                  {name.length}/20
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tagline" className="text-foreground/80">
                Tagline
              </Label>
              <div className="relative">
                <Input
                  id="tagline"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value.slice(0, 50))}
                  placeholder="Add a short tagline of your Character"
                  className="bg-background border-input text-foreground h-12 pr-16 focus:ring-1 focus:ring-ring"
                  maxLength={50}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                  {tagline.length}/50
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-foreground/80">
                Description
              </Label>
              <div className="relative">
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value.slice(0, 500))}
                  placeholder="How would your Character describe themselves?"
                  className="bg-background border-input text-foreground min-h-[120px] pr-16 resize-none focus:ring-1 focus:ring-ring"
                  maxLength={500}
                />
                <span className="absolute right-3 bottom-3 text-sm text-muted-foreground">
                  {description.length}/500
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="firstMessage" className="text-foreground/80">
                First Message
              </Label>
              <div className="relative">
                <Textarea
                  id="firstMessage"
                  value={firstMessage}
                  onChange={(e) => setFirstMessage(e.target.value.slice(0, 2048))}
                  placeholder="e.g. Hello, I am Albert. Ask me anything about my scientific contributions."
                  className="bg-background border-input text-foreground min-h-[100px] pr-16 resize-none focus:ring-1 focus:ring-ring"
                  maxLength={2048}
                />
                <span className="absolute right-3 bottom-3 text-sm text-muted-foreground">
                  {firstMessage.length}/2048
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="personality" className="text-foreground/80">
                Personality
              </Label>
              <div className="relative">
                <Input
                  id="personality"
                  value={personality}
                  onChange={(e) => setPersonality(e.target.value)}
                  placeholder="Describe the personality traits"
                  className="bg-background border-input text-foreground h-12 focus:ring-1 focus:ring-ring"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-8">
              <div className="flex justify-start">
                <div className="flex flex-col space-y-3 w-full md:w-1/2">
                  <Label className="text-foreground/80 text-sm font-medium">Visibility</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-between bg-background border-input text-foreground hover:bg-accent/30 focus-visible:ring-2 focus-visible:ring-ring transition-all group"
                      >
                        <span className="flex items-center">
                          {visibility === "public" ? (
                            <>
                              <Globe className="mr-2 h-4 w-4 text-emerald-500" />
                              <span>Public</span>
                            </>
                          ) : (
                            <>
                              <Lock className="mr-2 h-4 w-4 text-amber-500" />
                              <span>Private</span>
                            </>
                          )}
                        </span>
                        <ChevronDown className="h-4 w-4 text-foreground/60 group-hover:text-foreground/80 transition-colors ml-2" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-72 bg-popover border border-input rounded-lg shadow-lg p-0 overflow-hidden">
                      <div className="p-3 border-b border-border">
                        <h4 className="font-medium text-sm">Who can see your character?</h4>
                        <p className="text-xs text-muted-foreground mt-1">Choose who can discover and chat with your AI character</p>
                      </div>
                      <RadioGroup value={visibility} onValueChange={setVisibility} className="p-1">
                        <div
                          onClick={() => setVisibility("public")}
                          className={`flex items-start space-x-3 p-3 rounded-md cursor-pointer transition-colors ${visibility === "public" ? "bg-accent/50" : "hover:bg-accent/30"}`}
                        >
                          <RadioGroupItem value="public" id="public" className="mt-1 text-emerald-500" />
                          <div className="space-y-1.5">
                            <div className="flex items-center">
                              <span className="text-foreground font-medium">
                                Public
                              </span>
                              <span className="ml-2 text-xs py-0.5 px-2 bg-emerald-500/10 text-emerald-500 rounded-full">Recommended</span>
                            </div>
                            <p className="text-xs text-muted-foreground">Your character will appear in search results and be available for anyone to chat with</p>
                          </div>
                        </div>

                        <div
                          onClick={() => setVisibility("private")}
                          className={`flex items-start space-x-3 p-3 rounded-md cursor-pointer transition-colors ${visibility === "private" ? "bg-accent/50" : "hover:bg-accent/30"}`}
                        >
                          <RadioGroupItem value="private" id="private" className="mt-1 text-amber-500" />
                          <div className="space-y-1.5">
                            <span className="text-foreground font-medium">
                              Private
                            </span>
                            <p className="text-xs text-muted-foreground">Your character will only be visible to you and people you share the link with</p>
                          </div>
                        </div>
                      </RadioGroup>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* Create Chat AI Button Section */}
              <div className="flex justify-end pt-4">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 rounded-xl blur opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Button
                    size="lg"
                    className="relative px-10 py-5 bg-background hover:bg-background/95 text-foreground rounded-xl border border-input shadow-md flex items-center justify-center gap-2 font-semibold text-base transition-transform group-hover:scale-105"
                  >
                    <span>Create Chat AI</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

