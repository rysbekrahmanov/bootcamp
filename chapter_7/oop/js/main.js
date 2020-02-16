// class Array{
//     constructor(color, voice){
//         this.color =color
//         this.voice = voice
//     }
//     static type ='This is Animal type'

//     sayVoice(){
//         alert('This animal say'+ this.voice)
//     }
// }
// class Dog extends Array {
//     constructor(name,type, color, voice='gav'){
//         super(color, voice)
//         this.name =name
//         this.type =type
//     }

//     givePaw(){
//         alert(`${this.name}give to you paw`)
//     }
// }
// const dog = new Dog ('Sharik','Ovcharka','black',)

// dog.sayVoice()



//___________________________________________________________________________________________________



// function Animal(color, voice){
//      this.color =color
//      this.voice =voice
// }
// Animal.type ='This is animal'
// Animal.prototype.sayVoice= function(){
//     alert('This animal say'+this.voice)
// }
//  function  Dog(name, type, color, voice ='gav'){
//      Animal.call(this, color, voice)
//      this.name =name
//      this.type =type
//  }
//  Dog.prototype ={
//      ...Animal.prototype
//  }

//  Dog.prototype.givePaw =function(){
//      alert(`${this.name} give to you paw`)
//  }

//  const dog =new Dog ('Sharik', 'Ovcharka', 'black')

//  console.log(dog)
//  dog.givePaw()

//__________________________________________________




