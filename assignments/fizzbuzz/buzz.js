for (var i = 0; i <= 100; i++) {
    if(i % 3 && i % 5 ) {
        console.log(i);
    } else {
        if(i % 3 == 0 ) {
            console.log("Fizz");
        } if (i % 5 == 0 ) {
            console.log("Buzz");
        } if (i % 3 && i % 5 ) {
            console.log(i)
        } if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        }
       

    }
}
