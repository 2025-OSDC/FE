import CodeBlock from "../../../../components/defaultCodeBlock/DefaultCodeBlock";
import { LICENSE } from "../../constants";
import Bullet from "../bullet";
import Description from "../../../../components/description";

export default function Step5({ heading1 }: { heading1: string }) {
  return (
    <section className="flex flex-col gap-3 sm:gap-4">
      <>
        <h1 className={heading1}>5. 라이선스</h1>
        <Description>
          Colbrush는 MIT License로 배포되는 오픈소스 프로젝트입니다.
        </Description>
      </>
      <div className="space-y-2 sm:space-y-3">
        <Bullet>권한: 누구나 자유롭게 사용, 수정, 배포할 수 있습니다.</Bullet>
        <Bullet>
          조건: 원본 라이선스 및 저작권 고지를 모든 복제본 또는 상당 부분에
          포함해야 합니다.
        </Bullet>
        <Bullet>
          책임: 소프트웨어는 어떠한 보증도 없이 "있는 그대로" 제공됩니다.
        </Bullet>
        <CodeBlock code={LICENSE}></CodeBlock>
      </div>
    </section>
  );
}
