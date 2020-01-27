let inp = $('#inp')

$('#btn').on('click', ()=>{
    let surName = inp.val().split(' ');
    let result = surName[0]+ '. ' + surName[1][0] + '. ';
    if(surName[2]){
        result += surName[2][0] + ''
    }
    alert(result)
})