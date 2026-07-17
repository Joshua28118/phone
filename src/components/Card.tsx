import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div
      className="
        w-full max-w-lg
        bg-[#141417]
        border border-white/[0.06]
        rounded-2xl
        shadow-[0_32px_80px_rgba(0,0,0,0.6)]
        px-5 py-8
        sm:px-10 sm:py-12
      "
    >
      {children}
    </div>
  );
}
