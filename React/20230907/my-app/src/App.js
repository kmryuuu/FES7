import "./App.css";

// function App() {
//   const name = "라이켓";
//   function 함수() {
//     // 주석표시
//     /**
//      * 주석표시
//      */

//     return "함수";
//   }
//   const someStyle = { backgroundColor: "yellow", color: "white" };

//   return (
//     // 문자를 제외한 속성값은 {} 중괄호를 사용한다.
//     <div>
//       <h1 className="h1">안녕 {함수() ? "함수" : "JSX"}!</h1>
//       <h1 className="newClass">안녕 라이켓!</h1>
//       <input type="text" style={{ backgroundColor: "red" }} />
//     </div>
//   );
// }

function App() {
  const name = "라이캣!";
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDay();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  const someStyle = { backgroundColor: "black", color: "white" };
  return (
    <div>
      <h1 style={{ backgroundColor: "black", color: "white" }}>
        안녕, {name} 1호!
      </h1>
      <h1>안녕, 라이캣 2호!</h1>
      <div className="newClass"></div>
      <h1>년 : {year}</h1>
      <h1 style={someStyle}>
        월/일 : {month} / {day}
      </h1>
      <h1 style={someStyle}>
        시간 : {hours}시 {minutes}분 {seconds}초
      </h1>
    </div>
  );
}

export default App;
