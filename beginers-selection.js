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
const main = (input) => {
  result = input.split('').filter(v => v === '1').length
  console.log(result)
}


main(require('fs').readFileSync('/dev/stdin', 'utf8'));
