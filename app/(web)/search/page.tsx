import type { Metadata } from "next";
import SearchPage from "@/components/search";

export const metadata: Metadata = {
  title: "Search",
  description: "Search or explore models or topics on CHAI",
};

export default function Page() {
  return (
    <main className="relative">
      <SearchPage />
    </main>
  );
}
