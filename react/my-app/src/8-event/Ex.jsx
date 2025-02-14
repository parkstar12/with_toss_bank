//연습문제1: 마우스 오버와 마우스 아웃 이벤트
// 목표: onMouseEnter와 onMouseLeave 이벤트를 사용하여
//  마우스가 특정 영역에 들어오거나 나갈 때 상태를 변경하는 방법을 학습합니다.
// 요구사항: 다음 조건에 맞는 컴포넌트를 작성하세요.
// 마우스가 박스 위에 올라가면 배경색이 변경됩니다.
// 마우스가 박스를 벗어나면 원래 배경색으로 돌아옵니다.
// 상태로 관리되는 메시지를 화면에 출력하세요. (예: "마우스가 들어왔습니다", "마우스가 나갔습니다")
import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";

export function E1() {
  const [color, setcolor] = useState("red");
  const style = { backgroundColor: color, width: "500px", height: "500px" };
  const on = () => {
    setcolor("red");
  };
  const out = () => {
    setcolor("black");
  };
  return <div style={style} onMouseEnter={on} onMouseLeave={out}></div>;
}
//연습문제2: 폼 제출 이벤트 처리하기
// 목표: onSubmit 이벤트를 통해 폼 제출을 처리하고 기본 동작을 방지하는 방법
//요구사항 - 다음 조건에 맞는 컴포넌트를 작성하세요.
// 1.사용자 이름과 나이를 입력하는 폼을 만드세요.
// 2.폼이 제출되면 입력값을 콘솔에 출력하고 입력 필드를 비웁니다.
// 3.기본 폼 제출 동작을 방지하세요 (e.preventDefault() 사용).

export function E2() {
  const [InputValue, setInputValue] = useState("");
  const [Inputnum, setInputNum] = useState();

  const gogo = (e) => {
    e.preventDefault();
    setInputNum("");
    setInputValue("");

    console.log({ 이름: InputValue, 나이: Inputnum });
  };

  return (
    <div>
      <form onSubmit={(e) => gogo(e)}>
        <input
          type="text"
          placeholder="이름을 입력하세요"
          value={InputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        ></input>
        <br />
        <input
          type="number"
          placeholder="나이를 입력하세요"
          value={Inputnum}
          onChange={(e) => {
            setInputNum(e.target.value);
          }}
        ></input>
        <br />
        <button type="submit">제출</button>
      </form>
    </div>
  );
}
// 연습문제 3: 입력 필드에서 글자 수 제한하기
// 목표: 입력 필드의 입력값을 상태로 관리하고 글자 수 제한하는 방법을 학습합니다.
// 요구사항: 다음 조건에 맞는 컴포넌트를 작성하세요.
// 1.사용자가 텍스트를 입력할 수 있는 입력 필드가 있습니다.
// 2.입력값은 최대 10자까지만 허용됩니다.
// 3.입력값의 길이에 따라 남은 글자 수를 화면에 표시하세요.

export function E3() {
  const [count, setcount] = useState(10);
  const [inputValue, setInputValue] = useState("");

  const handletext = (e) => {
    let nexttext = e.target.value;
    if (nexttext.length <= 10) {
      setInputValue(nexttext);
    }
  };
  useEffect(() => {
    setcount(10 - inputValue.length);
  }, [inputValue]);

  return (
    <div>
      <h3>남은글자수는 {count}입니다.</h3>
      <input
        type="text"
        placeholder="입력하세요! "
        value={inputValue}
        onChange={handletext}
      ></input>
    </div>
  );
}

export function Event3() {
  const [inputValue, setInputValue] = useState("");
  const maxLength = 10;

  const handleChange = (e) => {
    if (e.target.value.length <= maxLength) {
      setInputValue(e.target.value);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>글자 수 제한 입력 필드</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="최대 10자 입력 가능"
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <h4>남은 글자 수: {maxLength - inputValue.length}</h4>
    </div>
  );
}
