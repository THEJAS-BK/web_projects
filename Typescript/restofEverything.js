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
