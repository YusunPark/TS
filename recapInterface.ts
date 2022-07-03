// 1. 타입스크립트에게 오브젝트 모양을 알려주고 싶다.
// 1-1. type 을 사용하기

type PlayerA = {
  name: string;
};

const playerA: PlayerA = {
  name: "tusun",
};

////////

// 1-2. interface 사용하기
interface PlayerB {
  name: string;
}

const playerB: PlayerB = {
  name: "yusun",
};

// 모양을 알려주는 목적은 둘 다 할 수 있다.
// 2. 그러나 다른 동작이 존재하는데 그것은 상속

// 2-1. type 사용하기
type PlayerAA = PlayerA & {
  lastName: string;
};
const playerAA: PlayerAA = {
  name: "tusun",
  lastName: "xx",
};

// 2-2. 인터페이스 사용하기
// 인터페이스 사용시에는 인터페이스의 이름이 중복되어도 된다.
//알아서 합쳐줌. type은 불가
interface PlayerB {
  lastName: string;
}
interface PlayerB {
  health: number;
}
const playerBB: PlayerB = {
  name: "yusun",
  lastName: "sss",
  health: 10,
};

class UserA implements PlayerA {
  constructor(public name: string) {}
}


// Type Aliases과 Interfaces의 차이점

// Type Aliases과 인터페이스는 매우 유사하며 많은 경우 자유롭게 선택할 수 있습니다. 인터페이스의 거의 모든 기능은 type에서 사용할 수 있으며, 주요 차이점은 type을 다시 열어 새 속성을 추가할 수 없는 것입니다. 반면 인터페이스는 항상 확장 가능합니다.

// 결론: 대부분의 경우 개인 취향에 따라 선택 가능
// (인터페이스 사용을 조금 더 추천)