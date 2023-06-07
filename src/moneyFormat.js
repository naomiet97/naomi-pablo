function moneyFormat(amount) {
    const numbers = (amount).toFixed(2);
    const splitNumber = numbers.split(".");
    console.log(splitNumber)
    if (splitNumber[0].length >= 4) {
        const naturalNumber = splitNumber[0].split("")
        const decimalNumber = splitNumber[1];
        const reverseNumber = naturalNumber.reverse()
        console.log(reverseNumber)
        reverseNumber.splice(3, 0, ",")
        console.log(reverseNumber)
        reverseNumber.reverse()
        console.log(reverseNumber)
        const finalFormat = reverseNumber.join("")
        console.log(finalFormat)
    }
    return `$${numbers}`;
}

console.log(moneyFormat(19.99));
console.log(moneyFormat(250));
console.log(moneyFormat(9500.95))
