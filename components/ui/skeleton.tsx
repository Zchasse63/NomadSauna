import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-[#E6D3AF]/20 dark:bg-[#1E1A18]/20",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
