import React, { useState } from "react";

export default function App2() {
  const [data, setData] = useState([
    // data 를 변경해주려면 setData를 쓸 수 밖에 없다.
    {
      title: "개발자 무릎 담요",
      price: 17500,
      id: 101,
    },
    {
      title: "Hack Your Life 개발자 노트북 파우치",
      price: 29000,
      id: 102,
    },
    {
      title: "우당탕탕 라이켓의 실험실 스티커북",
      price: 29000,
      id: 103,
    },
    {
      title: "버그를 Java라 버그잡는 개리씨 키링",
      price: 29000,
      id: 104,
    },
  ]);

  //   function deleteFunc(id) {
  //     setData(
  //       data.filter((item) => {
  //         return item.id !== id;
  //       })
  //     );
  // 데이터에 접근해서 제어
  // 아래에서 전달받은 id 와 위에 id 값을 비교해서 같지 않은것과 골라서 새로운 배열을 만들겠다.
  // 쉽게 설명하면 버튼을 누른것(자기자신)을 빼고 (버튼을 누르지 않은 것으로)새로운 배열을 만든다.
}

// 이러한 방식을 함수형 업데이트라고 한다.
// 함수형 업데이트의 장점은 콜배함수의 인자에 이전의 상태가 돌아가는것을 리액트가 보장한다.

function deleteFunc(id) {
  setData((prevData) => {
    return prevData.filter((item) => {
      return item.id !== id;
    });
  });
}

return (
  <ul>
    {data.map((item) => {
      return (
        <li key={item.id}>
          <h2>{item.title}</h2>
          <strong>{item.price}</strong>
          <button onClick={() => deleteFunc(item.id)}>삭제</button>

          {/* 아래는 자바스크립트 방식 : 사용자가 DOM에 직접 접근하여 제어하는 것은 컴포넌트 관리의 일관성에 위배된다. */}
          {/* <button onClick={(event) => event.target.closest('li').remove()}>삭제</button> */}
        </li>
      );
    })}
  </ul>
);
