function factorialIterative(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

function factorialRecursive(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorialRecursive(n - 1);
}

function calculate() {
    const input = document.getElementById('factInput').value;
    const num = parseInt(input);

    const iterativeResult = document.getElementById('iterativeResult');
    const recursiveResult = document.getElementById('recursiveResult');

    if (isNaN(num) || num < 0) {
        iterativeResult.textContent = "Please enter a valid positive number.";
        recursiveResult.textContent = "";
    } else {
        iterativeResult.textContent = "Iterative: " + factorialIterative(num);
        recursiveResult.textContent = "Recursive: " + factorialRecursive(num);
    }
}