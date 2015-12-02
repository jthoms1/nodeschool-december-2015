var sum = process.argv.slice(2).reduce(function(total, currentVal) {
  console.log
  return total + parseInt(currentVal, 10);
}, 0);

console.log(sum);
