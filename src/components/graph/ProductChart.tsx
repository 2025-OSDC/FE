import { useTheme } from "colbrush";
import { useEffect, useState } from "react";

const ProductChart = () => {

  const theme = useTheme().theme;

  const [rootStyle, setRootStyle] = useState<CSSStyleDeclaration>(getComputedStyle(document.documentElement))

  useEffect(() => {
    setRootStyle(getComputedStyle(document.documentElement))
  }, [theme])

  const Products = [
    {
      id: "01",
      name: "선크림",
      count: 45,
      color: rootStyle.getPropertyValue('--color-blue'),
    },
    {
      id: "02",
      name: "아이크림",
      count: 29,
      color: rootStyle.getPropertyValue('--color-green'),
    },
    {
      id: "03",
      name: "로션",
      count: 18,
      color: rootStyle.getPropertyValue('--color-purple'),
    },
    {
      id: "04",
      name: "미스트",
      count: 25,
      color: rootStyle.getPropertyValue('--color-yellow'),
    }
  ]



  return (
    <div className={`w-full h-full rounded-[14px] shadow-custom p-6 py-4 text-[18px]`}>
      <p className={`text-start mb-4`}>상품 목록</p>
      <div className={`w-full h-full text-[14px] pt-4`}>
        <div className={`w-full flex flex-row justify-around text-[#96A5B8] font-light mb-2`}>
          <p className={`w-[12%]`}>번호</p>
          <p className={`w-[18%]`}>상품명</p>
          <p className={`w-[36%]`}>판매 개수</p>
          <p className={`w-[18%]`}>판매증가</p>
        </div>
        <div className={`bg-[#EDF2F6] h-[1px]`} />
        <div className={`h-full flex flex-col`}>
          {Products.map((product, index) => (
            <div key={product.id}>
              <div className={`w-full flex flex-row justify-around items-center text-gray-blue font-light py-4`}>
                <p className={`w-[12%]`}>{product.id}</p>
                <p className={`w-[18%]`}>{product.name}</p>
                <div className={`w-[36%] h-1 rounded-4`} style={{ backgroundColor: `${product.color}33` }}>
                  <div className={`h-full`} style={{ width: `${product.count}%`, backgroundColor: product.color }} />
                </div>
                <p className={`w-[18%]`}>{product.count}%</p>
              </div>
              {Products.length > index + 1 && <div className={`bg-[#EDF2F6] h-[1px]`} />}
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default ProductChart;