import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-accent">
        404
      </p>
      <h1 className="mt-3 text-[32px] font-semibold tracking-[-0.02em] text-fg">
        Page Not Found
      </h1>
      <p className="mt-3 max-w-md text-fg-muted">
        The page you are looking for does not exist or has been moved.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
