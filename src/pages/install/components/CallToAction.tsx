import Button from "../../../components/button";
import { INSTALL_CONSTANTS } from "../constants";
import { GITHUB_URL } from "../../../constants/navigation";

const CallToAction = () => {
  return (
    <div className="flex h-[300px] w-full items-center justify-center sm:h-[350px] lg:h-[400px]">
      <div className="mx-auto flex flex-col items-center justify-center gap-3 px-4 text-center sm:gap-4 lg:gap-5">
        <p className="text-gray max-w-md text-sm font-normal sm:max-w-lg sm:text-base lg:max-w-xl lg:text-xl">
          {INSTALL_CONSTANTS.CTA.SUBTITLE.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index === 0 && <br />}
            </span>
          ))}
        </p>
        <p className="text-gray-blue mb-1 text-xl font-semibold sm:mb-2 sm:text-2xl lg:text-3xl">
          {INSTALL_CONSTANTS.CTA.MAIN_TITLE}
        </p>
        <Button onClick={() => window.open(GITHUB_URL, "_blank")}>
          {INSTALL_CONSTANTS.GET_STARTED}
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
