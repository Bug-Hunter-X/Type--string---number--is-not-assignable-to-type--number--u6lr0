# Type 'string | number' is not assignable to type 'number'

This repository demonstrates a common TypeScript error:  Type 'string | number' is not assignable to type 'number'.  The error arises when a function expects a specific type (number in this case), but it receives a value that could potentially be another type (string). 

## How to Reproduce
1. Clone this repository.
2. Open `bug.ts`.
3. Compile and run the code.  You'll encounter a TypeScript compilation error.

## Solution
The solution is provided in `bugSolution.ts`.  It shows how to address the issue using type guards and/or type narrowing techniques.