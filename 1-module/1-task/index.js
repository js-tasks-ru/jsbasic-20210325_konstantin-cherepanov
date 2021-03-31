function factorial(n) {
  // ваш код...
  var factorialResult = 1;
    while (n) {
        factorialResult *= n--;
    }
    return factorialResult;
}
