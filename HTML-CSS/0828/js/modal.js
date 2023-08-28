const modal = document.querySelector(".modal");
const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
const dim = document.querySelector(".dim");

// 쿼리 셀렉터는 첫번째 값만 반환한다.
const focusableEl = modal.querySelectorAll("a, button");
const firstEl = focusableEl[0];
const lastEl = focusableEl[focusableEl.length - 1];

// console.log(focusableEl, firstEl, lastEl);

function openModal() {
  modal.classList.add("active");
  document.documentElement.style.overflow = "hidden";

  firstEl.focus();
}
function closeModal() {
  modal.classList.remove("active");
  document.documentElement.style.overflow = "auto";
}

function handleTab(e) {
  // e.key : 누른 Key 정보를 반환
  //   console.log(e.key);
  // shift 키를 누른 정보를 boolean 값으로 반환
  //   console.log(e.shiftKey);

  // activeElement : 현재 포커스를 받고 있는 요소 반환
  const activeEl = documentElement;

  if (e.key === "Tab") {
    if (e.shiftKey) {
      // tab + shift : 역순으로 탐색

      if (activeEl === firstEl) {
        e.preventDefault();
        lastEl.focus();
      }
    } else {
      if (activeEl === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
      // tab
    }
  }
}

btnOpen.addEventListener("click", openModal);
btnClose.addEventListener("click", closeModal);
dim.addEventListener("click", closeModal);

firstEl.addEventListener("keyup", handleTab);
lastEl.addEventListener("keyup", handleTab);
