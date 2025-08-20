import Code from "../../../components/code";
import { MagicIcon } from "../../../components/icons/MagicIcon";
import { PaletteIcon } from "../../../components/icons/PaletteIcon";
import { PeopleIcon } from "../../../components/icons/PeopleIcon";
import { SlidersIcon } from "../../../components/icons/SlidersIcon";
import { WindowIcon } from "../../../components/icons/WindowIcon";
import { INSTALL_CONSTANTS } from "../constants";
import FeatureItem from "./FeatureItem";

const Explanation = () => {
  return (
    <div>
      <div className="mx-auto flex w-5xl flex-col gap-20 py-24">
        <FeatureItem
          icon={<PeopleIcon />}
          title={INSTALL_CONSTANTS.EXPLANATION.COLOR_BLIND_SUPPORT.TITLE}
        >
          <p>
            {[
              INSTALL_CONSTANTS.CODES.PROTANOPIA,
              INSTALL_CONSTANTS.CODES.DEUTERANOPIA,
              INSTALL_CONSTANTS.CODES.TRITANOPIA,
              INSTALL_CONSTANTS.CODES.ACHROMATOPSIA,
            ].map((type, index, array) => (
              <span key={type}>
                <Code>{type}</Code>
                {index < array.length - 1 && " , "}
              </span>
            ))}
            <span className="text-gray text-lg font-normal">
              {INSTALL_CONSTANTS.EXPLANATION.COLOR_BLIND_SUPPORT.DESCRIPTION}
            </span>
          </p>
        </FeatureItem>

        <FeatureItem
          icon={<MagicIcon />}
          title={INSTALL_CONSTANTS.EXPLANATION.AUTO_GENERATION.TITLE}
        >
          <p>
            <Code>{INSTALL_CONSTANTS.CODES.THEME}</Code>
            <span className="text-gray text-lg font-normal">
              {INSTALL_CONSTANTS.EXPLANATION.AUTO_GENERATION.DESCRIPTION}
            </span>
          </p>
        </FeatureItem>

        <FeatureItem
          icon={<WindowIcon />}
          title={INSTALL_CONSTANTS.EXPLANATION.THEME_PROVIDER.TITLE}
        >
          <p>
            <span className="text-gray text-lg font-normal">
              {INSTALL_CONSTANTS.EXPLANATION.THEME_PROVIDER.DESCRIPTION_PREFIX}
            </span>
            <Code>{INSTALL_CONSTANTS.CODES.THEME_PROVIDER}</Code>
            <span className="text-gray text-lg font-normal">
              {INSTALL_CONSTANTS.EXPLANATION.THEME_PROVIDER.DESCRIPTION_SUFFIX}
            </span>
          </p>
        </FeatureItem>

        <FeatureItem
          icon={<PaletteIcon />}
          title={INSTALL_CONSTANTS.EXPLANATION.THEME_SWITCHER.TITLE}
        >
          <p>
            <span className="text-gray text-lg font-normal">
              {INSTALL_CONSTANTS.EXPLANATION.THEME_SWITCHER.DESCRIPTION}
            </span>
          </p>
        </FeatureItem>

        <FeatureItem
          icon={<SlidersIcon />}
          title={INSTALL_CONSTANTS.EXPLANATION.CUSTOMIZATION.TITLE}
        >
          <p>
            <span className="text-gray text-lg font-normal">
              {INSTALL_CONSTANTS.EXPLANATION.CUSTOMIZATION.DESCRIPTION}
            </span>
          </p>
        </FeatureItem>
      </div>
    </div>
  );
};

export default Explanation;
