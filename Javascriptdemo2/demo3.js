document.getElementById("submitBtn").addEventListener("click", () => {
    const input = document.getElementById("TakingInput").value;
    const number = parseInt(input);

    if (number <= 1) {
        console.log("It is neither prime or composite number");
        return;
    }

    Prime1(number);
});

function prime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i < number; i++) {  
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function Prime1(input) {
    for (let i = 2; i <= input; i++) {
        if (prime(i)) {
            setTimeout(() => {
                console.log(`${i} is a prime number`);
            }, i * 1000); 
        } else {
            setTimeout(() => {
                console.log(`${i} is not a prime number`);
            }, i * 1000); 
        }
    }
}











    

