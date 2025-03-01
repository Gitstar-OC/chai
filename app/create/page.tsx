"use client"

import type React from "react"

import { useState } from "react"
import { Pencil, Globe, Lock } from "lucide-react"
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

            <div className="space-y-2">
              <Label className="text-foreground/80">Visibility</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start bg-background border-input text-foreground">
                    {visibility === "public" ? (
                      <>
                        <Globe className="mr-2 h-4 w-4" />
                        <span>Public</span>
                      </>
                    ) : (
                      <>
                        <Lock className="mr-2 h-4 w-4" />
                        <span>Private</span>
                      </>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-48 bg-popover border-input">
                  <RadioGroup value={visibility} onValueChange={setVisibility}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="public" id="public" />
                      <Label htmlFor="public">Public</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="private" id="private" />
                      <Label htmlFor="private">Private</Label>
                    </div>
                  </RadioGroup>
                </PopoverContent>
              </Popover>
            </div>

            <Button className="w-full bg-primary text-primary-foreground h-12 hover:bg-primary/90">
              Create Chat AI
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

