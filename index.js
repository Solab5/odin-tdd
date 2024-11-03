function capitalize(string) {
    if (string === '') return '';
    return string[0].toUpperCase() + string.slice(1);
}

function reverse(string) {
    return string.split('').reverse().join('');
  }
  
const calculator = {
    add(a,b) {
        return a + b;
    },
    subtract(a,b) {
        return a - b;
    },
    multiply(a,b) {
        return a * b;
    },
    divide(a,b) {
        if (b === 0) {
            throw new Error('Division by zero');
        }
        return a / b;
    }
};
function normalizeShift(shift) {
    return ((shift % 26) + 26) % 26;
}

function shiftChar(char, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const index = alphabet.indexOf(char.toLowerCase());
    if (index === -1) return char;
    
    const normalizedshift = normalizeShift(shift);
    const newIndex = (index + normalizedshift) % 26;
    const shiftedChar = alphabet[newIndex];
    
    return char === char.toLowerCase() ? shiftedChar : shiftedChar.toUpperCase();
}

function caesarCipher(str, shift) {
    return str.split('')
    .map(char => shiftChar(char, shift))
    .join('');
}

function analyzeArray(arr) {

    if (arr.length === 0) throw new Error('Array cannot be empty');

    const length = arr.length;
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    const average = sum / length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return {
      average,
      min,
      max,
      length
    };
  }


module.exports = {
    capitalize,
    reverse,
    calculator,
    caesarCipher,
    analyzeArray
};

