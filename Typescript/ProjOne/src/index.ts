// class User {
//   email: string;
//   private name: string;
//   city: string = "heelo";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

// const obj1 = new User("thejasb1@gdmail.com", "thdejass");
// console.log(obj1.city);
// obj1.city = "udupi";

class User {
  protected courseCount: number = 0;

  constructor(
    public email: string,
    private name: string,
    private userId?: number,
  ) {
    this.email = email;
    this.name = name;
  }

  get getAppleEmail(): string {
    return this.name;
  }

  set setCounter(count: number) {
    this.courseCount += count;
  }

  get getCount(): number {
    return this.courseCount;
  }
}

class SubUser extends User {
  isFam: boolean = true;
  changeCourse() {
    this.courseCount = 6;
  }
}

const userOne = new User(
  "thejasbfdfdfk1@gdddddddmailgfgf.com",
  "thejas",
  45324,
);

userOne.setCounter = 90;

//more on interfaces
interface TakePhoto {
  camera: string;
  model: string;
  brust: number;
}

interface Story {
  createStory(): void;
}

class Instagram implements TakePhoto, Story {
  constructor(
    public camera: string,
    public model: string,
    public brust: number,
    public short: string,
  ) {}
  createStory(): void {
    console.log("stou");
  }
}

//abstract classes
abstract class TakePhotos {
  constructor(
    public cameraMode: string,
    public burstSpeed: number,
  ) {}
  abstract getSit(): void;

  getReel(): number {
    return 56;
  }
}

class NotSoGoodPhot extends TakePhotos {
  constructor(
    public cameraMode: string,
    public burstSpeed: number,
  ) {
    super(cameraMode, burstSpeed);
  }
  getSit(): void {
    console.log("not so good photo");
  }
}

//generics
const score: Array<number> = [];
const names: string[] = [];

function getIdentityOne(val: boolean | number): boolean | number {
  return val;
}

function getIdentityTwo(val: any): any {
  return val;
}

//code
function identtityThree<Type>(val: Type): Type {
  return val;
}
identtityThree("3");

function identityFour<T>(val: T): T {
  return val;
}
identityFour(45);

//ex
interface bottle {
  brand: string;
  type: string;
}
identityFour<bottle>({ brand: "brand", type: "type" });

function getSearchProducts<T>(products: T[]): T[] {
  const Index = 3;
  return products;
}
const getMoreSearchProducts = <T>(products: T[], i: number): T | undefined => {
  return products[i];
};

//generic classes
function funcTwo<T, U extends number>(val: T, val1: U): object {
  return {};
}

funcTwo(3, 45);

//using classes
interface Course {
  name: string;
  author: string;
  duration: number;
}

class Sellable<T> {
  public cart: T[] = [];
  addToCard(products: T) {
    this.cart.push(products);
  }
}

//Type narrowing
function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return 45;
}

//more on it
interface UserIn {
  Onename: string;
  email: string;
}
interface AdminIn {
  Onename: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAcc(acc: UserIn | AdminIn) {
  if ("isAdmin" in acc) {
    return acc.isAdmin;
  }
  return false;
}

isAdminAcc({ Onename: "John", email: "john@example.com" });

//
type Fish = {
  method: () => string;
};
type Bird = { method: () => string };

function isFish(per: Fish | Bird): per is Fish {
  return (per as Fish) !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    return pet.method();
  }
  throw new Error("Invalid pet type");
}

//discriminated Union
interface Circle{
  kind:"circle"
  rad:number
}
interface Square{
  kind:"square"
  side:number
}
interface rectangle{
  kind:"rectangle"
  length:number
  width:number
}

type Shape=Circle|Square;
function getTrueShape(shape:Shape){
  if(shape.kind==="circle"){
    return Math.PI*shape.rad**2;
  }
}


//exhaustive
function getArea(shape:Shape){
 switch(shape.kind){
  case "circle":
    return Math.PI*shape.rad**2
  
  case "square":
    return Math.PI*shape.side*shape.side;

  default:
    const _defaultForShape:never=shape;
    return _defaultForShape;

 }
}