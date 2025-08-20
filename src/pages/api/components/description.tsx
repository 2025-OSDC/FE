import type React from "react";

export default function Description({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p className="text-gray text-sm sm:text-base lg:text-[18px] font-normal">{children}</p>;
}
