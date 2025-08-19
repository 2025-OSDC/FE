import Code from "../../../components/code";
import CodeBlock from "../../../components/codeblock";
import { INSTALL_CONSTANTS } from "../constants";
import StepItem from "./StepItem";

const InstallationStep = () => {
  return (
    <div className="w-full bg-[#f0f0f0] py-14">
      <div className="mx-auto flex w-5xl flex-col">
        <p className="mb-16 text-center text-[2rem] font-semibold">
          {INSTALL_CONSTANTS.INSTALLATION.MAIN_TITLE}
        </p>

        <div className="flex flex-col gap-20">
          <StepItem
            chip={INSTALL_CONSTANTS.INSTALLATION.STEP1.CHIP}
            title={INSTALL_CONSTANTS.INSTALLATION.STEP1.TITLE}
          >
            <CodeBlock>
              <div className="font-['IBM_Plex_Mono'] text-lg font-normal text-white">
                {INSTALL_CONSTANTS.INSTALLATION.STEP1.INSTALL_COMMANDS.PNPM}
              </div>
              <div className="text-gray font-['Pretendard'] text-lg font-normal">
                {INSTALL_CONSTANTS.INSTALLATION.STEP1.INSTALL_COMMANDS.COMMENT}
              </div>
              <div className="font-['IBM_Plex_Mono'] text-lg font-normal text-white">
                {INSTALL_CONSTANTS.INSTALLATION.STEP1.INSTALL_COMMANDS.NPM}
              </div>
            </CodeBlock>

            <p className="text-gray mt-3 text-lg font-normal">
              {INSTALL_CONSTANTS.INSTALLATION.STEP1.DESCRIPTION.split("\n").map(
                (line, index) => (
                  <span key={index}>
                    {line}
                    {index === 0 && <br />}
                  </span>
                ),
              )}
            </p>
          </StepItem>

          <StepItem
            chip={INSTALL_CONSTANTS.INSTALLATION.STEP2.CHIP}
            title={INSTALL_CONSTANTS.INSTALLATION.STEP2.TITLE}
          >
            <CodeBlock>
              <div className="font-['IBM_Plex_Mono'] text-lg font-normal">
                <span className="text-blue-500">
                  {INSTALL_CONSTANTS.CODES.THEME}
                </span>
                <span className="text-white"> {`{`}</span>
              </div>
              <div className="font-['IBM_Plex_Mono'] text-lg font-normal">
                <span className="text-pink-600">
                  {" "}
                  {INSTALL_CONSTANTS.INSTALLATION.STEP2.CSS_VARIABLES.PRIMARY}
                </span>
                <span className="text-white">: </span>
                <span className="text-pink-600">
                  {
                    INSTALL_CONSTANTS.INSTALLATION.STEP2.CSS_VARIABLES
                      .PRIMARY_VALUE
                  }
                </span>
                <span className="text-white">;</span>
              </div>
              <div className="font-['IBM_Plex_Mono'] text-lg font-normal">
                <span className="text-pink-600">
                  {" "}
                  {INSTALL_CONSTANTS.INSTALLATION.STEP2.CSS_VARIABLES.SECONDARY}
                </span>
                <span className="text-white">: </span>
                <span className="text-pink-600">
                  {
                    INSTALL_CONSTANTS.INSTALLATION.STEP2.CSS_VARIABLES
                      .SECONDARY_VALUE
                  }
                </span>
                <span className="text-white">;</span>
              </div>
              <div className="font-['IBM_Plex_Mono'] text-lg font-normal">
                <span className="text-pink-600">
                  {" "}
                  {INSTALL_CONSTANTS.INSTALLATION.STEP2.CSS_VARIABLES.GRAY}
                </span>
                <span className="text-white">: </span>
                <span className="text-pink-600">
                  {INSTALL_CONSTANTS.INSTALLATION.STEP2.CSS_VARIABLES.GRAY_VALUE}
                </span>
                <span className="text-white">;</span>
              </div>
              <div className="font-['IBM_Plex_Mono'] text-lg font-normal text-white">{`}`}</div>
            </CodeBlock>

            <p className="mt-3">
              <span className="text-gray text-lg font-normal">
                {INSTALL_CONSTANTS.INSTALLATION.STEP2.DESCRIPTION_PREFIX}
              </span>
              <Code>{INSTALL_CONSTANTS.CODES.INDEX_CSS}</Code>
              <span className="text-gray text-lg font-normal">
                {INSTALL_CONSTANTS.INSTALLATION.STEP2.DESCRIPTION_SUFFIX}
              </span>
            </p>

            <p className="mt-3">
              <Code>{INSTALL_CONSTANTS.CODES.THEME}</Code>
              <span className="text-gray text-lg font-normal">
                {INSTALL_CONSTANTS.INSTALLATION.STEP2.EXPLANATION}
              </span>
            </p>
          </StepItem>

          <StepItem
            chip={INSTALL_CONSTANTS.INSTALLATION.STEP3.CHIP}
            title={INSTALL_CONSTANTS.INSTALLATION.STEP3.TITLE}
          >
            <CodeBlock>
              <div className="font-['IBM_Plex_Mono'] text-lg font-normal text-white">
                {INSTALL_CONSTANTS.INSTALLATION.STEP3.COMMAND}
              </div>
            </CodeBlock>

            <p className="mt-3">
              <span className="text-gray text-lg font-normal">
                {INSTALL_CONSTANTS.INSTALLATION.STEP3.DESCRIPTION}
              </span>
              {INSTALL_CONSTANTS.INSTALLATION.STEP3.COLOR_BLIND_TYPES.map(
                (type, index) => (
                  <span key={type}>
                    <Code>{type}</Code>
                    {index <
                      INSTALL_CONSTANTS.INSTALLATION.STEP3.COLOR_BLIND_TYPES
                        .length -
                        1 && " , "}
                  </span>
                ),
              )}
              <span className="text-gray text-lg font-normal">
                {INSTALL_CONSTANTS.INSTALLATION.STEP3.DESCRIPTION_SUFFIX}
              </span>
            </p>

            <p className="mt-3">
              <span className="text-gray text-lg font-normal">
                {INSTALL_CONSTANTS.INSTALLATION.STEP3.PATH_DESCRIPTION_PREFIX}
              </span>
              <Code>{INSTALL_CONSTANTS.INSTALLATION.STEP3.PATH_EXAMPLE}</Code>
              <span className="text-gray text-lg font-normal">
                {INSTALL_CONSTANTS.INSTALLATION.STEP3.PATH_DESCRIPTION_SUFFIX}
              </span>
            </p>
          </StepItem>
        </div>
      </div>
    </div>
  );
};

export default InstallationStep;