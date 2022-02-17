/*
const numbers = [1,2,3,4,5]

// let val1 = numbers[0]
// let val2 = numbers[2]
let [val1, , val2] = numbers

console.log('Value1: ', val1);
console.log('Value2: ', val2);

// let tem = val1
// val1 = val2
// val2 = tem
[val1, val2] = [val2, val1]


console.log('Value1: ', val1);
console.log('Value2: ', val2);
*/

// const stu = {id: 1, name: 'student 1', age: 20}
const stu = {id: 1, name: 'student 1'}
let { id: stuD /*  rename prop id to stuID*/ , age = 0 /* default value if age undefined */ } = stu
console.log(`ID of ${stuD} is ${age} year(s) old`)