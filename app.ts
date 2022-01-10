function add(n1: number, n2: number, showResult: boolean) {
    console.log(typeof (n1));
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw 'incorrect input'
    // }
    const result = n1 + n2;
    if (showResult) {
        console.log('Result is: ' + result);
        console.log("Result is: " + result);
        console.log(`Result is: ${result}`);
    }
    else {
        return n1 + n2;
    }
}

const number1 = 5; // 5.0
const number2 = 2.5;
const printResult = true;

alert(add(number1, number2, printResult));