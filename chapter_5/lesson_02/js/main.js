
// setTimeout(()=>{
//     console.log('Async')
// },0)

// console.log('Sync')

// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/',false);
// console.log(xhr.responseText);
// xhr.onload = function(){
//     console.log(JSON.parse(this.response))
// }

// xhr.send()

// $.ajax({
//     url:'https://pokeapi.co/api/v2/pokeon/',
//     success: function(data){
//         console.log(data)
//     },error:function(error){
//         console.log(error)
//     }
// })

// const request = fetch('https://pokeapi.co/api/v2/pokemon/');

// console.log(request)


// fetch('https://pokeapi.co/api/v2/pokmon/')
//     .then(result=>result.json())
//     .then(data=>console.log(data))
//     .catch(err=>console.log('some error'))

// const age = 20;

// const newPr = new Promise(function(resolve, reject){
//     if(age >= 21){
//         resolve({age, status: true})
//     }else{
//         reject({age, status: false})
//     }
// })
// newPr
//     .then(data =>console.log(data))
//     .catch(err=> console.log(err))


// const checkAge=(age)=>{
//     return new Promise((resolve,reject)=>{
//         if(age>=21){
//             resolve({age,status:true})
//         }else{
//             reject({age,status:false})
//         }
//     })
// }

// checkAge(20)
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err))

// checkAge(25)
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err))
