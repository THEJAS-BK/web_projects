"use strict";
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
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.courseCount = 0;
        this.email = email;
        this.name = name;
    }
    get getAppleEmail() {
        return this.name;
    }
    set setCounter(count) {
        this.courseCount += count;
    }
    get getCount() {
        return this.courseCount;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFam = true;
    }
    changeCourse() {
        this.courseCount = 6;
    }
}
const userOne = new User("thejasbk1@gmail.com", "thejas", 45324);
userOne.setCounter = 90;
class Instagram {
    constructor(camera, model, brust) {
        this.camera = camera;
        this.model = model;
        this.brust = brust;
    }
}
//# sourceMappingURL=index.js.map