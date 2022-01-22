const Person: object = {
    Name: 'Somasundar',
    Age: 24
};

const Person1: {
    Name: string;
    Age: number;
} = {
    Name: 'Somasundar',
    Age: 24
};

const Person2: {
    Name: string;
    Age: number;
} = {
    Name: 'Somasundar',
    Age: 24
};

// console.log(Person.Name); // will throw typescript error
console.log(Person1.Name);
console.log(Person2.Name);