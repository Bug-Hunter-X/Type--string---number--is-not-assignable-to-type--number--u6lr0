function printNumber(num: number): void {
  console.log(num);
}

function usePrintNumber(num: number | string): void {
  printNumber(num); // Error: Argument of type 'string | number' is not assignable to parameter of type 'number'.
}

usePrintNumber(5);
usePrintNumber('5')