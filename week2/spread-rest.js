// const numbers = [1,2,3,4,5,6,7,8,9]
// const numbers2 = [10, 11, 12]

// const mergedNumbers = [...numbers, ...numbers2];

// console.log(mergedNumbers)

// const person = {leg: 2, hand: 2, eye: 2 /* many more prop */}
// // const stu = { id: 1, name: 'student', leg: person.leg, hand: person.hand }
// const stu = { id: 1, name: 'student', ...person}
// console.log('Student info: ', stu);

// function sum(val1, val2, val3 = 0, val4 = 0, val5 =0, val6 = 0, val7 = 0) {
//     return val1+val2+val3+val4
// }
function sum(...vals) {
    let total = 0
    vals.forEach((val = 0) =>{
        total += val
    })
    return total
}

const total = sum(1,2,3,2,3,4,5,6,7,8,90,09,756,4,3,3,5,5)
console.log(total);
