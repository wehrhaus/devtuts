/**
 * Array of numbers
 *
 * @type {number[]}
 */
const items = [1, 2];

/**
 * Array of numbers
 *
 * @type {number[]}
 */
const numbers = [4, 5, 6, 7];

/**
 * Array of object(s)
 *
 * @type {*[]}
 */
const payload = [{
    'foo': 'bar'
}];

/**
 * Concatenated grouping of arrays
 *
 * @type {Array.<number>}
 */
const newItems = items.concat(numbers, payload);

//console.log(newItems);

/**
 * Array of object(s)
 *
 * @type {*[]}
 */
const people = [
    {
        name: 'Tim'
    },
    {
        name: 'Tina'
    }
];

/**
 * Array of object(s)
 *
 * @type {*[]}
 */
const peopleToo = [
    {
        name: 'Simon'
    },
    {
        name: 'Ben'
    }
];

/**
 * Concatenation people arrays
 */
function getPeople() {
    return people
        .concat(peopleToo)
        .forEach((person) => console.log('Name: ', person.name));
}

getPeople();
