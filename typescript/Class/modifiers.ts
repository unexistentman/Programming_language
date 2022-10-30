// Access Modifiers
class AMClass {
  protected name: string;
  public tag: string;
  private age: number;
  constructor(name: string, tag: string, age: number) {
    this.name = name;
    this.tag = tag;
    this.age = age;
  }

  getAge(): string {
    return `AMClass - age: ${this.age}`;
  }
}

class DesAMClass extends AMClass {
  getName(): string {
    return `DesAMClass - name: ${this.name}`;
  }

  getTag(): string {
    return `DesAMClass - tag: ${this.tag}`;
  }

  // getAge(): string {
  //   return `DesAMClass - age: ${this.age}`; // error
  // }
}

let amclass = new AMClass('name', 'tag', 1);
let desamclass = new DesAMClass('name', 'tag', 1);
console.log(desamclass.getName());
// console.log(desamclass.name); // error

console.log(desamclass.getTag());
console.log(desamclass.tag);

// console.log(desamclass.age); // error
console.log(amclass.getAge());
// console.log(amclass.age); // error

class AMClass1 {
  name: string;
  protected constructor(name: string) {
    this.name = name;
  }
}

// const amclass1 = new AMClass1('test'); // error

class AMClass2 {
  constructor(public name: string, protected age: number) {}
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
}

const amclass2 = new AMClass2('test', 1);
console.log(amclass2.getName());
console.log(amclass2.getAge());

// static & readonly
class StaticClass {
  static hands: number = 2;
  static legs: number;
  constructor() {
    // this.legs = 4; // error
    StaticClass.legs = 4;
  }

  static getLegs() {
    return 4;
  }
}

console.log(StaticClass.legs);
console.log(StaticClass.hands);
console.log(StaticClass.getLegs());
new StaticClass();
console.log(StaticClass.legs);

class ROClass {
  public readonly name: string;
  protected static age: number;
  constructor(n: string) {
    this.name = n;
    ROClass.age = 20;
  }
  private static getTag() {
    return 'tag';
  }
}

let roclass = new ROClass('test');
console.log(roclass.name);
// roclass.name = 'test1'; // error

// console.log(ROClass.age); // error
// console.log(ROClass.getTag()); // error