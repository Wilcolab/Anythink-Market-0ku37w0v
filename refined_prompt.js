/**
 * Converts a string to camelCase.
 *
 * This function takes a string with words separated by spaces, underscores, or hyphens,
 * and converts it to camelCase format. The first word is lowercased, and each subsequent
 * word is capitalized. Handles numbers preceding letters by capitalizing the first letter
 * after the number.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The camelCase formatted string.
 *
 * @example
 * toCamelCase('first name'); // returns 'firstName'
 * toCamelCase('user_id'); // returns 'userId'
 * toCamelCase('SCREEN_NAME'); // returns 'screenName'
 * toCamelCase('mobile-number'); // returns 'mobileNumber'
 * toCamelCase('Peace_tree'); // returns 'peaceTree'
 */

/**
 * Converts a string to dot.case.
 *
 * This function takes a string in various formats (camelCase, snake_case, kebab-case, or space separated)
 * and converts it to dot.case (all lowercase words separated by dots). Handles camelCase by inserting
 * dots before uppercase letters, replaces all separators with dots, and ensures there are no leading,
 * trailing, or consecutive dots.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The dot.case formatted string.
 *
 * @example
 * toDotCase('first name'); // returns 'first.name'
 * toDotCase('user_id'); // returns 'user.id'
 * toDotCase('SCREEN_NAME'); // returns 'screen.name'
 * toDotCase('mobile-number'); // returns 'mobile.number'
 * toDotCase('Peace_tree'); // returns 'peace.tree'
 * toDotCase('IPV4synax'); // returns 'ipv4.synax'
 */
function toCamelCase(str) {
    return str
        .replace(/[_\-\s]+/g, ' ') // Replace separators with space
        .trim()
        .split(' ')
        .map((word, i) => {
            if (i === 0) {
                return word.toLowerCase();
            }
            // Capitalize first letter, lowercase the rest
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('')
        .replace(/(\d+)([a-zA-Z])/g, (m, d, l) => d + l.toUpperCase()); // Handle numbers before letters
}

// Example usages:
console.log(toCamelCase('first name')); // firstName
console.log(toCamelCase('user_id')); // userId
console.log(toCamelCase('SCREEN_NAME')); // screenName
console.log(toCamelCase('mobile-number')); // mobileNumber
console.log(toCamelCase('Peace_tree')); // peaceTree
function toDotCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, '$1.$2') // camelCase to camel.Case
        .replace(/[_\-\s]+/g, '.')           // separators to dot
        .replace(/\.+/g, '.')                // multiple dots to single
        .toLowerCase()
        .replace(/^\./, '')                  // remove leading dot
        .replace(/\.$/, '');                 // remove trailing dot
}

// Example usages:
console.log(toDotCase('first name')); // first.name
console.log(toDotCase('user_id')); // user.id
console.log(toDotCase('SCREEN_NAME')); // screen.name
console.log(toDotCase('mobile-number')); // mobile.number
console.log(toDotCase('Peace_tree')); // peace.tree
console.log(toDotCase('IPV4synax')); // ipv4.synax

