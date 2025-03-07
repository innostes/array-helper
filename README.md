# array-helper

[![npm version](https://badge.fury.io/js/%40innostes%2Fobject-helper.svg)](https://badge.fury.io/js/%40innostes%2Fobject-helper)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

`array-helper` is a comprehensive utility library for object and array manipulations, including sorting, filtering, removing duplicates, deep cloning, merging objects, and more. It is designed to simplify common tasks and improve code readability and maintainability.

## Installation

You can install the library using npm:

```sh
npm install @innostes/object-helper
```

## Usage

Here are some examples of how to use the `array-helper` library:

### Sorting

```javascript
const { sortArray } = require('@innostes/array-helper');

const array = [5, 3, 8, 1];
const sortedArray = sortArray(array);
console.log(sortedArray); // Output: [1, 3, 5, 8]
```

### Filtering

```javascript
const { filterArray } = require('@innostes/array-helper');

const array = [5, 3, 8, 1];
const filteredArray = filterArray(array, num => num > 3);
console.log(filteredArray); // Output: [5, 8]
```

### Removing Duplicates

```javascript
const { removeDuplicates } = require('@innostes/array-helper');

const array = [5, 3, 8, 1, 3, 5];
const uniqueArray = removeDuplicates(array);
console.log(uniqueArray); // Output: [5, 3, 8, 1]
```

### Deep Cloning

```javascript
const { deepClone } = require('@innostes/array-helper');

const obj = { a: 1, b: { c: 2 } };
const clonedObj = deepClone(obj);
console.log(clonedObj); // Output: { a: 1, b: { c: 2 } }
```

### Merging Objects

```javascript
const { mergeObjects } = require('@innostes/array-helper');

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const mergedObj = mergeObjects(obj1, obj2);
console.log(mergedObj); // Output: { a: 1, b: 2 }
```

## API

### `sortArray(array)`

Sorts an array in ascending order.

- **Parameters:**
  - `array` (Array): The array to sort.
- **Returns:**
  - (Array): The sorted array.

### `filterArray(array, predicate)`

Filters an array based on a predicate function.

- **Parameters:**
  - `array` (Array): The array to filter.
  - `predicate` (Function): The function to test each element.
- **Returns:**
  - (Array): The filtered array.

### `removeDuplicates(array)`

Removes duplicate elements from an array.

- **Parameters:**
  - `array` (Array): The array to remove duplicates from.
- **Returns:**
  - (Array): The array with duplicates removed.

### `deepClone(value)`

Creates a deep clone of a value.

- **Parameters:**
  - `value` (any): The value to clone.
- **Returns:**
  - (any): The cloned value.

### `mergeObjects(...objects)`

Merges multiple objects into one.

- **Parameters:**
  - `...objects` (Object): The objects to merge.
- **Returns:**
  - (Object): The merged object.

## License

This project is licensed under the MIT License by Innostes Solutions.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contact

For any inquiries or support, please contact us at:

- Email: support@innostes.com
- Website: [https://www.innostes.com](https://www.innostes.com)

