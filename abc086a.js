function main(input) {
  const values = input.split(' ').map(v => parseInt(v, 10))
  const answer = values[0] * values[1] % 2 === 0 ? 'Even' : 'Odd'
  console.log(answer)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
