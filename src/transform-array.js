const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
	if (!(arr instanceof Array)) {
		throw new Error("'arr' parameter must be an instance of the Array!")
	}

	let res = []

	for (let i = 0; i < arr.length; i++) {
		const element = arr[i]
		const nextElement = arr[i + 1]
		const prevElement = arr[i - 1]

		if (typeof element === 'string' && element.startsWith('--')) {
			const [action, position] = element.replace('--', '').split('-')

			if (action === 'double') {
				if (position === 'next' && !!nextElement) {
					res.push(nextElement)
					res.push(nextElement)
				}
				if (position === 'prev' && !!prevElement) {
					res.push(prevElement)
					res.push(prevElement)
				}

				return
			}

			if (action === 'discard') {
				if (position === 'next' && !!nextElement) {
					res = [...res.slice(0, nextElement, ...res.slice(nextElement + 1))]
				}
				if (position === 'prev' && !!prevElement) {
					res.pop()
				}

				return
			}
		}

		res.push(element)
	}

	return res
}

module.exports = {
	transform,
}
