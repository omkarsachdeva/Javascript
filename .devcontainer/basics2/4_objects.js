// const tinderUser=new Object()

const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="omkar"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser={email:"om@gmail.com",

    fullname:{
        userfullname:{
            firstname:"omkar",
            lastname:"sachdeva"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3={obj1,obj2}
// const obj3=Object.assign(obj1,obj2)

const obj3={...obj1,...obj2}
// console.log(obj3);

const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },

]
users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('email'));
const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
const {courseInstructor:instructor}=course
console.log(instructor);
// {
//     "name" :"om",
//     "course":"js",
//     "price":"free"

// }