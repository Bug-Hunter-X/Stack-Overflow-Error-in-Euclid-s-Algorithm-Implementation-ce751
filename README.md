# Stack Overflow Error in Euclid's Algorithm
This repository demonstrates a common error in recursive implementations of Euclid's algorithm for finding the greatest common divisor (GCD) of two numbers. The provided JavaScript code causes a stack overflow error for certain inputs due to excessive recursion.

The `bug.js` file contains the buggy implementation, while `bugSolution.js` provides a corrected version that avoids the stack overflow by using iteration instead of recursion.

## Bug Description
The recursive implementation of Euclid's algorithm can lead to a stack overflow when the inputs are relatively prime and large.  This is because each recursive call adds a new frame to the call stack, and the number of recursive calls can become excessively large in such cases.

## Solution
The solution involves rewriting the algorithm using iteration, which eliminates the risk of a stack overflow by avoiding excessive function calls. The iterative approach uses a `while` loop to repeatedly apply the core logic of Euclid's algorithm until the GCD is found.