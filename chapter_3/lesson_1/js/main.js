// localStorage.setItem('username' ,'jack');
// localStorage.setItem('password', '12345');

// let elems = document.getElementsByTagName('body');
// let value = prompt('Vvedite vozrast ');

// // elems[0].style.backgroundColor= value;


// if(+value <=18){
//     elems[0].style.backgroundColor = 'green';
// }else{
//     elems[0].style.backgroundColor= 'red';
// }



let elemById = document.getElementById('title');
let elemsByClass = document.getElementsByClassName('list');
let elemsByTagName = document.getElementsByTagName('li');
let elemsByName = document.getElementsByTagName('item');

let elemId = document.querySelector('#title');
let elemClass= document.querySelectorAll('.list');
let elemsTag = document.querySelectorAll('li');
let elemsName = document.querySelectorAll('li[name="item"]');


// elem.style.backgroundColor = 'blue';

console.log(elemClass);