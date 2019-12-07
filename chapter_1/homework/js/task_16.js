let arr =[1,0,2,3,4,0,0,0,5];

let nulls = arr.filter(function(item){
    return item === 0
})
let num = arr.filter(function(item){
    return item !== 0;
})
console.log(num.concat(nulls));


