

$(document).ready(function(){
    $(".calc_inp").append('<button id="btn_calc">Рассчитать</button>');
    
    let inp1 = $('.hours');
    let inp2 = $('.minutes');
    
    
    let btn = $('#btn');
    
    let inp = $('.calc_inp');

    $('#btn_calc').on('click',function(){
        $('.modal').removeClass('hidden')


    });
    $('.modal_close').on('click',function(){
        $('.modal').addClass('hidden')
    })
    $('.calc_inp').on('click', ()=>{
        // let inp1val = inp1.val();
        // let inp2 = inp2.val();
    
        var array =[]
        var timeToSleep = parseInt(inp1.val())*60+parseInt(inp2.val())
        
        for (let i=0; i<6;i++){
            timeToSleep = timeToSleep - 90
        
            if (timeToSleep<0){
                timeToSleep = 24*60-90
            }
            var min = timeToSleep%60
            var hour =(timeToSleep-min)/60
        
            array.push({
                hours:hour,
                minutes:min
            })
        }
        var result =[]
        
        for(let i=0; i<array.length; i++){
            const el = array[i];
            result.push (el.hours+ ':'+ el.minutes);
        }
        
        console.log(array)
    
    });
    
    $('.modal_close').on('click',()=>{
        style.display = 'none';
    });
});

// $('.modal').style.visibility = 'hidden';
// $('.hidden').style.display = 'none';

