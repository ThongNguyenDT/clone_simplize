"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/shadcn/button"

let i = true;

export default function ModeToggle() {
  const { setTheme } = useTheme()
  const handleClick = () => {
    i = !i
    i? setTheme("light") : setTheme("dark");
  }

  return (
    <Button variant="ghost" size="icon" onClick={handleClick}>
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
