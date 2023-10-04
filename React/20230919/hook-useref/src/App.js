import { useState, useRef } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const countThree = useRef(0);
  let countFour = 0;

  const handleCountUp = () => {
    setCount(count + 1);
    console.log(count);
  };

  const handleCountUpTwo = () => {
    setCountTwo(countTwo + 1);
    console.log(countTwo);
  };

  const handleCountUpThree = () => {
    countThree.current += 1;
    console.log(countThree.current);
  };

  const handleCountUpFour = () => {
    countFour += 1;
    console.log(countFour);
  };

  // useState, useRef 둘다 값을 저장하지만 화면에 렌더링을 하는건
  // useState, useRef는 업데이트가 되도 화면에 렌더링 되지 않는다.

  // 변수와 레프는 값은 저장이 되지만 값이 변해도 화면의 업데이트는 되지 않는다.
  useEffect(() => {
    console.log("count가 감시되고 있습니다.");
  }, [count]);

  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>up!</button>
      <div>{countTwo}</div>
      <button onClick={handleCountUpTwo}>up!</button>
      <div>{countThree.current}</div>
      <button onClick={handleCountUpThree}>up!</button>
      <div>{countFour}</div>
      <button onClick={handleCountUpFour}>up!</button>
    </>
  );
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}
export default App;
