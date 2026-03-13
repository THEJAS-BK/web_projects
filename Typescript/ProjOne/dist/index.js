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
const userOne = new User("thejasbfdfdfk1@gdddddddmailgfgf.com", "thejas", 45324);
userOne.setCounter = 90;
class Instagram {
    constructor(camera, model, brust, short) {
        this.camera = camera;
        this.model = model;
        this.brust = brust;
        this.short = short;
    }
    createStory() {
        console.log("stou");
    }
}
//abstract classes
class TakePhotos {
    constructor(cameraMode, burstSpeed) {
        this.cameraMode = cameraMode;
        this.burstSpeed = burstSpeed;
    }
    getReel() {
        return 56;
    }
}
class NotSoGoodPhot extends TakePhotos {
    constructor(cameraMode, burstSpeed) {
        super(cameraMode, burstSpeed);
        this.cameraMode = cameraMode;
        this.burstSpeed = burstSpeed;
    }
    getSit() {
        console.log("not so good photo");
    }
}
//generics
const score = [];
const names = [];
function getIdentityOne(val) {
    return val;
}
function getIdentityTwo(val) {
    return val;
}
//code
function identtityThree(val) {
    return val;
}
identtityThree("3");
function identityFour(val) {
    return val;
}
identityFour(45);
identityFour({ brand: "brand", type: "type" });
function getSearchProducts(products) {
    const Index = 3;
    return products[Index];
}
const getMoreSearchProducts = (products, i) => {
    return products[i];
};
//# sourceMappingURL=index.js.map