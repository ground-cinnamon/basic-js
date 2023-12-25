const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	let numsArray = []
	let numbers = n.toString().split('')

	for (let i = 0; i < numbers.length; i++) {
		let newNumber = numbers
			.slice(0, i)
			.concat(numbers.slice(i + 1))
			.join('')
		numsArray.push(Number(newNumber))
	}

	return Math.max(...numsArray)
}

module.exports = {
	deleteDigit,
}
