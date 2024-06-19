function sayMyName(){
    console.log("o");
    console.log("m");
    console.log("k");
    console.log("a");
    console.log("r");
}
// sayMyName()

// function addTwoNumber(num1,num2){
//     console.log(num1+num2);
// }
// addTwoNumber("3","4")
function addTwoNumber(num1,num2){

    let result=num1+num2
    return result
    // console.log("hitesh");
}

const result=addTwoNumber(3,5)
// console.log("result:",result);

function loginUserMessage(username="sam") {
    // if(username===undefined)
    if(!username)
    {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("omkar"));
console.log(loginUserMessage("om"));