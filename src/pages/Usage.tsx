import DonutChart from "../components/graph/DonutChart";
import LineChart from "../components/graph/LineChart";
import MapChart from "../components/graph/MapChart";
import ProductChart from "../components/graph/ProductChart";
import TodoList from "../components/todo/TodoList";
import { COLORS, TODOS } from "../mocks/usage";
import CustomTooltip from "../components/tooltip/Tooltip";

export default function Usage() {

  return (
    <div className="text-center font-pretendard font-semibold">
      <h1 className="text-[32px] font-bold text-gray-900 mt-[100px] mb-[60px]">다양한 색맹 유형에 맞춘<br />최적의 테마를 경험해 보세요</h1>
      <div className={`w-full h-[300px] flex flex-row`}>
        {COLORS.map((color) => (
          <div key={color} className={`grow`} style={{ backgroundColor: color }} />
        ))}
      </div>

      <div className={`flex flex-col gap-[90px] px-[12.5%]`}>
        {/* 그래프 */}
        <div className={`mt-[90px] flex flex-col gap-5`}>
          <p className={`text-[28px] w-full text-start`}>데이터 시각화</p>
          <div className={`flex flex-col gap-10`}>
            <div className={`flex flex-row gap-10`}>
              <div className={`w-[30%]`}>
                <DonutChart />
              </div>
              <div className={`grow`}>
                <LineChart />
              </div>
            </div>
            <div className={`flex flex-row gap-10`}>
              <div className={`grow`}>
                <MapChart />
              </div>
              <div className={`grow`}>
                <ProductChart />
              </div>
            </div>
          </div>
        </div>

        {/* 상태 표시 / 컴포넌트 */}
        <div>
          <div className={`flex flex-col gap-6`}>
            <p className={`text-[28px] w-full text-start`}>상태 표시 및 UI 컴포넌트</p>
            <div className={`rounded-[28px] shadow-custom w-full px-6 py-10 flex flex-row gap-5`}>
              <TodoList state={"시작 전"} todos={TODOS["시작 전"]} />
              <TodoList state={"진행 중"} todos={TODOS["진행 중"]} />
              <TodoList state={"완료"} todos={TODOS["완료"]} />
            </div>
          </div>
        </div>

        {/* 툴팁 */}
        <div className={`flex flex-col gap-10 px-[8%]`}>
          <div className={`flex flex-row gap-10`}>
            <CustomTooltip state={"WARNING"} />
            <CustomTooltip state={"INFO"} />
          </div>
          <div className={`flex flex-row gap-10`}>
            <CustomTooltip state={"ERROR"} />
            <CustomTooltip state={"SUCCESS"} />
          </div>
        </div>
      </div>
    </div>
  );
}
