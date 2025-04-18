import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-24 mt-16">
      <div className="max-w-4xl mx-auto">
        {/* Header skeleton */}
        <Skeleton className="h-12 w-3/4 mb-6" />
        <Skeleton className="h-6 w-full mb-12" />
        
        {/* Content skeleton */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <Skeleton className="h-8 w-1/2 mb-4" />
            <Skeleton className="h-64 w-full rounded-lg" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/6" />
            </div>
          </div>
          
          <div className="space-y-6">
            <Skeleton className="h-8 w-1/2 mb-4" />
            <div className="space-y-4">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-36 w-full" />
              <Skeleton className="h-12 w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
