//practiceA
// function main(input) {
//   var input = input.split('\n')
//   var temp = input[1].split(' ')
//   var a = parseInt(input[0], 10)
//   var b = parseInt(temp[0], 10)
//   var c = parseInt(temp[1], 10)
//   var s = input[2]
//   console.log('%d %s', a+b+c, s)
// }


//abc086a
// function main(input) {
//   const values = input.split(' ').map(v => parseInt(v, 10))
//   const answer = values[0] * values[1] % 2 === 0 ? 'Even' : 'Odd'
//   console.log(answer)
// }

//abc081a 回答1
// const main = (input) => {
//   const values = input.split('')
//   var count = 0
//   for (let i=0; i < values.length ; i++) {
//     if (values[i] === '1') {
//       count ++
//     }
//   }
//   console.log(count)
// }

//abc081a 回答2
// const main = (input) => {
//   result = input.split('').filter(v => v === '1').length
//   console.log(result)
// }


//abc081b shift only
// const main = (input) => {
//   var blocks = input.split('\n')
//   var a = parseInt(blocks[0])
//   var b =  blocks[1].split(' ').map(v => parseInt(v))
//   var count = 0
//   var roop = true
//   while (roop) {
//     if (b.filter(v => v % 2 === 0).length !== a) {
//       break;
//     } else {
//       b = b.map(v => v / 2)
//       count ++
//     }
//   }
//   console.log(count)
// }


//abc087b coins
// const main = (input) => {
//   var values = input.split('\n').map(v => parseInt(v))
//   var count = 0
//   for (let i=0; i <= values[0]; i++) {
//     for (let j=0; j <= values[1]; j++) {
//       for (let k=0; k <= values[2]; k++) {
//         if (i*500 + j*100 + k*50 === values[3]) {
//           count++
//         }
//       }
//     }
//   }
//   console.log(count)
// }
//main('5\n1\n0\n150')


//abc083b some sums
// const main = (input) => {
//   input = input.split(' ').map(v => parseInt(v))
//   var count = 0
//   for (let i=0; i<=input[0]; i++) {
//     var val = i.toString().split('').map(v => parseInt(v))
//     var sum = 0
//     for(let j=0; j<val.length; j++) {
//       sum = sum + val[j]
//     }
//     count = sum >= input[1] && sum <= input[2] ? count + i : count
//   }
//   console.log(count)
// }
// main('10 1 2')


//ABC088B - Card Game for Two
const main = (input) => {
  
}
//main(require('fs').readFileSync('/dev/stdin', 'utf8'));
