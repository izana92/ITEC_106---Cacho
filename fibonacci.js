function fibonacci(iterations) {
    let fibArray = [];
    let a = 0, b = 1;
    fibArray.push(a);
    fibArray.push(b);

    for (let i = 2; i < iterations; i++) {
        let next = a + b;
        fibArray.push(next);
        a = b;
        b = next;
    }

    return fibArray;
}

function printFibonacci() {
    let numTerms;

    while (true) {
        numTerms = prompt("Enter the number of terms in the Fibonacci sequence:");

        if (numTerms === null || numTerms === "") {
            alert("No input provided. Please enter a valid number.");
        } else {
            numTerms = parseInt(numTerms);

            if (isNaN(numTerms) || numTerms >= 100) {
                alert("Invalid input. Please enter an integer less than 100.");
            } else {
                break; // Break out of the loop if input is valid
            }
        }
    }

    let sequence = fibonacci(numTerms);
    alert("Fibonacci sequence: " + sequence.join(', '));
}

printFibonacci();
