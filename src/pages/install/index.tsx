import Banner from "./components/Banner";
import Explantation from "./components/Explanation";
import CallToAction from "./components/CallToAction";
import InstallationStep from "./components/InstallationStep";

export default function Install() {
  return (
    <div className="flex min-h-screen flex-col">
      <Banner />
      <Explantation />
      <InstallationStep />
      <CallToAction />
    </div>
  );
}
