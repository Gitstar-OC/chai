import Home from "@/components/home";

export default function Page() {
  return (
    <main className="relative">
      <Home />
    </main>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home / CHAI ",
  description: "Welcome to CHAI - Your AI conversation platform",
};
