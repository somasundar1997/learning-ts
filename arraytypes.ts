console.log("Hello World");

// const arr_Person: {
//     Name: string;
//     Age: number;
//     accounts: string[]
// } = {
const arr_Person = {
    Name: 'Somasundar',
    Age: 24,
    accounts: ['insta', 'fb', 'twitter']
};

let arr_favcolor: string[];
// arr_favcolor = 'test' // throws error
// arr_favcolor = ['red', 5] // throws error
arr_favcolor = ['red']


let arr_favcolor1: (string | number)[];
arr_favcolor1 = ['red', 5] 
arr_favcolor1 = ['red']


let arr_favcolor2: any[];
// arr_favcolor2 = 'test' // throws error
arr_favcolor2 = ['red', 5]
arr_favcolor2 = ['red']
arr_favcolor2 = ['red', 5, false]

console.log(arr_Person.Name);
for (const accounts of arr_Person.accounts)
{
    // ts inference provides intellisense
    console.log(accounts.toUpperCase());
}