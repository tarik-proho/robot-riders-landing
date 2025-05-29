"use client"

import Hero from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import FluidCursor from "@/components/fluid-cursor";
import { Cards } from "@/components/sections/cards";

export default function Home() {
  return (
    <>
      <FluidCursor />
      <Hero />
      <Features />
      <Cards />
    </>
  )
}
