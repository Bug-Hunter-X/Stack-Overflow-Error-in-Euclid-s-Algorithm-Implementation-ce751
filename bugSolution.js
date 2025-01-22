function gcd(a, b) {
  while (b) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(gcd(10, 2)); // Output: 2
console.log(gcd(10, 3)); // Output: 1
console.log(gcd(100, 35)); //Output:5