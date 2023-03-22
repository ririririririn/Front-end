/* 

    생성자(Constructor)
      - 같은 형태의 객체를 만들 수 있는 틀을 미리 ㅁ나든다.
      - 생성자는 대문자로 시작한다(파스칼 케이스)
      - 함수 내부에서 this를 통해 프로퍼티를 할당하면 생성자 함수가 된다.
        => 이 때 this 가 가리키는 것은 생성될 인스턴스를 가리킨다.


    인스턴스(instance)
      - 생성자를 통해 실제로 만들어진 객체로 실제 메모리 할당된다!!!!!!!
      - 생성자를 new 키워드와 함께 호출하면 인스턴스가 생성된다.
        => 생성된 인스턴스마다 프로퍼티 값이 다르다.
      - return 값을 생략해도 자동으로 객체를 생성해서 반환한다.

    객체 리터럴 방식 : {} 기호를 사용해 간단하게 객체 생성.
      => 같은 형체의 객체를 만들 때 직접 작성해야 한다는 단점이 있다

*/

let user01 = {
  name: "rin",
  age: 26,
  hello: function () {
    console.log(`안녕 ${this.name}`);
  },
};

user01.hello();

function User(name, age) {
  this.name = name;
  this.age = age;
  //헬로 메서드 만들기
}
//prototype // 인스턴스가 공ㅇ통으로 사용할 메서드,프로퍼티를 상속시켜준다

//프로토타입 메서드: 인스턴스가 프로토타입엣게 상속받아 사용하는 메서드
User.prototype.hello = function () {
  console.log(`안녕 ${this.name}`);
};

let user03 = new User("rin", 26);
console.log(user03);
console.log(user03.hello);

//정적 메서드(Static) : 생성자 함수를 통해 직접 호출하는 메서드 => 인스턴스는 호출 불가. 상속 안됨

User.isUser = function (obj) {
  return obj instanceof User;
};

console.log(User.isUser(user01));

Math.Pi; // math의 정적 프로퍼티;

function Cat(age, color) {
  this.age = age;
  this.color = color;
}
Cat.prototype.cry = function () {
  console.log("냐옹");
};
//밀크의 프로토타입 캣
let milk = new Cat(2, "pink");
console.log(milk);
console.log(milk.Cry);

let obj = new Object();
console.log(obj);
console.clear();
/* 
    클래스(class)
      - 생성자 함수와 동일한 역할을 한다.
      - 다른 객체지향 프로그래밍 언어에서 흔히 사용하는 클래스 개념을 도입했다.
        => 새로운 개념이 아니라 프로토타입 기반인 것은 동일하다.
        => 문법적으로 사용하기 쉽게 만들어진 것으로 이를 "문법적 설탕" 이라고 표현한다.
      - new 키워드와 함께 클래스를 호출하면 construtor 가 객체를 초기화한다.
        => 초기화 할 값이 없다면 constructor 생략 가능
        => js 가 내부적으로 constructor 자동으로 생성
*/

class Player {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //프로토타입 메서드 선언 :인스턴스도 쓸 수 있음
  hello() {
    console.log(`안녕 나는 ${this.name}`);
  }

  // 인스턴스는 못써!!
  static isPlayer(obj) {
    return obj instanceof Player;
  }
}

let player = new Player("rin", 26);
console.log(player);
console.log(player.hello);
console.log(Player.isPlayer(player));

class Animal {
  constructor(legs, color) {
    this.legs = legs;
    this.color = color;
  }
  eat() {
    console.log("밥냠냠");
  }
}

/* 
    클래스의 상속
      - 상위 클래스를 상속받아서 메서드 등을 사용할 수 있다
      - 상속 받을 때 constructor 을 작성하면 
      내부에 super( 상위 클래스의 constructor)을 호출해야한다.

*/

/// 상속받는다!!! Aniaml
// 상속받을 때는 초기화
class Dog extends Animal {
  constructor(legs, color, cute) {
    super(legs, color); /// 상속받는거 에 넣어줄거야! super
    this.cute = cute;
  }

  static bow() {
    console.log("멍!멍!");
  }

  eat() {
    console.log("사료냠냠");
  } // 애니멀에도 같은 함수 있음!! 근데 dog에서 덮어씀!!!! => 오버라이딩
}

let dog = new Dog(4, "black", "socute");
console.log(dog);
dog.eat();

//bird 다리 2개 color는 생성할 때 초기화, fly 함수 날아가자

class Bird extends Animal {
  constructor(color) {
    super(2, color);
  }
  fly() {
    console.log("훨훨");
  }
}

let bird = new Bird("white");
console.log(bird);
bird.fly();

/* car 
gas 연료량 eco 연비
 move 호출하면 "속도로 이동 남은련료: 연료량" 실제 연료 줄이기
 =>gas 모자라면 연료가 부족합니다 출력
 getGas(연료) 주유.연료 증가????*/

class Car {
  constructor(color, speed, gas, eco) {
    this.color = color;
    this.speed = speed;
    this.gas = gas;
    this.eco = eco;
  }
  move(km) {
    if (this.gas > km / this.eco) {
      this.gas -= km / this.eco;
      console.log(
        `${this.speed} 속도로 ${km}km 이동, 남은 연료 ${
          this.gas - this.eco * km
        }L `
      );
    } else {
      console.log("경고! 연료 부족");
    }
  }
  getGas(plusGas) {
    console.log(this.gas + plusGas);
  }
}
let car = new Car("green", 10, 50, 2);
console.log(car);

car.move(10);
car.getGas(20);
