function chooseLetter(str, letter){
    return str.split('').filter(function(item){
        return letter === item


    })

}
console.log(chooseLetter('mercedes', 'e' ))