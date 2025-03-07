// Copyright (c) 2025 Innostes Solutions.
// All rights reserved.

// Licensed under the MIT License. You may obtain a copy of the License at
// https://opensource.org/licenses/MIT

// This file is a part of the "array-helper" library, built by Innostes Solutions.
// For more information, visit: https://github.com/innostes/array-helper

// ================================
// ** Description: Utility functions for object manipulation **
// ================================

/**
 * Deep clones an object.
 * This method serializes the object to JSON and parses it back to create a new instance.
 * **Note**: It does not handle circular references or special object types like `Date`.
 * @param obj The object to deep clone.
 * @returns A new object that is a deep clone of the input.
 */
export function deepClone<T>(obj: T): T {
  try {
    return JSON.parse(JSON.stringify(obj));
  } catch (error) {
    throw new Error(
      "Failed to deep clone object. Please ensure it is serializable."
    );
  }
}

/**
 * Merges two objects. Properties from the source object will override properties in the target object.
 * @param target The target object.
 * @param source The source object whose properties will override those in the target.
 * @returns A new object that merges the target and source.
 */
export function mergeObjects<T>(target: T, source: Partial<T>): T {
  return { ...target, ...source };
}

/**
 * Picks specific properties from an object based on a list of keys.
 * @param obj The object from which to pick the properties.
 * @param keys The keys to pick from the object.
 * @returns A new object containing only the specified properties.
 */
export function pickElements<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  const result: Partial<T> = {};
  keys.forEach((key) => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });
  return result as Pick<T, K>;
}

/**
 * Removes specific properties from an object based on a list of keys.
 * @param obj The object from which to remove properties.
 * @param keys The keys to remove from the object.
 * @returns A new object without the specified properties.
 */
export function removeProperties<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  const result = { ...obj };
  keys.forEach((key) => {
    delete result[key];
  });
  return result as Omit<T, K>;
}
