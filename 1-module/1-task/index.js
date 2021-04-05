function factorial(n) {
  let factorialResult = 1;
    while (n) {
        factorialResult *= n--;
    }
    return factorialResult;
}
