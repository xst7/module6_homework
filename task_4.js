let a = +prompt('введите первое число');
let b = +prompt('введите второе число');
function num (a, b){
    let res = setInterval(function (){
        console.log(a++);
        if (a > b) clearInterval(res)
    }, 1000)
}
num(a, b);