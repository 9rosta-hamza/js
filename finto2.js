const person = [
    {
        name: 'mohamed',
        age: 30,
        email: 'exemple@gmail.com',
    },
    {
        name: 'mariem',
        age: 34,
        email: 'exemple@gmail.com',
    },
    {
        name: 'mohamed',
        age: 28,
        email: 'exemple@gmail.com',
    },
    {
        name: 'mohamed',
        age: 37,
        email: 'exemple@gmail.com',
    }
]
console.log(person[0].age)
const personover30 = person.filter(function (over) {
    return over.age >= 30
})
console.log(personover30)
const T = [0, 1, 5, 4, 7, 8, 2, 3, 6, 8, 9, 7, 1, 12]
let arrayeven = T.filter(function (even) {
    return even % 2 === 0
})
console.log(arrayeven)
const N = "hello world!"
let n = N.split("")
console.log(n)
let stringvowels = n.filter(function (vowels) {
    return vowels !== "e" && vowels !== "o" && vowels !== "a" && vowels !== "y" && vowels !== "i"

})
console.log(stringvowels)