// Any
let any: any = 123;
any = 'Hello world';
any = {};
any = null;

const list: any[] = [1, true, 'Anything!'];

// "noImplicitAny": true

// Unknown
let a: any = 123;
let u: unknown = 123;

let v1: boolean = a;
// let v2: number = u; // Error

let v3: any = u;
let v4: number = u as number;

// Object
let obj: object = {};
let arr: object = [];
let func: object = function() {};
// let nullValue: object = null; // Error
let data: object = new Date();

let userA: { name: string, age: number } = {
  name: 'jeong',
  age: 30
};

let userB: { name: string, age: number } = {
  name: 'jeong',
  age: false,
  email: 'example@gmail.com'
};

interface IUser {
  name: string,
  age: number
}

let userC: IUser = {
  name: 'jeong',
  age: 123
};

let userD: IUser = {
  name: 'jeong',
  age: false,
  email: 'example@gmail.com'
};

// Null & Undefined
let num1: number = undefined;
let str1: string = null;
let arr1: any[] = null;
let obj1: { a: 1, b: false } = undefined;
let und: undefined = null;
let nul: null = undefined;
let voi2: void = null;
let voi1: void = undefined;

// "strictNullChecks" : true