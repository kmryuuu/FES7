import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    // state 함수가 실행되면 state가 변경된다. state가 변경되면 컴포넌트가 다시 랜더링 된다.
    // 비동기 적으로 실행된다.
    // 이 때 state 함수는 바로 실행되지 않고 기다렸다가 가장 마지막에 호출된 state함수만 실행된다. (같은걸 여러번 호출하는건 의미가 없다)
    // 이런 현상이 발생하는 이유는 업데이트 비용이 큰 작업이고 state 함수는 비동기적으로 동작하기 때문이다.
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
}
