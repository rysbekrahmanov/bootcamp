let input = $('#sum');

input.on('change',()=>{
    let result = 0;
    input.val().spilt('').forEach(function(item){
        result += +item
    })
    console.log(result)
})

