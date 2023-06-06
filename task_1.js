function parity(){
let mas = [1, 2, 3, 4, 0, 'a', false]
let even = [];
let odd = [];
let zero = [];
for (let i = 0; i < mas.length; i++){
    if (isNaN(mas[i])){

    }else if (typeof (mas[i]) !== "number"){

    }else if (mas[i] === 0){
        zero.push(mas[i]);
    }else if (mas[i] % 2 === 0){
        even.push(mas[i]);
    }else {
        odd.push(mas[i]);
    }
}

console.log('Количество нулей в массиве: ' + zero.length);
console.log('Количество четных чисел в массиве: ' + even.length);
console.log('Количество не четных чисел в массиве: ' + odd.length);
}