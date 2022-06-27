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

// ------------------------------------------------
// Polymorphism
// generic = placeholder 같은 거임
type SuperPrint = {
  (arr: number[]): void;
  (arr: boolean[]): void;
  (arr: string[]): void;
  (arr: (number | boolean)[]): void;
};

const superprint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};

superprint([1, 2, 3, 4]);
superprint([true, false, true]);
superprint([1, 2, true, false]);

// 제네릭스 사용 : 다 쓸 수 있다.

type SuperPrint2 = {
  <T>(arr: T[]): void; // ts가 유추하도록 만드는것
};

const superprint2: SuperPrint2 = (arr) => {
  arr.forEach((i) => console.log(i));
};

superprint2([1, 2, 3, 4]);
superprint2([true, false, true]);
superprint2([1, 2, true, false]);
superprint2([1, 2, true, false, "ㅁㄴ"]);

// ------------------------------------------------
// Generics Recap
//any와의 차이점은 해당 타입에 대한 정보를 잃지 않는다.
//any는 any로서 밖에 알 수 없지만 generics는 타입 정보를 알 수 있다.
type SuperPrint3 = (arr: any[]) => void; // ts가 유추하도록 만드는것
const superprint3: SuperPrint3 = (arr) => {
  arr.forEach((i) => console.log(i));
};

superprint3([1, 2, 3, 4]);
superprint3([true, false, true]);
superprint3([1, 2, true, false]);
superprint3([1, 2, true, false, "ㅁㄴ"]);
