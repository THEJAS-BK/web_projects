const user={
    name:"thejas",
    email:"thejasbk1@gmail.com",
    isActive:true
}

function createUser({name, email, isActive}: {name: string, email: string, isActive: boolean}) {
    
}
createUser(user);

function getUser(user:{name:string}){
    console.log("hello", user.name);
}

export{}