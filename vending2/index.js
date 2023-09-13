import ColaGenerator from "./js/colaGenerator.js";
import VendingMachineFunc from "./js/VendingMachineFunc.js";

const colaGenerator = new ColaGenerator();
// index.js가 최상위 모듈이기 때문에 사용 가능하다.
// 읽을 때 순서때문에 await을 넣어줘야한다.
await colaGenerator.setup();

const VendingMachine = new VendingMachineFunc();
VendingMachine.setup();
