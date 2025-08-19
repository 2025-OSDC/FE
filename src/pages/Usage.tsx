import DonutChart from "../components/graph/DonutChart";
import LineChart from "../components/graph/LineChart";
import MapChart from "../components/graph/MapChart";
import ProductChart from "../components/graph/ProductChart";
import Todo from "../components/todo/Todo";

export default function Usage() {

  const COLORS = [
    "#FF0000",
    "#FF4000",
    "#FF8000",
    "#FFBF00",
    "#FFFF00",
    "#BFFF00",
    "#7FFF00",
    "#40FF00",
    "#00FF00",
    "#00FF40",
    "#00FF7F",
    "#00FFBF",
    "#00FFFF",
    "#00BFFF",
    "#0080FF",
    "#0040FF",
    "#0000FF",
    "#4000FF",
    "#8000FF",
    "#BF00FF",
    "#FF00FF",
    "#FF00BF",
    "#FF007F",
    "#FF0040",
  ]

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
          <div className={`flex flex-col gap-10 pointer-events-none`}>
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
          <p className={`text-[28px] w-full text-start`}>상태 표시 및 UI 컴포넌트</p>
          <Todo state={"시작 전"} title={"운동하기"} content={"공복 유산소"} number={1}/>
        </div>

      </div>
    </div>
  );
}