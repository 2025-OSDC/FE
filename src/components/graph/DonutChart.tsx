import { useEffect, useRef } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { useTheme } from 'colbrush';

interface ChartData {
  category: string;
  value: number;
  color: string;
}

const DonutChart = () => {

  const theme = useTheme().theme;

  const rootStyle = getComputedStyle(document.documentElement);

  const data = [
    { category: "잠재 고객", value: 54, color: rootStyle.getPropertyValue('--color-blue').trim() },
    { category: "충성 고객", value: 20, color: rootStyle.getPropertyValue('--color-light-green').trim() },
    { category: "신규 고객", value: 26, color: rootStyle.getPropertyValue('--color-red').trim() }
  ]

  const chartRef = useRef<HTMLDivElement | null>(null);
  const rootRef = useRef<am5.Root | null>(null);

  useEffect(() => {

    if (!chartRef.current) return;
    // amCharts 루트 생성
    const root = am5.Root.new(chartRef.current);
    rootRef.current = root;

    // 애니메이션 테마 설정
    root.setThemes([am5themes_Animated.new(root)]);

    // 파이 차트 생성
    const chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalLayout,
        innerRadius: am5.percent(60) // 도넛 모양
      })
    );

    // 시리즈 생성
    const series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
        alignLabels: false
      })
    );

    // 라벨과 틱 숨기기
    series.labels.template.set("visible", false);
    series.ticks.template.set("visible", false);

    // 슬라이스 스타일링
    series.slices.template.setAll({
      strokeWidth: 3,
      stroke: am5.color("#ffffff"),
      cornerRadius: 8,
    });

    // 호버 효과
    series.slices.template.states.create("hover", {
      scale: 1.05
    });

    // 색상 적용
    series.slices.template.adapters.add("fill", function (fill, target) {
      const dataItem = target.dataItem;
      if (dataItem) {
        const context = dataItem.dataContext as ChartData
        return am5.color(context.color);
      }
      return fill;
    });

    // 데이터 설정
    series.data.setAll(data);

    // 애니메이션
    series.appear(1000, 100);

    // 정리 함수
    return () => {
      if (rootRef.current) {
        rootRef.current.dispose();
      }
    };
  }, [theme]);

  return (
    <div className="w-full p-6 bg-white rounded-[14px] shadow-custom font-pretendard">
      <div className={`flex flex-row items-center justify-between mb-4`}>
        <p className="text-[18px] font-bold text-gray-800 text-center">
          방문자 분석
        </p>
        <p className={`text-[12px] rounded-[2px] bg-gray-100 px-2 py-1 text-gray-400`}>Today</p>
      </div>

      <div className={`flex items-center justify-center`}>
        <div
          ref={chartRef}
          className="w-[70%] aspect-square mb-2"
        />
      </div>

      <div className="p-2">
        <div className="flex justify-center gap-4 flex-col">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded-full shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-gray-700 font-medium w-full flex flex-row justify-between items-center">
                <p>{item.category}</p>
                <p>{item.value}%</p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
