import React from "react";

export default function HeroIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-140 select-none">
      {/* Main Illustration */}
      <svg
        viewBox="0 0 500 500"
        className="absolute inset-0 h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="250" cy="250" r="244" fill="#D1EBF2" />

        <circle cx="250" cy="250" r="205" fill="#40B7D2" />

        <circle cx="250" cy="250" r="150" fill="#117F96" />

        <circle cx="250" cy="250" r="120" fill="#D1E8ED" />

        <path
          d="M 246 103
             A 147 147 0 0 1 246 397
             A 119 119 0 0 0 246 103 Z"
          fill="#117F96"
        />

        <path
          d="M 246 103
             A 147 147 0 0 1 246 397
             A 119 119 0 0 0 246 103 Z"
          fill="#073E49"
          transform="translate(-10 -3)"
        />

        <path
          d="M 246 103
             A 147 147 0 0 1 246 397
             A 119 119 0 0 0 246 103 Z"
          fill="#073E49"
          transform="translate(-10 -3) rotate(-35 250 250)"
        />

        <circle cx="292" cy="245" r="83" fill="#D1DADD" />

        <path
          d="M 247 184
             A 78 78 0 1 0 291 317
             A 68 68 0 0 1 247 184 Z"
          fill="#073E49"
        />
      </svg>

      {/* Floating Squares */}
      <div className="absolute -right-2 top-0 h-7 w-7 rounded-md bg-[#40B7D2]" />
      <div className="absolute -right-5 top-[17%] h-3.5 w-3.5 rounded-md bg-[#40B7D2]" />
      <div className="absolute -right-1 top-[10%] h-5 w-5 rounded-md bg-[#40B7D2]" />
      <div className="absolute right-[6%] top-[18%] h-3 w-3 rounded-md bg-[#40B7D2]" />

      {/* Top Card */}
      <div className="absolute left-[7%] top-[13%] flex w-[55%] items-center gap-3 rounded-[22px] border border-[#D8EAF0] bg-white p-4 shadow-sm sm:p-5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D1EBF2]">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 text-[#1489A2]"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" />
          </svg>
        </div>

        <div className="min-w-0">
          <h3 className="text-sm font-bold text-[#073E49] sm:text-base">
            Skill up
          </h3>
          <p className="mt-1 text-xs text-[#78929C] sm:text-base">Every day</p>
        </div>
      </div>

      {/* Bottom Card */}
      <div className="absolute bottom-[4%] right-0 flex w-[53%] items-center gap-3 rounded-[22px] border border-[#D8EAF0] bg-white p-4 shadow-sm sm:p-5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D7F3EA]">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 text-[#168A78]"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m5 12 4 4L19 6" />
          </svg>
        </div>

        <div className="min-w-0">
          <h3 className="whitespace-nowrap text-sm font-bold text-[#073E49] sm:text-base">
            Keep growing
          </h3>
          <p className="mt-1 text-[10px] text-[#78929C] sm:text-sm">
            One lesson at a time
          </p>
        </div>
      </div>
    </div>
  );
}
