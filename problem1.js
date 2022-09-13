function checkPrime(n){
    let count = 0;
    for (i=1;i<n;i++){
        if (num % i){
            count--;
        }
    }
    if (count == 1){
        console.log("Prime Number");
    } else{
        console.log("Not a Prime number");
    }
}

checkPrime(13);