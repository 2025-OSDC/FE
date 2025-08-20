import Code from "../../../../components/code";
import CodeBlock from "../../../../components/defaultCodeBlock/DefaultCodeBlock";
import { THEMEPROVIDER } from "../../constants";
import Description from "../../../../components/description";
import SubTitle from "../subTitle";
import Bullet from "../bullet";
export default function Step2({ heading1 }: { heading1: string }) {
  return (
    <section className="flex flex-col gap-3 sm:gap-4">
      <>
        <h1 className={heading1}>2. 컴포넌트 (Components)</h1>
        <Description>
          이 섹션은 Colbrush가 제공하는 React 컴포넌트에 대한 상세 문서를 담고
          있습니다.
        </Description>
      </>
      <section className="space-y-2 sm:space-y-3">
        <SubTitle>
          <Code className="text-gray-blue text-lg font-medium sm:text-xl lg:text-[24px]">{`<ThemeProvider>`}</Code>
        </SubTitle>
        <Bullet>
          설명: 애플리케이션에 테마 기능을 전역적으로 제공하는 Context
          Provider입니다.
        </Bullet>
        <Bullet className="leading-7 sm:leading-8">
          Props:
          <Code className="text-black">children</Code>
          (React 노드)
        </Bullet>
        <Bullet>사용 예시:</Bullet>
        <CodeBlock code={THEMEPROVIDER}></CodeBlock>
      </section>
      <section className="space-y-2 sm:space-y-3">
        <SubTitle>
          <Code className="text-gray-blue text-lg font-medium sm:text-xl lg:text-[24px]">{`<ThemeSwitcher>`}</Code>
        </SubTitle>
        <Bullet>
          설명: 사용자가 테마를 쉽게 변경할 수 있는 드롭다운 UI 컴포넌트입니다.
        </Bullet>
        <Bullet className="leading-7 sm:leading-8">
          Props:
          <Code className="text-black">options</Code>
          (선택 사항): 드롭다운에 표시될 테마 목록을 커스터마이징합니다.
        </Bullet>
      </section>
    </section>
  );
}
