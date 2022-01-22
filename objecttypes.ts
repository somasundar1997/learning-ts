const obj_Person: object = {
    Name: 'Somasundar',
    Age: 24
};

const obj_Person1: {
    Name: string;
    Age: number;
} = {
    Name: 'Somasundar',
    Age: 24
};

const obj_Person2 = {
    Name: 'Somasundar',
    Age: 24
};

// console.log(obj_Person.Name); // will throw typescript error
console.log(obj_Person1.Name);
console.log(obj_Person2.Name);