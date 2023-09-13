class VendingMachineFunc {
  constructor() {
    // section1 요소 선택
    const vMachine = document.querySelector(".section1");
    this.balance = vMachine.querySelector(".bg-box p");
    this.itemList = vMachine.querySelector(".cola-list");
    this.inputCostEl = vMachine.querySelector("#input-money");
    this.btnPut = vMachine.querySelector("#input-money+.btn");
    this.btnReturn = vMachine.querySelector(".bg-box+.btn");
    this.btnGet = vMachine.querySelector(".btn-get");
    this.stagedList = vMachine.querySelector(".get-list");

    // section 2 요소 선택
    const myInfo = document.querySelector(".section2");
    this.myMoney = myInfo.querySelector(".bg-box p");

    // section 3 요소 선택
    const getInfo = document.querySelector(".section3");
    this.getList = getInfo.querySelector(".get-list");
    this.txtTotal = getInfo.querySelector(".total-price");
  }

  setup() {
    this.bindEvents();
  }

  // 장바구니에 선택한 콜라의 목록을 생성
  stageditemGenerator(target) {
    const stagedItem = document.createElement("li");
    stagedItem.dataset.item = target.dataset.item;
    stagedItem.dataset.img = target.dataset.img;
    stagedItem.dataset.price = target.dataset.price;
    stagedItem.innerHTML = `<img src="./img/${target.dataset.img}" alt="" />${target.dataset.item}<strong>1<span class="a11y-hidden">개</span></strong>`;
    this.stagedList.append(stagedItem);
  }

  // 이벤트를 붙입니다.
  bindEvents() {
    /**
     * 1. 입금 버튼 기능
     * 소지금 === 소지금 - 입금액
     * 잔액 === 기존의 잔액 + 입금액
     * 입금액이 소지금보다 많으면 "소지금이 부족합니다." 경고창을 띄운다.
     * 입금액 인풋창은 초기화 되어야한다.
     */

    this.btnPut.addEventListener("click", () => {
      // 사용자 입력값, 사용자가 입력하는 금액을 정수로 형변환, parseInt 는 25만 나와서
      // 25,000원에서 빼기 위해 replaceAll을 넣어준다.
      const inputCost = parseInt(this.inputCostEl.value);
      // 현재 사용자의 돈, textContent가 string 이어서 형변환
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(",", ""));
      // 현재 자판기 잔액
      const balanceVal = parseInt(this.balance.textContent.replaceAll(",", ""));

      // 입금액이 있고, 소지금 보다 적거나 같다면
      if (inputCost) {
        // 입금액이 0이나 입력금액이 없을 때 alert이 뜨니까 if문 하나 더 추가해줌
        if (inputCost <= myMoneyVal && inputCost > 0) {
          // Intl 객체를 통해서 사용자의 국가의 화폐 단위에 맞춰서 반환된다.
          this.myMoney.textContent =
            new Intl.NumberFormat().format(myMoneyVal - inputCost) + "원";

          this.balance.textContent =
            new Intl.NumberFormat().format(
              (balanceVal ? balanceVal : 0) + inputCost
            ) + "원";
        } else {
          alert("소지금이 부족합니다.");
        }

        // 입금액 초기화
        this.inputCostEl.value = null;
      }
    });

    /**
     * 2. 거스름돈 반환 기능
     * 반환 버튼을 누르면 소지금 === 소지금 + 잔액
     * 잔액창은 초기화된다.
     */

    this.btnReturn.addEventListener("click", () => {
      // 현재 사용자의 돈
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(",", ""));
      // 현재 자판기 잔액
      const balanceVal = parseInt(this.balance.textContent.replaceAll(",", ""));

      // 잔액이 있다면
      if (balanceVal) {
        this.myMoney.textContent =
          new Intl.NumberFormat().format(myMoneyVal + balanceVal) + "원";

        this.balance.textContent = null;
      }
    });

    /**
     * 3. 자판기 메뉴 기능
     * 콜라를 누르면 잔액 === 잔액 - 콜라 가격
     * 콜라 가격보다 잔액이 적다면 "잔액이 부족합니다." 경고창 띄운다.
     * 콜라가 장바구니에 등록되어야 한다.
     * 콜라의 data-count 값을 -1 한다.
     * 만약 data-count 값이 0 이라면 button 요소에 disabled 속성이 추가되고,
     * 콜라 템플릿에 strong 태그가 추가되어야 한다.
     */

    // css에 button 밑에 자식 요소들이 있기 때문에
    const colaBtns = this.itemList.querySelectorAll("button");

    colaBtns.forEach((colaBtn) => {
      colaBtn.addEventListener("click", (event) => {
        // 현재 잔액
        const balanceVal = parseInt(
          this.balance.textContent.replaceAll(",", "")
        );

        // 클릭한 콜라의 가격
        const targetElPrice = parseInt(colaBtn.dataset.price);
        const stagedListItem = this.stagedList.querySelectorAll("li");
        let isStaged = false;

        // 잔액이 콜라 가격보다 많거나 동일하다면
        if (balanceVal >= targetElPrice) {
          this.balance.textContent =
            new Intl.NumberFormat().format(balanceVal - targetElPrice) + "원";

          for (const item of stagedListItem) {
            // 선택한 콜라가 이미 장바구니에 존재하는 경우
            if (item.dataset.item === colaBtn.dataset.item) {
              const itemTxt = item.querySelector("strong");
              // 장바구니 콜라의 카운트를 1 증가
              itemTxt.firstChild.textContent =
                parseInt(itemTxt.firstChild.textContent) + 1;
              isStaged = true;
              isStaged = true;
              break;
            }
          }

          // 만약 처음 선택한 콜라라면 콜라를 장바구니에 담기
          if (!isStaged) {
            this.stageditemGenerator(colaBtn);
          }

          colaBtn.dataset.count--;

          // 만약 콜라의 카운트가 0 이라면
          if (parseInt(colaBtn.dataset.count) === 0) {
            colaBtn.disabled = ture;
            colaBtn.insertAdjacentHTML(
              // 첫번째 자식으로 넣는 insertAdjacentHTML
              "afterbegin",
              '<strong class="soldout">품절</strong>'
            );
          }
        } else {
          alert("잔액이 부족합니다. 돈을 더 입금해 주세요.");
        }
      });
    });

    /**
     * 4. 획득 버튼 기능
     * 획득 버튼을 누르면 선택한 음료수 목록이 획득한 음료 목록으로 이동합니다.
     * 획득한 음료의 금액을 모두 합하여 총 금액을 업데이트 합니다.
     */

    this.btnGet.addEventListener("click", () => {
      const itemStagedList = this.stagedList.querySelectorAll("li");
      const itemGetList = this.getList.querySelectorAll("li");
      let totalPrice = 0;

      // 장바구니 아이템을 획득 목록으로 이동하기
      //   this.getList.append(...itemStagedList);

      // 획득한게 있으면 카운트만 올려주고, 획득한게 없으면 새로 넣어줘야 한다.

      for (const itemStaged of itemStagedList) {
        let isStaged = false;
        for (const itemGet of itemGetList) {
          // 장바구니의 콜라가 이미 획득리스트에 있다면
          if (itemStaged.dataset.item === itemGet.dataset.item) {
            const itemTxt = itemGet.querySelector("strong");
            // 장바구니 콜라의 카운트를 증가
            parseInt(itemTxt.firstChild.textContent) +
              parseInt(
                itemStaged.querySelector("strong").firstChild.textContent
              );
            isStaged = true;
            break;
          }
        }
        if (!isStaged) {
          this.getList.append(itemStaged);
        }
      }
      // 장바구니 목록 비우기
      this.stagedList.innerHTML = null;

      // 획득한 음료 리스트를 순환하면서 총 금액을 계산한다.
      this.getList.querySelectorAll("li").forEach((itemGet) => {
        totalPrice +=
          parseInt(itemGet.dataset.price) *
          parseInt(itemGet.querySelector("strong").firstChild.textContent);
      });

      this.txtTotal.textContent = `총 금액 : ${new Intl.NumberFormat().format(
        totalPrice
      )} 원`;
    });
  }
}

export default VendingMachineFunc;
