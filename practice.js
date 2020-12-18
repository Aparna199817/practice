//array destructuring
let [firstname,lastname]=["A","V"]
console.log(firstname);
let user={};
[user.fn,user.ln]="a v".split(' ');
console.log(user.ln);
let use={
    person:"aj",
    age:22
};
for (let [key,value] of Object.entries(use)){
    console.log(`${key}:${value}`);
};
let admin="a";
let guest="v";
[admin, guest] = [guest, admin];
console.log(`${admin}`);
//object destructuring
let obj={
    title:"obj",
    width:100,
    height:110
};
let {width:w,height:h,title:t}=obj;
console.log(t);