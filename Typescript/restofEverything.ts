const arr: string[] = [];
const arr1: Array<number> = [];

type User = {
  name: string;
  isActive: boolean;
};
const arr2: User[] = [];

const arr3: number[][] = [];

arr3.push([2334], [34343]);

//union types
 let score:number|string=44;

 score="thejas";


 //two types can be used
 type User1={
    name:string;
    id:string
 }
 type Admin={
    username:string;
    id:string
 }

let thejas :Admin|User1={
    name:"thejas",
    id:"thejas"
}

thejas={
    username:"thejas",
    id:"newid"
}

//func to use it
function getDbId(id:number|string){
   if(typeof id==="string"){
     console.log(id.toLowerCase())
   }
}
getDbId(3)


//get const vals
let pi:3.14=3.14;

let searAllotment:"aisle"|"middle"|"window"

searAllotment="aisle"


//tuple Shit

const user:string[]=['yo']

let tuUser:[string,number,boolean];
tuUser=["thej",131,true]

let rgb:[number,number,number]=[255,245,222];

type User2=[number,string]

const newUser:User2=[342,"New Nuke"]


//Enums
enum SearChoice{
    AISLE=10,
    MIDDLE,
    WINDOW,
    FOURTH
}

enum searChoiceTwo{
    AISLE="aisle",
    MIDDLE=3,
    WINDOW="window",
    FOURTH=4
}

const hcSeat=SearChoice.AISLE;
console.log(hcSeat)


//interfaces
interface User3{
    readonly dbId:number,
    emial:string,
    userId:number,
    googleId?:string,
    startTrial:()=>string,
    trial():string,
    getCoupon(couponName:string):number
}

//reopen a interface
interface User3{
githubToken:string
}

//inheritance
interface Admin1 extends User3{
    role:"Admin"|"ta"|"learner"
}



const mrUser:Admin1={
    dbId:33445,
    role:"ta",
    emial:"thejasbk1@gmail.com",
    githubToken:"ygfodgoidf",
    userId:1233,
    startTrial:()=>{return "hello"},
    trial:()=>{
        return "uol"
    },
    getCoupon:(couponName:"hello")=>{
        return 45
    }
}





























export{}