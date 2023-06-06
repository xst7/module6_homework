function num(x){
    return function (y){
        return x + y;

    }
}
const result = num(5);
console.log(result(6));