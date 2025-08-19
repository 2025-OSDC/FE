import Button from "../../../components/button";
import { INSTALL_CONSTANTS } from "../constants";
import { GITHUB_URL } from "../../../constants/navigation";

const CallToAction = () => {
  return (
    <div className="flex h-[400px] w-full items-center justify-center">
      <div className="mx-auto flex flex-col items-center justify-center gap-5 text-center">
        <p className="text-gray text-xl font-normal">
          {INSTALL_CONSTANTS.CTA.SUBTITLE.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              {index === 0 && <br />}
            </span>
          ))}
        </p>
        <p className="text-gray-blue mb-2 text-3xl font-semibold">
          {INSTALL_CONSTANTS.CTA.MAIN_TITLE}
        </p>
        <Button onClick={() => window.open(GITHUB_URL, '_blank')}>{INSTALL_CONSTANTS.GET_STARTED}</Button>
      </div>
    </div>
  );
};

export default CallToAction;
