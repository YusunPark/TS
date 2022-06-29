abstract class User {
  constructor(protected firstName: string, protected lastName: string) {}
  abstract sayHi(name: string): string;
  abstract fullName(): string;
}

class Player4 extends User {
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello, ${name} My name is ${this.fullName()}`;
  }
}

new User(); // 불가
new Player4("yusun", "park"); //가능

// ------------------------------------------------------
// 위의 내용을 interface로 바꿀 것
// ------------------------------------------------------

// 인터페이스는 단순히 형식을 지정하니까, 상속을 사용했을때보다 코드가 더 간결해진다.
interface User1 {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

interface Human {
  health: number;
}

class Player5 implements User1, Human {
  // 인터페이스 상속을 사용하면 public 이 되어야 한다.
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello, ${name} My name is ${this.fullName()}`;
  }
}
new Player5("yusun", "park", 5);

// ------------------------------------------------------
// interface VS class 의 차이점
// ------------------------------------------------------

// 인터페이스는 고유한 사용처가 있다. - 클래스의 모양을 알려준다는 목적 / js에서 코드로 컴파일 되지 않는다.
// 인터페이스 상속의 문제점 -> private property를 사용하지 못한다. <- constructor가 없기 때문에

// 추상 클래스에서는 js에서 컴파일 된다. ( 코드가 늘어난다는 단점 존재)

function makeUser(user: User1): User1 {
  // 이렇게 인터페이스를 반환 할 수 있다. (new User1과 같은 거임)
  return user;
}

makeUser({
  // argument에 인터페이스를 씀으로써 오브젝트 모양을 지정해줄 수 있다.
  firstName: "Ysun",
  lastName: "park",
  fullName: () => "xx",
  sayHi: (name) => "string",
});
