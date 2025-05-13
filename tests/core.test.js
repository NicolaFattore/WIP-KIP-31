// Core Module Test Suite

// Basic test to verify Jest setup
describe('Core Module Test Suite', () => {
  test('Jest configuration is working', () => {
    expect(true).toBe(true);
  });

  test('Basic mathematical operations', () => {
    expect(2 + 2).toBe(4);
    expect(5 - 3).toBe(2);
    expect(6 * 7).toBe(42);
  });

  test('Array operations', () => {
    const testArray = [1, 2, 3];
    expect(testArray.length).toBe(3);
    expect(testArray).toContain(2);
  });
});

// Example utility function test
function safeAdd(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a + b;
}

describe('Utility Function Tests', () => {
  test('safeAdd function with valid inputs', () => {
    expect(safeAdd(5, 3)).toBe(8);
  });

  test('safeAdd function with invalid inputs', () => {
    expect(() => safeAdd('5', 3)).toThrow('Inputs must be numbers');
  });
});