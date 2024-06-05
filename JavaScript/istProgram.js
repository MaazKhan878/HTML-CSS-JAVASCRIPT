const a = 5;
const prompt = require('prompt-sync')();
const b= parseFloat(prompt("Enter a number:"))
console.log(a + b);
if(b>16){
    console.log(b + " Greater than 16");
}
else{
    console.log(b + "Less than 16");
}
let a1 = [1,2,3,4,5,6,7];
for(let i of a1){
    console.log(i);

}
function maaz(){
    console.log("maaz");
}
maaz();
let maazKhan = {
    name: "maaz",
    age: 20,
    gender: "male"
}
for(let i in maazKhan){
    console.log(i +":"+ maazKhan[i]);
}