let str = prompt('Введите номер телефона')

function phonNumber(number) {
    let pattern = /^(\+\d+\s)?(\d+\s?)+$/gi
    let cod = /^\+\d{1,3}/;
    console.log(pattern.test(number));
    return number.match(cod)[0]
    
}
alert(phonNumber(str));