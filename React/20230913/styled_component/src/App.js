import { createGlobalStyle } from "styled-components";
import Example from "./Components/Example";

// 전체적으로 적용할 수 있는 스타일 : 전역스타일
// span 부터 문자열이 createGlobalStyle() 함수로 들어가는것이다.
// 태그드 템프릿 리터럴을 사용하여 함수를 사용하는 기법
const GlobalStyle = createGlobalStyle`
span {
  color: red;
  font-size: 12px;
}
`;

function App() {
  return (
    <>
      {/* 전역 스타일 컴포넌트 */}
      <GlobalStyle />
      <h1>hello world 1</h1>
      <span>hello world 2</span>
      <Example />
    </>
  );
}

export default App;
