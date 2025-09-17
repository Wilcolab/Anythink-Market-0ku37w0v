/**
 * Converts a string to kebab-case.
 * @param {string} str - The input string.
 * @returns {string} The kebab-case version of the string.
 */
function toKebabCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2') // handle camelCase
        .replace(/[\s_]+/g, '-')             // replace spaces and underscores with -
        .replace(/[^a-zA-Z0-9-]/g, '')       // remove non-alphanumeric except -
        .toLowerCase();
}

// Example usage:
const sample = "Hello World_exampleString";
console.log(toKebabCase(sample)); // Output: hello-world-examplestring