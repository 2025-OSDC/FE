import Button from "../../../components/button";
import { Logo } from "../../../components/icons/Logo";
import { LogoText } from "../../../components/icons/LogoText";
import { INSTALL_CONSTANTS } from "../constants";
import { GITHUB_URL } from "../../../constants/navigation";

const Banner = () => {
  return (
    <div className="relative flex h-[36rem] w-full items-center justify-center">
      <div
        className="absolute inset-0 h-full w-full"
        style={{
          background:
            "conic-gradient(from 270deg at 50% 50%, #FFF 0deg, #F5F5F5 36deg, #F0EBF4 39.28deg, #C8A3EB 66.22deg, #9B51E0 106.82deg, #C3549B 139.68deg, #EB5757 166.46deg, #EF7851 178.99deg, #F2994A 191.22deg, #F2C94C 219.64deg, #2D9CDB 293.47deg, #56CCF2 335.24deg, #FFF 360deg)",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <Logo width={84} height={84} />
        <LogoText width={200} height={60} />
        <p className="text-center text-lg font-normal text-[#555555]">
          {INSTALL_CONSTANTS.BANNER.DESCRIPTION.split("\n").map(
            (line, index) => (
              <span key={index}>
                {line}
                {index === 0 && <br />}
              </span>
            ),
          )}
        </p>
        <Button onClick={() => window.open(GITHUB_URL, "_blank")}>
          {INSTALL_CONSTANTS.GET_STARTED}
        </Button>
      </div>
    </div>
  );
};

export default Banner;
