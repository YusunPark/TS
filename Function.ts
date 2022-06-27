import { config } from "process";

// Call Signatures : ts에게 함수 자체의 type들을 지정해서 알려주는거
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;

// 시그니처를 안쓰면 이렇게 하나하나 적어줘야 함.
const minus = (a: number, b: number) => a + b;

// ------------------------------------------------
//Overloading
type Divid = {
  // call signature를 길게 쓰는 방식 (오버로딩을 위해서)
  (a: number, b: number): number;
  (a: number, b: string): number;
  (a: number, b: number, c: number): number; // 개수를 다르게 받는 것도 됨.
};

const divid: Divid = (a, b, c?: number) => {
  //대신 다르게 받을땐 ? 붙여야 한다.
  if (c) return a / b / c;
  if (typeof b === "string") return a;
  return a / b;
};

type Config = {
  path: string;
  state: object;
};

type Push = {
  // push 는 둘 중에 하나를 받을 수 있다.  (두개의 타입을 다 받을 수 있다는 거)
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") console.log(config);
  else {
    console.log(config.path, config.state);
  }
};
