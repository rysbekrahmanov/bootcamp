$('.btn').on('click', function (){
    let num = $('.inp').val();
    let arr = [];
    for(let i=0; i<num; i++){
        arr.push(Math.random()*10)
    }
    let sortArr = [...arr].sort(function(a,b){
        return a-b
    });
    for ( let i=0; i<arr.length; i++){
        if(arr[i]==sortArr[0]){
            arr[i] = sortArr[sortArr.length-1]
        }else if(arr[i]==sortArr.length-1){
            arr[i]= sortArr[0]
        }
    }
    console.log(arr)


})