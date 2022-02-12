// usage: 
// if you have a scenario where you need exactly X amount of values in an array and you know the type
// of each value in advance, then you might want to consider a tuple instead of an array to get even more
// strictness into your apt to be even clearer about the type of data you're working with, the type of
// data you're expecting.

console.log("Hello World");

const tuple_tuple_Person: {
    Name: string;
    Age: number;
    accounts: string[];
    role: [number, string] // tuple type
} = {
    Name: 'Somasundar',
    Age: 24,
    accounts: ['insta', 'fb', 'twitter'],
    role: [1, 'author']
};

// tuple_tuple_Person.role[1] = 1; // throws error
// tuple_tuple_Person.role = []; // throws error
// tuple_tuple_Person.role = [1, 1]; // throws error
// tuple_tuple_Person.role = ['author', 1]; // throws error
// tuple_tuple_Person.role = ['author', 'author']; // throws error
// tuple_tuple_Person.role = ['author', 'author', 'author']; // throws error