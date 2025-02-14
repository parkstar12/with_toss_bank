import React from "react";

const products = [
  {
    id: 1,
    name: "무선 키보드",
    price: 99000,
    description: "최신 블루투스 기술을 탑재한 무선 키보드입니다.",
    category: "컴퓨터 주변기기",
  },
  {
    id: 2,
    name: "게이밍 마우스",
    price: 59000,
    description: "반응 속도가 뛰어난 게이밍 마우스입니다.",
    category: "컴퓨터 주변기기",
  },
  {
    id: 3,
    name: "스마트 워치",
    price: 199000,
    description: "다양한 헬스케어 기능이 포함된 스마트 워치입니다.",
    category: "웨어러블",
  },
];

const Main = () => {
  return (
    <main className="bg-gray-100 flex-grow h-full">
      <section className="page-title p-8">
        <h1 className="text-2xl font-bold">추천상품</h1>
      </section>
      <section className="content-grid flex flex-wrap gap-8 justify-base p-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-box bg-white rounded-lg p-6 shadow-md 
                 w-full md:w-[40%] lg:w-[30%]" 
          >
            <div className="product-top flex justify-between text-lg">
              <span className="product-name font-bold">{product.name}</span>
              <span className="product-price text-blue-600 font-bold">
                ₩{product.price.toLocaleString()}
              </span>
            </div>
            <p className="product-description text-gray-700 mt-4">
              {product.description}
            </p>
            <div className="product-footer flex justify-between items-center mt-4">
              <span className="product-category text-blue-600 bg-blue-100 rounded-lg px-4 py-1">
                {product.category}
              </span>
              <button className="add-to-cart-btn bg-blue-600 text-white rounded-lg py-2 px-4">
                장바구니
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Main;
