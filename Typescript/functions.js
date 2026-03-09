"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
//returning a needed value
function sendHello(name, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return "yolo";
}
var getHello = function (num) {
    return 67;
};
console.log(getHello(90));
console.log(sendHello("yoloe"));
loginUser('thejas', "thejasbk1@gmail.com");
signUpUser("thejas", "thejasbk1@gmail.com", false);
getUpper("hello");
addTwo(4);
