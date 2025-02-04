import { describe, expect, test } from 'vitest';
import { addArray, sum } from '../../src/helpers/sum';

describe('add function', () => {
  test('adds 1 + 2 to equal 3', () => {
    // Preparacion
    const a = 1;
    const b = 2;

    // Estimulo
    const result = sum(a, b);

    // El commportamiento esperado
    expect(result).toBe(a + b);
  });
});

describe('addArray function', () => {
  test('should return 0 if the array is empty', () => {
    const numberArray = [];

    const result = addArray(numberArray);

    expect(result).toBe(0);
  });

  test('should return the proper value of the addArray function', () => {
    const numberArray = [1, 2, 3, 4, 5];

    const result = addArray(numberArray);

    expect(result).toBe(15);
  });
});
