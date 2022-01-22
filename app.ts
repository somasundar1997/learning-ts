console.log("Hello World");

// const Person: {
//     Name: string;
//     Age: number;
//     accounts: string[]
// } = {
const Person = {
    Name: 'Somasundar',
    Age: 24,
    accounts: ['insta', 'fb', 'twitter']
};

let favcolor: string[];
// favcolor = 'test' // throws error
// favcolor = ['red', 5] // throws error
favcolor = ['red']


let favcolor1: (string | number)[];
favcolor1 = ['red', 5] 
favcolor1 = ['red']


let favcolor2: any[];
// favcolor2 = 'test' // throws error
favcolor2 = ['red', 5]
favcolor2 = ['red']
favcolor2 = ['red', 5, false]

console.log(arr_Person.Name);
for (const accounts of arr_Person.accounts)
{
    // ts inference provides intellisense
    console.log(accounts.toUpperCase());
}