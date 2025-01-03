function printNumber(num: number): void {
  console.log(num);
}

function isNumber(num: number | string): num is number {
  return typeof num === 'number';
}

function usePrintNumber(num: number | string): void {
  if (isNumber(num)) {
    printNumber(num); 
  } else {
    console.log('Not a number');
  }
}

usePrintNumber(5);
usePrintNumber('5');