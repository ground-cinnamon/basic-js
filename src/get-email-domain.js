const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
	const regex = /@([a-zA-Z0-9.-]+)$/
	const match = email.match(regex)

	if (match) {
		return match[1]
	}

	return null
}

module.exports = {
	getEmailDomain,
}
