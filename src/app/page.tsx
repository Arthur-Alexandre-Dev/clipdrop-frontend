"use client";

import { YouTubeDownloader } from "@/components/YouTubeDownloader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <YouTubeDownloader />
    </main>
  );
}
