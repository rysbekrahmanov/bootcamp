// function createObj(name, age){
//     // return {
//     //     name: name,
//     //     age: age
//     // }
//     return {name,age}
// }
// console.log(createObj('emir',16));

// function ConstructorObj(name,age){
//     this.age = age;
//     this.name = name;
// }
// ConstructorObj.prototype.sayHi = function(){
//     console.log(`Hi, im ${this.name}`)
// }
// let emir = new ConstructorObj('emir',16);
// let fais = new ConstructorObj('fais',30)
// console.log(emir);

class Animal{
    constructor(name, color,word){
        this.name = name;
        this.color = color;
        this.word = word;
    }
    isLive = true;
    say(){
        console.log(this.word)
    }
}
let cat = new Animal ("cat","green","myau");
let dog = new Animal ("dog", "black","gavgav");
let bird = new Animal ("bird", "white","chichi");
cat.say();
dog.say();
bird.say();