document.getElementById("submitBtn").addEventListener("click", () => {
    const input = document.getElementById("TakingInput").value;
    const number = parseInt(input);

    if (number <= 1) {
        console.log("It is neither prime or composite number");
        return;
    }

    printPrimeNumbers(number);
});

const checkPrime = (number) => {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i < number; i++) {  
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};

const  printPrimeNumbers = (input)  => {
    for (let i = 2; i <= input; i++) {
        if (checkPrime(i)) {
            setTimeout(() => {
                console.log(`${i} is a prime number`);
            }, i * 1000); 
        }
    }
};












    

