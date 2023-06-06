alert('Здесь вы можете возвести число в степень )')
let x = +prompt('Введите пожалуйста число');
let n = +prompt('В какую степень хотите возвести ваше число?');
let exponentiation = (x, n) => console.log('Результат вашего запроса = ' + x**n);
exponentiation(x, n)