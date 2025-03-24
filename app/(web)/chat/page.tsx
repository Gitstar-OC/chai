import type { Metadata } from "next";
import ChatHistory from "@/components/chat";

export const metadata: Metadata = {
  title: "Chats",
  description: "View and manage your AI conversations on CHAI",
};

export default function Page() {
  return (
    <main className="relative">
      <ChatHistory />
    </main>
  );
}
