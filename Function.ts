// Call Signatures : ts에게 함수 자체의 type들을 지정해서 알려주는거
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;

// 시그니처를 안쓰면 이렇게 하나하나 적어줘야 함.
const minus = (a: number, b: number) => a + b;
