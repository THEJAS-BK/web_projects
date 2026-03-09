function addTwo(num:number){
    return num+2
}

function getUpper(val:string){
    return val.toUpperCase();
}

function signUpUser(name:string,email:string,isPaid:boolean){

}

let loginUser=(name:string,email:string,isPaid:boolean=false)=>{}


//returning a needed value
function sendHello(name:string,isPaid:boolean=false):string{
    return "yolo"
}

const getHello=(num:number):number=>{
    return 67;
}

console.log(getHello(90))


console.log(sendHello("yoloe"))

loginUser('thejas',"thejasbk1@gmail.com")

signUpUser("thejas","thejasbk1@gmail.com",false)
getUpper("hello")
addTwo(4)
export{};