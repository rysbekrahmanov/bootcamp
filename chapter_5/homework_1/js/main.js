// class cat{
//     constructor(name,paroda,color){
//         this.name = name;
//         this.poroda = paroda;
//         this.color = color;
//     }
//     isLive = true;
//     health = 100;
//     hungry= 100;
//     tiredness = 0;
    
//     play(){
//         this.health -=15;
//         this.hungry -=10;
//         this.tiredness -=15;
//     }
//     feed (){
//         this.health +=10;
//         this.hungry +=10;
//         this.tiredness +=10;

//     }
//     treat(){
//         this.health +=20;
//         this.tiredness -=5;
//     }
//     happiness = function(){
//         return(this.health+this.hungry+this.tiredness)/2;
//     }
// }

// let japai = new cat('myshyk','japai','kapkara');
//_______________________________________________________________________//


// class Animal {
//     constructor(name, color, voise){
//         this.name = name;
//         this.color = color;
//         this.voise = voise;
//     }
//     isLive = true;
//     eat(){
//         console.log(this.name+": ням ням")
//     }
//     say(){
//         console.log(this.voise)
//     }
// }

// class Cat extends Animal {
//     constructor(name,color,voise){
//         super(name,color,voise)
//     }
//     sleep(){
//         console.log("Муррррррр")
//     }
// }

// let koshak = new Cat("koshak", "belyi", "myau")
// koshak.say();
//_______________________________________________________________//
// let p = document.getElementsByTagName('p')
// console.log(p)
// for (let i=0; i <p.length; i++){
// p[i].style.color = "red";
// }

// let p1 = document.getElementsByClassName('ttt');
// let p2 = document.querySelectorAll('.ttt');

// for (let j=o; j<p2.length; i++){
//     p2[j].onclick = function(){
//         alert('work')
//     }
// }
// console.log(p1);
// console.log(p2);

//__________________________________________________________________//


// let a  =[3,-12,0,4,5,-8]

// let b= [];
// for(let i=0;i<a.length; i++){
//     if (a[i]>=0) b.push(a[i])
// }

// console.log(a);
// console.log(b);

// let c = a.filter(function(currentValue,index){
//     return index%2==0;

// })

// console.log(c)
//___________________________________________________________________//






// class Person {
//     constructor(name,lastName, age){
//         this.name = name;
//         this.lastName = lastName;
//         this.age = age

//     }
//     sayName(){
//         console.log('Hello my name is'+ this.name)
//     }
//     sayLastName(){
//         console.log('Hello my lastname is'+ this.lastName)
//     }
//     sayAge(){
//         console.log('Hello my age is'+ this.age)
//     }
//     getInfo(){
//         console.log(this.name,this.lastName,this.age)
//     }
// }

// const nick= new Person('Nick', 'Lotovski', 45);
// const emir = new Person('Emir', 'Taalaibekov', 16);
// const aibek  = new Person ('Aibek','Sapashov',28)

// nick.sayName()
// emir.sayName()

// class Worker extends Person {
//     constructor(workerName,workerLastName,workerAge,position,salary){
//         super(workerName,workerLastName,workerAge)
//         this.position = position
//         this._salary = salary
//     }
    
//     work(){
//         console.log('Ya vypolnyaiu rabotu:'+ this.position)
//     }
//     get salary (){
//         return this._salary
//     }
//     set salary(val){
//         this._salary = val-200

//     }
// }
// const dastan = new Worker('Dastan','Alymbekov',22,'Mentor', 2500);
// const emir = new Worker('Emir','Taalaibekov',16,'Mentor', 2000);

// console.log(dastan.salary)
// console.log(emir.salary)

// dastan.salary = 3000
// console.log(dastan.salary)
// dastan.work()
// dastan.getInfo()
// dastan.sayName()
// dastan.sayLastName()


// emir.work()
// emir.getInfo()
// emir.sayName()
// emir.sayLastName()
 
