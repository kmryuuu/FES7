import React from "react";
import styles from "./App.module.css";
import Question from "./Components/Question";

const App = () => {
  // {styles.box} 로 클래스 명에 문자열을 넣으니까 개발자 창에서 보면 클래스 명에 고유의 아이디가 생긴다.
  return (
    <>
      <nav className={styles.box}>
        <ul>
          <li id="detail" className={styles.text}>
            상세정보
          </li>
          <li id="qa" className={styles.text}>
            Q&A
          </li>
          <li id="review" className={styles.text}>
            Review
          </li>
        </ul>
      </nav>
      <Question />
    </>
  );
};

export default App;
