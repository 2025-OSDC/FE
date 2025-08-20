import Code from "../../../../components/code";
import CodeBlock from "../../../../components/defaultCodeBlock/DefaultCodeBlock";
import { USETHEME } from "../../constants";
import SubTitle from "../subTitle";
import Bullet from "../bullet";

export default function Step3({ heading1 }: { heading1: string }) {
  return (
    <section className="flex flex-col gap-3 sm:gap-4">
      <h1 className={heading1}>3. 훅 (Hooks)</h1>
      <section className="space-y-2 sm:space-y-3">
        <SubTitle>
          <Code className="text-gray-blue text-lg font-medium sm:text-xl lg:text-[24px]">{`useTheme()`}</Code>
        </SubTitle>
        <Bullet>
          설명: 현재 테마 상태와 테마 변경, 언어 상태와 언어를 변경하는 함수를
          반환하는 커스텀 훅입니다.
        </Bullet>
        <Bullet className="leading-7 sm:leading-8">
          반환값:
          <Code className="text-black">{`{theme, updateTheme, language, updateLanguage}`}</Code>
        </Bullet>
        <Bullet className="leading-7 sm:leading-8">
          <Code className="text-black">theme</Code> : 현재 적용된 테마의
          이름(문자열)
        </Bullet>
        <Bullet className="leading-7 sm:leading-8">
          <Code className="text-black">updateTheme</Code> :{" "}
          <Code className="text-black">{`(theme: ThemeType) => void`}</Code>{" "}
          새로운 테마를 설정하는 함수.
        </Bullet>
        <Bullet className="leading-7 sm:leading-8">
          <Code className="text-black">language</Code> : 현재 적용된 테마의
          이름(문자열)
        </Bullet>
        <Bullet className="leading-7 sm:leading-8">
          <Code className="text-black">updateLanguage</Code> :{" "}
          <Code className="text-black">{`(language: TLanguage) => void`}</Code>{" "}
          새로운 언어를 설정하는 함수.
        </Bullet>
        <Bullet>사용 예시: </Bullet>
        <CodeBlock code={USETHEME}></CodeBlock>
      </section>
    </section>
  );
}
