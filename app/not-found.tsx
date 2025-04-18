import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container flex h-screen flex-col items-center justify-center">
      <div className="mx-auto flex max-w-[500px] flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-serif font-bold tracking-tight text-[#1E1A18] dark:text-[#E6D3AF] sm:text-5xl">
          404
        </h1>
        <h2 className="mt-4 text-xl font-serif font-semibold tracking-tight text-[#5B402D] dark:text-[#D9C4A3] sm:text-2xl">
          Page Not Found
        </h2>
        <p className="mt-4 text-[#5B402D] dark:text-[#D9C4A3]">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
        </p>
        <div className="mt-8">
          <Link href="/">
            <Button className="bg-[#5B402D] text-[#E6D3AF] hover:bg-[#5B402D]/90 font-work-sans">
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
