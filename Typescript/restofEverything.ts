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












































export{}