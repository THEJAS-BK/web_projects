"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "thejas",
    email: "thejasbk1@gmail.com",
    isActive: true
};
function createUser(_a) {
    var name = _a.name, email = _a.email, isActive = _a.isActive;
    return { name: "thejas" };
}
createUser(user);
function getUser(user) {
    console.log("hello", user.name);
}
