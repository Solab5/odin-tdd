const { reverse, capitalize,  calculator, caesarCipher, analyzeArray} = require('./index');

describe('capitalize', () => {
    test('should capitalize first character of a string', () => {
        expect(capitalize('hello')).toBe('Hello');
    })

    test('should handle empty string', () => {
        expect(capitalize('')).toBe('');
    })

    test('should handle single character', () => {
        expect(capitalize('a')).toBe('A');
    });
})

describe('reverse', () => {
    test('statement should be reversed', () => {
        expect(reverse('morris')).toBe('sirrom');
    });

    test('should handle numbers as well', () => {
        expect(reverse('123')).toBe('321');
    });
});

describe('calculator', () => {
    describe('add',() => {
       test('adds two positive numbers', () => {
        expect(calculator.add(2,3)).toBe(5);
       });
    })

     describe('subtract',() => {
        test('subtracts two  numbers', () => {
         expect(calculator.subtract(5,3)).toBe(2);
        });
     })

     describe('multiplies',() => {
        test('multiplies two  numbers', () => {
         expect(calculator.multiply(2,3)).toBe(6);
        });
     });

     describe('divide',() => {
        test('divides two  numbers', () => {
         expect(calculator.divide(4,2)).toBe(2);
        });

        test('throws error on division by zero ', () => {
            expect(() => calculator.divide(5,0)).toThrow('Division by zero');
           });
     });


})

describe('ceasarCipher', () => {
    test('shifts simple lowercase string', () => {
        expect(caesarCipher('abc', 1)).toBe('bcd')
    });

    test('wraps from z to a', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc')
    });

    test('preserves case', () => {
        expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    });

    test('handles punctuation and spaces', () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });

    test('handles negative shifts', () => {
        expect(caesarCipher('abc', -1)).toBe('zab');
    });

    test('handles large shift factors', () => {
        expect(caesarCipher('abc', 27)).toBe('bcd');
    });

});

describe('analyzeArray', () => {
    test('analize simple array', () => {
        const result = analyzeArray([1,8,3,4,2,6]);
        expect(result).toEqual({
            average: 4,
            min: 1,
            max: 8, 
            length: 6
        });
    });

    test('handles array with negative numbers', () => {
        const result = analyzeArray([-1, -8, 3, 4, 2, 6]);
        expect(result).toEqual({
          average: 1,
          min: -8,
          max: 6,
          length: 6
        });
      });

    test('handles empty array', () => {
        expect(() => analyzeArray([])).toThrow('Array cannot be empty');
    })

    test('handles array with one number', () => {
        const result = analyzeArray([5]);
        expect(result).toEqual({
          average: 5,
          min: 5,
          max: 5,
          length: 1
        });
      });

      test('handles decimal numbers', () => {
        const result = analyzeArray([1.5, 2.5, 3.5]);
        expect(result).toEqual({
          average: 2.5,
          min: 1.5,
          max: 3.5,
          length: 3
        });
      });
});