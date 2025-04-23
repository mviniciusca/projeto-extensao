interface BackgroundGradientProps {
  className?: string;
}

export function BackgroundGradient({ className }: BackgroundGradientProps) {
  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden ${className}`}>
      <svg
        className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-zinc-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] dark:stroke-zinc-700"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="pattern-circles"
            x="50%"
            y="-1"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
            patternTransform="translate(0 0)"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth="0" fill="url(#pattern-circles)" />
      </svg>

      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[10%]">
        <div className="h-[50rem] w-[50rem] opacity-[0.15] dark:opacity-[0.05]">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full blur-[7rem]" />
        </div>
      </div>
    </div>
  );
}