//Ex.jsx
// 1. 문제 1: 단일 Props 전달하기
// 목표: 단일 `props`를 활용하여 간단한 문구를 출력하는 컴포넌트를 작성하세요.
// 요구사항:
// - `Greeting`이라는 자식 컴포넌트를 만드세요.
// - `name`이라는 `props`를 받아 "환영합니다,
//   [이름]님!"이라는 문구를 렌더링합니다.
// - 부모 컴포넌트에서 여러 사람의 이름을 넘겨 출력합니다.
import { useState } from "react";
function Greeting(props) {
  return (
    <ul>
      {props.name.map((item, index) => (
        <li key={index}>
          <h2>환영합니다. {item}님!</h2>
        </li>
      ))}
    </ul>
  );
}
export function E1() {
  return (
    <div>
      <Greeting title="name" name={["홍길동", "박준영"]} />
    </div>
  );
}

// 2. 문제 2: 여러 Props 전달하기
// 목표: 여러 개의 `props`를 활용하여 사용자의 정보를 출력하는 컴포넌트를 작성하세요.
// 요구사항:
// - `UserCard`라는 자식 컴포넌트를 작성하세요.
// - `name`, `age`, `job`을 `props`로 받아 사용자 정보를 표시합니다.
// - 부모 컴포넌트에서 두 명의 사용자 정보를 전달해 렌더링합니다.
function UserCard(props) {
  return (
    <div>
      <p>이름: {props.name}</p>
      <p>나이: {props.age}</p>
      <p>직업: {props.job}</p>
    </div>
  );
}
export function E2() {
  return (
    <div>
      <UserCard name="박준영" age={27} job="개발자" />
      <UserCard name="홍길동" age={21} job="학생" />
    </div>
  );
}
// 3. 문제 3: 배열 Props 전달하기
// 목표: 배열 데이터를 `props`로 전달하여 리스트 형태로 출력하는 컴포넌트를 작성하세요.
// 요구사항:
// - `ItemList`라는 자식 컴포넌트를 작성하세요.
// - `items`라는 배열을 `props`로 받아 `<li>` 태그로 각 항목을 렌더링합니다.
// - 부모 컴포넌트에서 두 개의 다른 배열을 전달해 두 개의 목록을 출력합니다.
function ItemList(props) {
  return (
    <ul>
      {props.items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
export function E3() {
  return (
    <>
      <ItemList items={["바나나", "사과", "포도"]} />
      <ItemList items={["연필", "지우개", "샤프"]} />
    </>
  );
}
// 4. 문제 4: 이벤트 Props 전달하기
// 목표: 버튼을 클릭했을 때 이벤트를 처리하는 컴포넌트를 작성하세요.
// 요구사항:
// - `ClickButton`이라는 자식 컴포넌트를 작성하세요.
// - 부모 컴포넌트에서 클릭 시 경고창이 뜨도록 이벤트 핸들러를 전달하세요.
function Clickbutton(props) {
  return <button onClick={props.Clickfunc}>클릭하세요.</button>;
}
export function E4() {
  function Clickfunc() {
    alert("경고 경고");
  }
  return <Clickbutton Clickfunc={Clickfunc} />;
}
// 5. 문제 5: children을 이용한 컴포넌트 구성
// 목표: `children`을 활용하여 컴포넌트 내부에서 콘텐츠를 자유롭게 구성하는 연습을 합니다.
// 요구사항:
// - `InfoCard`라는 자식 컴포넌트를 작성하세요.
// - `title`이라는 `props`와 `children`을 사용하여 제목과 본문 콘텐츠를 렌더링합니다.
// - 부모 컴포넌트에서 두 개의 카드를 렌더링하세요.
function InfoCard(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <h2>{props.children}</h2>
    </div>
  );
}
export function E5() {
  return (
    <>
      <InfoCard title="카드1">
        <p>행운카드</p>
      </InfoCard>
      <InfoCard title="카드2">
        <p>럭키카드</p>
      </InfoCard>
    </>
  );
}

// Ex2.jsx
// 문제 1: 조건부 렌더링과 단일 Props
// 목표: 특정 조건에 따라 다른 인삿말을 출력하는 컴포넌트를 작성하세요.
// 요구사항:
// - Greeting이라는 컴포넌트를 만드세요.
// - props로 name과 isMorning을 받아 인삿말을 출력합니다.
// - isMorning이 true이면 "좋은 아침입니다, [name]님!"
//   그렇지 않으면 "좋은 저녁입니다, [name]님!"
// - 부모 컴포넌트에서 두 가지 경우를 모두 테스트하세요.
function Greeting2(props) {
  let Message = "";
  if (props.isMorning) {
    Message = "좋은 아침입니다.";
  } else Message = "좋은 저녁입니다.";
  return (
    <h2>
      {Message}
      {props.name}님!
    </h2>
  );
}
export function E6() {
  return (
    <>
      <Greeting2 isMorning={true} name="홍길동" />
      <Greeting2 isMorning={false} name="박준영" />
    </>
  );
}

//문제 2: 사용자 상태 변화 관리
// 목표: 버튼 클릭에 따라 사용자 나이를 변경하는 컴포넌트를 작성하세요.
// 요구사항:
// - UserCard라는 컴포넌트를 작성하세요.
// - name, age를 props로 받아 초기 값을 표시합니다.
// - "한 살 더 먹기" 버튼을 클릭하면 나이가 증가합니다.
// - 부모 컴포넌트에서 두 명의 사용자 상태를 관리합니다.

function UserCard2({ name, age }) {
  const [currentAge, setCurrentAge] = useState(age); // 상태 관리

  const addAge = () => {
    setCurrentAge(currentAge + 1); // 상태 업데이트
  };

  return (
    <div>
      <h3>
        이름: {name} / 나이: {currentAge}
      </h3>
      <button onClick={addAge}>한 살 더 먹기</button>
    </div>
  );
}

export function E7() {
  let user1 = {
    name: "김삿갓",
    age: 25,
  };
  let user2 = {
    name: "방랑시인",
    age: 23,
  };
  return (
    <div>
      <UserCard2 {...user1} />
      <UserCard2 {...user2} />
    </div>
  );
}
// 문제 3: 객체 리스트 렌더링
// 목표: 객체로 구성된 리스트를 렌더링하고, 추가 정보를 중첩된 형태로 출력합니다.
// 요구사항:
// ItemDetailList라는 컴포넌트를 작성하세요.
// props로 전달받는 각 객체는 이름과 세부 정보를 포함합니다.
// 예시 객체 리스트:
// [
//   { name: "사과", details: ["빨간색", "달콤함", "비타민 C"] },
//   { name: "바나나", details: ["노란색", "부드러움", "에너지 보충"] },
//   { name: "포도", details: ["보라색", "상큼함", "항산화 효과"] }
// ]
// 각 항목은 <ul> 내부에 렌더링하며, 이름과 세부 정보도 중첩 리스트로 표시합니다.
// 예시 출력:
// - 사과
//   * 빨간색
//   * 달콤함
//   * 비타민 C

function ItemDetailList(props) {
  return (
    <div>
      <p>-{props.name}</p>
      <ul>
        {props.detail.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
const frut = [
  { name: "사과", details: ["빨간색", "달콤함", "비타민 C"] },
  { name: "바나나", details: ["노란색", "부드러움", "에너지 보충"] },
  { name: "포도", details: ["보라색", "상큼함", "항산화 효과"] },
];

export function E8() {
  return (
    <>
      {frut.map((item, index) => (
        <ItemDetailList
          key={item.name}
          name={item.name}
          detail={item.details}
        />
      ))}
    </>
  );
}

//문제 4: children을 활용한 강조 텍스트 컴포넌트
// 목표: 특정 부분의 텍스트를 강조할 수 있는 컴포넌트를 작성하세요.
// 요구사항:
// HighlightBox라는 컴포넌트를 작성하세요.
// 부모 컴포넌트에서 children을 사용하여 강조할 텍스트를 전달합니다.
// 예시)
// <p>
// 아래 텍스트에서 중요한 부분은 <HighlightBox>노란색으로 표시</HighlightBox>됩니다.
// </p>
// 강조할 부분은 노란색 배경과 굵은 텍스트로 표시하세요.
// 스타일 객체 { backgroundColor: "yellow", fontWeight: "bold", padding: "10px" }

function HighlightBox({ children }) {
  const style = {
    backgroundColor: "yellow",
    fontWeight: "bold",
    padding: "10px",
  };

  return <span style={style}>{children}</span>;
}

export function E9() {
  return (
    <p>
      아래 텍스트에서 중요한 부분은 <HighlightBox>노란색으로 표시</HighlightBox>
      됩니다.
    </p>
  );
}
