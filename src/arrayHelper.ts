// Copyright (c) 2025 Innostes Solutions.
// All rights reserved.

// Licensed under the MIT License. You may obtain a copy of the License at
// https://opensource.org/licenses/MIT

// This file is a part of the "array-helper" library, built by Innostes Solutions.
// For more information, visit: https://github.com/innostes/array-helper

// ================================
// ** Description: Utility functions for array manipulation **
// ================================

/**
 * Removes duplicates from an array.
 * This function uses a `Set` to filter out duplicate values.
 *
 * @param array - The array from which duplicates should be removed.
 * @returns A new array with duplicates removed.
 */
export function removeDuplicates<T>(array: T[]): T[] {
  return [...new Set(array)];
}

/**
 * Removes duplicates from an array based on specific keys.
 * The function creates a unique string for each item based on the specified key values.
 *
 * @param array - The array from which duplicates should be removed.
 * @param keys - An array of keys to compare the objects on.
 * @returns A new array with duplicates removed based on the provided keys.
 */
export function removeDuplicatesByKeys<T>(array: T[], keys: (keyof T)[]): T[] {
  const seen = new Set<string>();
  return array.filter((item) => {
    const keyValues = keys.map((key) => item[key]).join("|"); // Create a unique string based on key values
    if (seen.has(keyValues)) {
      return false;
    } else {
      seen.add(keyValues);
      return true;
    }
  });
}

/**
 * Sorts an array of objects by a specific key.
 * The function allows sorting in both ascending and descending order.
 *
 * @param array - The array to be sorted.
 * @param key - The key by which the array should be sorted.
 * @param ascending - Boolean flag to specify if the sorting should be ascending (default: true).
 * @returns A new array sorted by the specified key.
 */
export function sortArrayByKey<T>(
  array: T[],
  key: keyof T,
  ascending: boolean = true
): T[] {
  return array.sort((a, b) => {
    if (a[key] < b[key]) return ascending ? -1 : 1;
    if (a[key] > b[key]) return ascending ? 1 : -1;
    return 0;
  });
}

/**
 * Sorts an array of objects by multiple keys.
 * The function sorts the array in the order of the provided keys.
 *
 * @param array - The array to be sorted.
 * @param keys - An array of keys to sort by.
 * @param ascending - Boolean flag to specify if the sorting should be ascending (default: true).
 * @returns A new array sorted by the provided keys.
 */
export function sortArrayByKeys<T>(
  array: T[],
  keys: (keyof T)[],
  ascending: boolean = true
): T[] {
  return array.sort((a, b) => {
    for (const key of keys) {
      // Compare based on each key in the order they are provided
      if (a[key] < b[key]) return ascending ? -1 : 1;
      if (a[key] > b[key]) return ascending ? 1 : -1;
    }
    return 0;
  });
}

/**
 * Splits an array into smaller chunks of a specified size.
 * This function creates an array of arrays, each with a maximum length of `chunkSize`.
 *
 * @param array - The array to be chunked.
 * @param chunkSize - The size of each chunk.
 * @returns A new array containing chunks of the original array.
 */
export function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}
