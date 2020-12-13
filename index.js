/*
//function declaration
function showMessage() {
  console.log( 'Hello everyone!' );
}
showMessage();
showMessage();
//function exp
function sayHi() {
    console.log( "Hello" );
  }
  
  console.log( sayHi ); 

//arrow-functions
let sum = (a,b) => a + b
  console.log(sum(2,3))

//optionalchaining
let use={}
console.log(use?.address)
console.log(use.address?.street)
//objects
let user={
    name: "aj",
    age: 22,
    "likes birds": true,
}
console.log(user.name)
console.log(user["likes birds"])
console.log("age" in user)
for (let key in user) {
    console.log( key )
    console.log( user [key] )
}
//consructor function
function Userr(name) {
    this.name = name;
    this.isAdmin = false;
  }
  
  let userr = new Userr("av");
  
  console.log(userr.name); 
  console.log(userr.isAdmin);
//return from constructor
function BigUser() {

    this.name = "John";
  
    return { name: "Godzilla" }; 
  }
  console.log( new BigUser().name );
//functions can be declared in object
let ap={
    name: "ap" ,
    sayHi:function(){
        console.log("hi");
    }
};
ap.sayHi()
//array methods
let fruits = ["Apple", "Orange", "Banana"];
console.log( fruits.pop() ); 
console.log( fruits );
console.log(fruits.push("Banana"));
console.log( fruits );
console.log(fruits.shift());
console.log(fruits);
console.log(fruits.unshift("Apple"));
console.log(fruits);
let array=["I","study","complex","language","javascript"];
let removed=array.splice(2,3);
console.log(removed);
array.splice(2,0,"complex","language");
console.log(array); 
console.log(array.slice(1,2));
console.log(array.concat("javascript"));
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let userss = users.find(item => item.id == 1);

console.log(userss.name);
*/
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths);