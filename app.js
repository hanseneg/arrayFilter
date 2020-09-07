//const arr = [1,2,3,5,7,9,12,15,25,37,42,68]
// const result = arr.filter(num => num >= 5)
// console.log(result)

// const result = arr.filter(num => num % 2 === 0)
// console.log(result)

// const arr = ["dog", "wolf", "by", "family", "eaten", "camping"]
// const result = arr.filter(name => name.length <= 5)
// console.log(result)

// const people = [
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
// ]
// const result = people.filter(person => person.member)
// console.log(result)

const people = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]
const result = people.filter(person => person.age >= 18)
console.log(result)

// const result = people.filter(function(person){
//     if(person.age >= 18){
//         return person or true
//     }
// })