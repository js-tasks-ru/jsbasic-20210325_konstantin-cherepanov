function factorial(n) {
    // ваш код...
    let factorialResult = 1;
    while (n) {
        factorialResult *= n--;
    }
    return factorialResult;
}