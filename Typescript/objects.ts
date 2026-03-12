const user={
    name:"thejas",
    email:"thejasbk1@gmail.com",
    isActive:true
}

function createUser({name, email, isActive}: {name: string, email: string, isActive: boolean}):{} {
    return {name:"thejas"}
}
createUser(user);

function getUser(user:{name:string}):void{
    console.log("hello", user.name);
}



type User={
    name:string;
    email:string;
    isActive:boolean;
}

function createUserOne(user:User):User{
    return {name:user.name, email:user.email, isActive:user.isActive }
}




createUserOne(user)









export{}