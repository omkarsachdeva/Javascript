const mySym=Symbol("key1")
const JsUser={
    name:"omkar",
    "full name":"omkar sachdeva",
    age:20,
    [mySym]:"mykey1",
    location:"delhi",
    email:"omkar@gmal.com",
    isLoggedin:false,
    lastLoginDays:["monday","saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser.mySym);
JsUser.email="om@gmail.com"
// console.log(JsUser.email);
// Object.freeze(JsUser)
JsUser.email="omku@gmail.com"
// console.log(JsUser);

JsUser.greeying=function(){
    console.log("hello");
}
JsUser.greeying2=function(){
    console.log(`hello,${this.name}`);
}
console.log(JsUser.greeying());
console.log(JsUser.greeying2());