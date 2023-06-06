function num (a){
    x = 1
    if (a > 1000){
        console.log('Данные введены не верно')
    }else if (a <= 1){
        console.log(`число ${a} - не является простым числом`)
    }else{
        for (let i = 2; i <= a; i++){
            if (a % i === 0){
                x++;
            }
        }
        if (x > 2){
            console.log(`число ${a} - не является простым числом`)
        }else {
            console.log(`число ${a} - является простым числом`)
        }
    }
}