function moneyFormat(amount) {
    return `$${amount}`;
}

console.log(moneyFormat(19.99));

function moneyFormat2(amount) {
    let numbers = parseFloat(amount).toFixed(2);
    return `$${numbers}`;
}

console.log(moneyFormat2(250));