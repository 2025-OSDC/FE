import Code from "../../../../components/code";
import CodeBlock from "../../../../components/defaultCodeBlock/DefaultCodeBlock";
import { USEUPDATELANGUAGE, USEUPDATETHEME } from "../../constants";
import SubTitle from "../subTitle";
import Bullet from "../bullet";

export default function Step3({ heading1 }: { heading1: string }) {
  return (
    <section className="flex flex-col gap-3 sm:gap-4">
      <h1 className={heading1}>3. 훅 (Hooks)</h1>
      <section className="space-y-2 sm:space-y-3">
        <SubTitle>
          <Code className="text-gray-blue text-lg sm:text-xl lg:text-[24px] font-medium">{`useUpdateTheme`}</Code>
        </SubTitle>
        <Bullet option="설명: ">
          테마를 변경하는 함수를 반환하는 커스텀 훅입니다.
        </Bullet>
        <Bullet option="사용 예시:"></Bullet>
        <CodeBlock code={USEUPDATETHEME}></CodeBlock>
      </section>
      <section className="space-y-2 sm:space-y-3">
        <SubTitle>
          <Code className="text-gray-blue text-lg sm:text-xl lg:text-[24px] font-medium">{`useUpdateLanguage`}</Code>
        </SubTitle>
        <Bullet option="설명: ">
          언어를 변경하는 함수를 반환하는 커스텀 훅입니다.
        </Bullet>
        <Bullet option="사용 예시:"></Bullet>
        <CodeBlock code={USEUPDATELANGUAGE}></CodeBlock>
      </section>
    </section>
  );
}
