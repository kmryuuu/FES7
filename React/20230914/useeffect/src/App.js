import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleCountUp = (e) => {
    setCount(count + 1);
  };

  useEffect(() => {
    // 최초 이펙트
    if (count % 2 === 0) {
      alert("짝수입니다");
    } else {
      alert("홀수입니다");
    }
    // 두번째 이벤트
    return () => {
      alert("컴포넌트가 바뀌기 직전입니다");
    }; // return 값으로 함수를 준다.
  }, [count]); // [] 빈 배열을 넣으면 첫번째만 동작하고 동작하지 않는다. = count에 의존하지 않는다.

  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
