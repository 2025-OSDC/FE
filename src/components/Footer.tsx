import { Logo } from "./icons/Logo";
import { LogoText } from "./icons/LogoText";

export default function Footer() {
  return (
    <footer className="bg-[#F0F0F0] px-28 py-6">
      <div className="mx-auto h-full w-full">
        <div className="flex w-full items-end justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-normal text-[#3D4852]">
                Developed by Team PATHFINDER
              </p>
              <p className="text-sm font-normal text-[#3D4852]">
                Contributors: 윤수호, 김연진, 윤혜성, 이준희, 노하영
              </p>
            </div>

            <p className="text-sm font-normal text-[#3D4852]">
              Copyright© 2025. colbrush. All rights reserved.
            </p>
          </div>

          <div className="flex items-end gap-3">
            <Logo width={37} height={37} />
            <LogoText width={132} height={40} />
          </div>
        </div>
      </div>
    </footer>
  );
}
