var variable = 1
let let_variable = 2
const constant = 3

console.log(variable)
console.log(let_variable)
console.log(constant)

variable = 4
let_variable = 5
// constant = 6 // TypeError: Assignment to constant variable.

console.log(variable)
console.log(let_variable)
console.log(constant)

// var, let, const
// var: function-scoped
// let: block-scoped
// const: block-scoped
//
// var: function-scoped
// function f() {
//   var variable z = 1
// }
// console.log(z) // ReferenceError: z is not defined
//
// let: block-scoped
// {
//   let variable z = 1
// }
// console.log(z) // ReferenceError: z is not defined
//
// const: block-scoped
// {
//   const variable z = 1
// }
// console.log(z) // ReferenceError: z is not defined