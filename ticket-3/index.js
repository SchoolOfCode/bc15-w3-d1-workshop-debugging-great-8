

function countNumberOfNinesInNumber(number) {
  const numberString = number.toString();

  let count = 0;
  for (let i = 0; i < number.length; i++) {
    const digit = number[i];
    if ("9" === digit) {
      count++;
    }
    
  }
  return count;
}


console.log(countNumberOfNinesInNumber(98789));
