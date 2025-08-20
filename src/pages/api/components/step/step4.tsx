import Code from "../../../../components/code";
import Bullet from "../bullet";
import SubTitle from "../subTitle";

export default function Step4({ heading1 }: { heading1: string }) {
  return (
    <section className="flex flex-col gap-3 sm:gap-4">
      <h1 className={heading1}>4. CLI (Command-Line Interface)</h1>
      <div className="space-y-2 sm:space-y-3">
        <SubTitle>
          <Code className="text-gray-blue text-lg font-medium sm:text-xl lg:text-[24px]">{`colbrush-cli`}</Code>
        </SubTitle>
        <Bullet className="leading-7 sm:leading-8">
          <span className="font-semibold">설명: </span>
          <Code className="text-black">colbrush</Code> 라이브러리의 핵심 기능을
          담당하는 커맨드라인 도구입니다.
        </Bullet>
        <Bullet>
          <span className="font-semibold">명령어: </span>
        </Bullet>
        <Bullet className="leading-7 sm:leading-8">
          <Code className="text-black">--generate</Code> :{" "}
          <Code className="text-black">@theme</Code> 구문으로 정의된 CSS 변수를
          기반으로 색맹 유형별 테마 파일을 생성합니다.
        </Bullet>
        <Bullet className="leading-7 sm:leading-8">
          <Code className="text-black">{`--css=<path>`}</Code> : 테마를 생성할
          CSS 파일의 경로를 지정합니다. 기본값은
          <Code className="text-black">src/index.css</Code> 입니다.
        </Bullet>
      </div>
    </section>
  );
}
