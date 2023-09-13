function ColorText(props) {
  return (
    <div>
      <h3 style={{ color: props.color }}>색이 바뀌어요!</h3>
    </div>
  );
}

// 이렇게도 가능하다.
// function ColorText(color) {
//     return (
//       <div>
//         <h3 style={{ color: color }}>색이 바뀌어요!</h3>
//       </div>
//     );
//   }

export default ColorText;
