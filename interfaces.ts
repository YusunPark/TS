import { type } from "os";

type Team = "red" | "blue" | "yellow";
type Health = 1 | 5 | 10;



type Player {
    nickname: string;
    team: Team;
    health: Health;
  }
  


interface Person {
  // type키워드가 interface 키워드보다 활용 할 수 있는게 더 많다.
  // interface 는 오로지 오브젝트의 모양을 타입스크립트에게 설명해주기 위해서만 사용된다.
  // 작동은 type이랑 동일 / type의 기능이 더 많음
  nickname: string;
  team: Team;
  health: Health;
}

const nico: Player = {
  nickname: "no",
  team: "blue",
  health: 10,
};

// 상속을 받을 수 있다.
interface Man extends Person {

}
const abc : Man = { //  Person속성을 상속받기에 내용이 다 들어가야 한다.
    
    nickname:'as',
    team: 'blue',
    health: 5
}