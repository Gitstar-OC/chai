import type { Metadata } from 'next';
import CreateCharacter from "@/components/create";

export const metadata: Metadata = {
  title: 'Create',
  description: 'Create new AI bots on CHAI'
};

export default function Page() {
  return (
    <main className="relative">
      <CreateCharacter />
    </main>
  );
}
