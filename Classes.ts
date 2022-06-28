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

// Recap : 추상메소드의 해싱 맵을 만든다.

type Words = {
  [key: string]: string; // string 만은 property로 가지는 오브젝트
};
class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      // 아직 사전에 추가되지 않은 경우
      this.words[word.term] = word.def;
    }
  }
  def(term:string) {
    if (this.words[term] !== undefined) {
      return this.words[term]
    }
  }

  del(term:string) {
    if (this.words[term] !== undefined) {
      delete this.words[term]
    }
  }
  update(word: Word) {
    if (this.words[word.term] !== undefined) {
      this.words[word.term] = word.def
    }

}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국 음식");

const dict = new Dict();
dict.add(kimchi);
dict.def("kimchi")

