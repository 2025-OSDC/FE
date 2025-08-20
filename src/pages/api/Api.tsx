import Description from "./components/description";
import Step1 from "./components/step/step1";
import Step2 from "./components/step/step2";
import Step3 from "./components/step/step3";
import Step4 from "./components/step/step4";
import Step5 from "./components/step/step5";

export default function Api() {
  const heading1 = "text-gray-blue text-xl sm:text-2xl lg:text-[32px] font-semibold";
  return (
    <div className="flex w-full justify-center px-4 sm:px-8 lg:px-[10%]">
      <div className="flex w-full max-w-[981px] flex-col gap-12 sm:gap-16 lg:gap-[90px] self-center py-8 sm:py-12 lg:py-[70px]">
        <section className="flex w-full flex-col">
          <h1 className={heading1}>Color-Blind-Theme API</h1>
          <Description>
            웹 접근성을 위한 색맹 친화 테마 라이브러리입니다.
            <br></br>
            color-blind + chroma.js 기반으로 다양한 색각 이상 유형에 최적화된
            테마를 제공합니다.
          </Description>
        </section>
        <Step1 heading1={heading1}></Step1>
        <Step2 heading1={heading1}></Step2>
        <Step3 heading1={heading1}></Step3>
        <Step4 heading1={heading1}></Step4>
        <Step5 heading1={heading1}></Step5>
      </div>
    </div>
  );
}
