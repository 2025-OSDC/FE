import type React from "react";

export default function Description({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-gray text-sm font-normal sm:text-base lg:text-lg ${className}`}
    >
      {children}
    </p>
  );
}
