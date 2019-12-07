const words = [
    "javascript",
    "hello",
    "makers"
]

let word = words[Math.floor(Math.random()*words.length)];

let answerArr = word.split("").map(function(item){
    return"_"

})
let remainingLeters = word.length;
let attemts = 0;
let trueAttemps = 0;

while(remainingLeters>0){

    let guess =prompt("Ugadaite bukvu, ili najmite otmena chtoby vyiti iz igry \n"+ answerArr.join()).toLowerCase();
    console.log(guess)
    if(guess==="")continue;
    if(guess===null)break;

    if (guess.length !== 1){
        alert("Please write just one word.");
        continue;
    }
    
    word.split("").map(function(item){
        if (guess=== item && answerArr[index]=="_"){
            isTrueGuess=ture;
            answerArr[index] = guess;
            remainingLetters--;

        }
    })

}
if(!remainingLeters){

alert ("Uraa !!,vy otgadali slovo \n" +answerArr.join)
   
}