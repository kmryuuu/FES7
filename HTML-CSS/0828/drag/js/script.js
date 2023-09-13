const dropTarget = document.querySelector(".drop-target");
const dragItems = document.querySelectorAll(".drag-item");

dragItems.forEach((item) => {
  item.addEventListener("dragstart", () => {
    // 바로 실행되지 않고 약간의 지연을 주겠다는 뜻으로 0은 써도 되고 안써도됌.
    setTimeout(() => {
      item.classList.add("dragging");
    }, 0);
  });
  item.addEventListener("dragend", () => item.classList.remove("dragging"));
});

function handleDragOver(e) {
  e.preventDefault();
  const draggingItem = dropTarget.querySelector(".dragging");
  const notDraggingItems = Array.from(
    dropTarget.querySelectorAll(".drag-item:not(.dragging)")
  );

  // find 첫번째 요소의 값을 찾자마자 반환하기 때문에 find를 씀.

  const nextItem = notDraggingItems.find((item) => {
    // clientY : 뷰포트 내 마우스 y 좌표
    // offsetTop : 뷰포트에서 요소까지의 y 좌표
    // offsetHeight : 요소의 높이 (border 포함)

    // 요소의 크기를 반으로 나누어서 clientY 작거나 같을 때 요소의 앞보다 드래그가 된다.
    // clientY 보다 크면 뒤로 드래그가 된다.
    return e.clientY <= item.offsetTop + item.offsetHeight / 2;

    // console.log("clientY: ", e.clientY);
    // console.log("offsetTop: ", item.offsetTop);
    // console.log("offsetHeight", item.offsetHeight);
  });

  dropTarget.insertBefore(draggingItem, nextItem);
}

dropTarget.addEventListener("dragover", handleDragOver);
// dropTarget.addEventListener('dragenter')
