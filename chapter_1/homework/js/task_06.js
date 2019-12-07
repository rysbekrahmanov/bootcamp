let age = prompt('How old are you');

if (age>=1 && age<13){
    console.log('Fast and Furious');
}else if(age>=14 && age<17){
    console.log('Film Djeki');
}
else if (age>=18){
    console.log('Serial')
}else {
    console.log('error!!!Vozrast ne vveden')
}