type Age = number;

type Player = {
  name: string;
  age?: Age; // 선택 항목일 경우 ? 를 해준다.
};

const yusun: Player = {
  name: "yusun",
};

const solar: Player = {
  name: "yusun",
  age: 25,
};

function playerMarker(name: string): Player {
  return { name };
}

const a = playerMarker("a");
a.age = 3;
