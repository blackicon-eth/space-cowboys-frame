"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RedirectPage() {
  /*const router = useRouter();

  useEffect(() => {
    const youtubeUrl = "https://www.youtube.com/watch?v=Ru_H5PiyfSA";

    // Perform the redirect
    window.location.href = youtubeUrl; // For a full page reload redirect
    // Or use Next.js router for client-side redirect (comment out the line above if using this)
    // router.push(youtubeUrl);
  }, [router]);*/

  return (
    <div>
      <p>You&apos;re gonna carry that weight.</p>
    </div>
  );
}
