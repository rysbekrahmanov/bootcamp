function diapazone (num){
    let i=1;
    let arr =[];
    while (i!=num){
        arr.push(i)
        if(i<num){
            i++;
        }else if (i>num){
            i--
        }
    }
    return arr.join()
}
console.log(diapazone(6))