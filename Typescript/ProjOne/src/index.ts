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

    protected courseCount:number=0;

  constructor(
    public email: string,
    private name: string,
    private userId?:number
  ) {
    this.email = email;
    this.name = name;
  }

 get getAppleEmail():string{
    return this.name;
  }

  set setCounter(count:number){
    this.courseCount+=count;
  }

  get getCount():number{
    return this.courseCount
  }
}



class SubUser extends User{
    isFam:boolean=true;
    changeCourse(){
        this.courseCount=6;
    }
}

const userOne = new User("thejasbk1@gmail.com","thejas",45324)

userOne.setCounter=90;


//more on interfaces
interface TakePhoto{
    camera:string
    model:string
    brust:number
}

class Instagram implements TakePhoto{
    constructor(
        public camera:string,
        public model:string,
        public brust:number
    ) {
        
    }
}