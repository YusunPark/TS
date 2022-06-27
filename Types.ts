type Age = number;

type Player = {
  readonly name: string; // readonly : 수정하려 하면 에러남
  age?: Age; // 선택 항목일 경우 ? 를 해준다.
};

const yusun: Player = {
  name: "yusun",
};

const solar: Player = {
  name: "yusun",
  age: 25,
};

const playerMarker = (name: string): Player => {
  return { name };
};

const a = playerMarker("a");
a.age = 3;

// 이렇게 리드온니인데 push 도 에러가 난다. filter, map은 사용 가능
const numbers: readonly number[] = [1, 2, 3, 4];
numbers.push(1);

// array의 전달해줄게 각각의 형식과 그 순서를 지켜야 한다고 알려줌
const player: [string, number, boolean] = ["yusun", 1, true];
const player2: readonly [string, number, boolean?] = ["yusun", 1];

player[0] = a; // 이렇게 타입을 바꿔서 넣으려 하면 에러남
player2[1] = 3; // readonly는 수정 불가함

//
let b: undefined = undefined;
let c: null = null;
let d: any = 1;     // 어떤 것이든 가능


// any를 써서 어떤 것이든 가능하게 했다.
const e : any[] = [1,2,3,4]
e.push("asdf")

e+d // any + any 이기에 에러가 안남

