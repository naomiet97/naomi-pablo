export function stringCalculator(string) {
  let stringArray = string.split(",");
  let sumOfNumbers = 0;

  for (let i = 0; i < stringArray.length; i++) {
    sumOfNumbers += parseInt(stringArray[i]);
  }
  
  return parseInt(sumOfNumbers);
}