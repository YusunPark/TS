// ------------------------------------------------
// Classes

// 추상 클래스 :  다른 클래스가 ''상속'' 받을 수 있는 클래스  / 그러나 인스턴스는 생성 불가
abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickname: string
  ) {}

  // 추상 메소드
  abstract getNickName(): void;

  // 메소드
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
class Player2 extends User {} // 여기서 추상 메소드를 정의 하지 않아서 에러가 남

class Player3 extends User {
  getNickName() {
    console.log(this.nickname);
  }
}

const yusun = new Player3("yusun", "park", "solar");
yusun.nickname;
yusun.firstname; // private는 접근 할 수 없다. / js에선 할 수 있음

let name = yusun.getFullName();

const yusun2 = new User("yusun", "park", "solar"); // 추상 클래스는 인스턴스 생성 불가
