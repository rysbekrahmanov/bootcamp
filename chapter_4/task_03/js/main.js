let inp1 = $('inp:eq(0)');
let inp2 = $('inp:eq(1)');
let inp3 = $('inp:eq(2)');
let btn =$('.btn');

btn.on('click' , function(){
    for(let i= inp1.val(); i =inp2.val(); i++){
        if( i % inp3.val()===0){
            result += i / inp3.val()
        }

    }
    console.log(result)
})