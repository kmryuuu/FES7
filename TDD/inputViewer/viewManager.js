class ViewManager {
  constructor(textManager, options) {
    this.inpTxt = options.inpTxt;
    this.viewerEl = options.viewerEl;
    this.textManager = textManager;

    options.btnEl.addEventListener('click', () => {
      this.changeValue();
    });
  }

  changeValue() {
    // input 요소에 사용자가 입력한 값을 가져와서 textManager가 관리하게 합니다.
    this.textManager.setValue(this.inpTxt.value);
    this.updateView();
  }

  // textManager가 관리하는 값을 viewer에 적용합니다.
  updateView() {
    this.viewerEl.textContent = this.textManager.getValue();
  }
}
