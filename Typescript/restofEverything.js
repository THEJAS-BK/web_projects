"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arr = [];
var arr1 = [];
var arr2 = [];
var arr3 = [];
arr3.push([2334], [34343]);
//union types
var score = 44;
score = "thejas";
var thejas = {
    name: "thejas",
    id: "thejas"
};
thejas = {
    username: "thejas",
    id: "newid"
};
//func to use it
function getDbId(id) {
    if (typeof id === "string") {
        console.log(id.toLowerCase());
    }
}
getDbId(3);
//get const vals
var pi = 3.14;
var searAllotment;
searAllotment = "aisle";
//tuple Shit
var user = ['yo'];
var tuUser;
tuUser = ["thej", 131, true];
var rgb = [255, 245, 222];
var newUser = [342, "New Nuke"];
//Enums
var SearChoice;
(function (SearChoice) {
    SearChoice[SearChoice["AISLE"] = 10] = "AISLE";
    SearChoice[SearChoice["MIDDLE"] = 11] = "MIDDLE";
    SearChoice[SearChoice["WINDOW"] = 12] = "WINDOW";
    SearChoice[SearChoice["FOURTH"] = 13] = "FOURTH";
})(SearChoice || (SearChoice = {}));
var searChoiceTwo;
(function (searChoiceTwo) {
    searChoiceTwo["AISLE"] = "aisle";
    searChoiceTwo[searChoiceTwo["MIDDLE"] = 3] = "MIDDLE";
    searChoiceTwo["WINDOW"] = "window";
    searChoiceTwo[searChoiceTwo["FOURTH"] = 4] = "FOURTH";
})(searChoiceTwo || (searChoiceTwo = {}));
var hcSeat = SearChoice.AISLE;
console.log(hcSeat);
var mrUser = {
    dbId: 33445,
    emial: "thejasbk1@gmail.com",
    userId: 1233,
    startTrial: function () { return "hello"; }
};
