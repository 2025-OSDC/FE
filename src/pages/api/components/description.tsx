import type React from "react";

export default function Description({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p className="text-gray text-[18px] font-normal">{children}</p>;
}
