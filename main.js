const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
console.log(integers.sort((a,b) => a - b).reverse().filter(element => element < 19).map(item => (item * 1.5) - 1).reduce((total,next) => total += next))