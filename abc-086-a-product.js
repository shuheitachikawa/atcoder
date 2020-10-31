function main(input) {
  const values = input.split(" ").map(v => parseInt(v))
  const value = values[0] * values[1] % 2 === 0 ? '偶数' : '奇数'
  console.log(value)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
