let countries = [
    'Kyrgyzstan',
    'Russia',
    'China',
    'Korea',
    'USA'
]
function sortCountry(arr)
var newArr = arr.sort(function(a,b){
    return a.length - b.length
    
})
console.log(newArr)
