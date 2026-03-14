import { Skeleton } from "@/components/ui/skeleton";

/* ─── Dashboard skeleton ─── */
export const DashboardSkeleton = () => (
  <div className="space-y-5 animate-in fade-in duration-300">
    {/* Greeting */}
    <div className="flex items-center justify-between">
      <div className="space-y-2">
        <Skeleton className="h-4 w-36" />
        <Skeleton className="h-3 w-52" />
      </div>
      <Skeleton className="h-[52px] w-[52px] rounded-full" />
    </div>

    {/* Hero card */}
    <Skeleton className="h-48 w-full rounded-3xl" />

    {/* Alert banners */}
    <div className="space-y-2">
      <Skeleton className="h-20 w-full rounded-2xl" />
      <Skeleton className="h-20 w-full rounded-2xl" />
    </div>

    {/* Action strip */}
    <div className="flex gap-2.5 overflow-hidden">
      <Skeleton className="h-16 w-52 rounded-2xl flex-shrink-0" />
      <Skeleton className="h-16 w-52 rounded-2xl flex-shrink-0" />
      <Skeleton className="h-16 w-44 rounded-2xl flex-shrink-0" />
    </div>

    {/* Collapsible */}
    <Skeleton className="h-12 w-full rounded-2xl" />

    {/* Cards */}
    <Skeleton className="h-16 w-full rounded-2xl" />
    <Skeleton className="h-16 w-full rounded-2xl" />
  </div>
);

/* ─── Meal card skeleton ─── */
export const MealCardSkeleton = () => (
  <div className="rounded-2xl border bg-card p-4.5 shadow-card">
    <div className="flex items-start justify-between gap-4">
      <div className="flex-1 space-y-3">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
        <div className="flex gap-4">
          <Skeleton className="h-4 w-14" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-10" />
        </div>
        <div className="flex gap-1.5">
          <Skeleton className="h-5 w-20 rounded-full" />
          <Skeleton className="h-5 w-24 rounded-full" />
        </div>
      </div>
      <Skeleton className="h-16 w-14 rounded-xl" />
    </div>
  </div>
);

/* ─── Meal list skeleton ─── */
export const MealListSkeleton = ({ count = 4 }: { count?: number }) => (
  <div className="space-y-2.5">
    {Array.from({ length: count }).map((_, i) => (
      <MealCardSkeleton key={i} />
    ))}
  </div>
);

/* ─── Trend cards skeleton ─── */
export const TrendGridSkeleton = () => (
  <div className="grid grid-cols-2 gap-2.5">
    {Array.from({ length: 4 }).map((_, i) => (
      <div key={i} className="rounded-2xl border bg-card p-4 shadow-card space-y-2">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-7 w-20" />
        <Skeleton className="h-3 w-24" />
      </div>
    ))}
  </div>
);

/* ─── Weekly chart skeleton ─── */
export const WeeklyChartSkeleton = () => (
  <div className="rounded-2xl border bg-card p-5 shadow-card">
    <div className="flex items-center justify-between mb-4">
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-3 w-28" />
    </div>
    <div className="flex items-end justify-between gap-2 h-28">
      {Array.from({ length: 7 }).map((_, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
          <Skeleton className="h-3 w-5" />
          <Skeleton className="w-full rounded-lg" style={{ height: `${30 + Math.random() * 60}%` }} />
          <Skeleton className="h-3 w-3" />
        </div>
      ))}
    </div>
  </div>
);

/* ─── Progress page skeleton ─── */
export const ProgressSkeleton = () => (
  <div className="space-y-5 animate-in fade-in duration-300">
    <div className="space-y-1.5">
      <Skeleton className="h-3 w-28" />
      <Skeleton className="h-8 w-40" />
    </div>
    <TrendGridSkeleton />
    <WeeklyChartSkeleton />
    <div className="space-y-2">
      <Skeleton className="h-3 w-24" />
      <Skeleton className="h-20 w-full rounded-2xl" />
      <Skeleton className="h-20 w-full rounded-2xl" />
      <Skeleton className="h-20 w-full rounded-2xl" />
    </div>
    <div className="rounded-2xl border bg-card p-5 shadow-card space-y-3.5">
      <Skeleton className="h-4 w-44" />
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <Skeleton className="h-8 w-8 rounded-lg" />
          <Skeleton className="h-4 flex-1" />
          <Skeleton className="h-4 w-10" />
        </div>
      ))}
    </div>
  </div>
);
