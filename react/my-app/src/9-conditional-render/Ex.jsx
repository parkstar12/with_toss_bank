// 연습문제 1: UserProfile 조건부 렌더링
// 사용자 프로필 정보를 표시하는 UserProfile 컴포넌트를 작성하세요.
// 요구사항:
// props.user 객체가 존재하면 사용자 이름과 이메일을 렌더링합니다.
// props.user가 null 또는 undefined이면 "사용자 정보가 없습니다."라는 메시지를 렌더링합니다.
// 힌트: if-else 또는 삼항 연산자를 활용하여 조건부 렌더링을 구현합니다.
import React, { useState } from "react";

function UserProfile(props) {
  if (props.user) {
    return (
      <div>
        {Object.keys(props.user).map((key) => (
          <div>
            <h3>사용자 이름 :{props.user[key].name}</h3>
            <h3>이메일 : {props.user[key].email}</h3>
          </div>
        ))}
      </div>
    );
  } else {
    return <h3>사용자 정보가 없습니다.</h3>;
  }
}

export function E1() {
  const user = {
    user1: { name: "홍길동", email: "gildong.com" },
    // user2: { name: "홍길동2", email: "gildong2.com" },
    // user3: { name: "홍길동3", email: "gildong3.com" },
  };

  return <UserProfile user={user}></UserProfile>;
}
// 연습문제 2: Notification 컴포넌트 (삼항 연산자 사용)
// 문제:
// Notification 컴포넌트를 작성하여, 알림의 개수에 따라 메시지를 다르게 보여주세요.
// 요구사항:
// props.count가 0이면 "새로운 알림이 없습니다."를 렌더링합니다.
// props.count가 0보다 크면 "새로운 알림이 {count}개 있습니다."를 렌더링합니다.
// 힌트: 삼항 연산자를 사용하여 간결하게 구현할 수 있습니다.

export function E2() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>알림창</h3>
      <h3>
        {count == 0
          ? "새로운 알림이 없습니다."
          : `새로운 알림이 ${count}개 있습니다.`}
      </h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        알림 증가
      </button>
    </div>
  );
}
// 연습문제 3: Advertisement 컴포넌트 (&& 연산자 사용)
// 문제:
// 프리미엄 회원이 아닐 때 광고를 표시하는 Advertisement 컴포넌트를 작성하세요.
// 요구사항:
// props.isPremium이 false일 때만 광고 영역을 렌더링합니다.
// 프리미엄 회원이면 아무것도 렌더링하지 않습니다.
// 힌트: 논리 연산자(&&)를 활용하여 조건이 참일 때만 광고 영역을 표시합니다.

function Advertisement(props) {
  const adstyle = {
    width: "300px",
    height: "300px",
    backgroundColor: "red",
    textAlign: "center",
    item,
  };
  const Ad = () => {
    return <div style={adstyle}>광고</div>;
  };
  if (!props.isPremium) {
    return <Ad />;
  }
  return null;
}

export function E3() {
  return <Advertisement isPremium={false} />;
}
