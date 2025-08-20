import CodeBlock from "../../../../components/defaultCodeBlock/DefaultCodeBlock";
import {
  GENERATE_THEME_COMMAND,
  INSTALL_COMMAND,
  THEMEFILE_COMMEND,
  THEMEPROVIDER_SETTING,
} from "../../constants";
import SubTitle from "../subTitle";
import Description from "../../../../components/description";
import Code from "../../../../components/code";

export default function Step1({ heading1 }: { heading1: string }) {
  return (
    <section className="flex flex-col gap-3 sm:gap-4">
      <>
        <h1 className={heading1}>1. 시작하기 (Get Started)</h1>
        <Description>
          이 섹션은 Colbrush의 설치부터 기본적인 사용법까지 안내합니다.
        </Description>
      </>
      <section className="space-y-2 sm:space-y-3">
        <SubTitle>설치</SubTitle>
        <Description>
          Colbrush는 npm 또는 pnpm을 통해 설치할 수 있습니다.
        </Description>
        <CodeBlock code={INSTALL_COMMAND} language="ts"></CodeBlock>
      </section>
      <section className="space-y-2 sm:space-y-3">
        <SubTitle>테마 파일 생성</SubTitle>
        <Description>
          기본 테마를 정의하는 CSS 파일을 작성한 후, 다음 CLI 명령어를 실행하여
          색맹 유형별 테마를 자동으로 생성합니다.
        </Description>
        <CodeBlock code={THEMEFILE_COMMEND} language="ts"></CodeBlock>
        <CodeBlock code={GENERATE_THEME_COMMAND} language="ts"></CodeBlock>
      </section>
      <section className="space-y-2 sm:space-y-3">
        <SubTitle>ThemeProvider 설정</SubTitle>
        <Description>
          앱의 루트 컴포넌트를 <Code className="text-black">ThemeProvider</Code>
          로 감싸서 전역 테마 관리를 시작합니다.
        </Description>
        <CodeBlock code={THEMEPROVIDER_SETTING} language="ts"></CodeBlock>
      </section>
    </section>
  );
}
