"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Unhandled page error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h2 className="text-2xl font-black text-secondary mb-3">
        Something went wrong
      </h2>
      <p className="text-muted-foreground mb-6 max-w-sm">
        We hit an unexpected error. Try refreshing the page or{" "}
        <a href="/" className="text-primary underline">
          go back home
        </a>
        .
      </p>
      <button
        type="button"
        onClick={reset}
        className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-primary/90 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
