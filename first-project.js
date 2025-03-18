function fizzBuzz(max){
    for(let i = 0; i < max; i++ ){
        if(i % 3 === 0 && i % 5 !== 0){
            console.log(i);
        } else if(i % 5 === 0 && i % 3 !== 0){
            console.log(i);

        }
    }
}

fizzBuzz(10);
fizzBuzz(20);
fizzBuzz(30);