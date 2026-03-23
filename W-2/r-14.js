// String/Array Challenge Set (20+ Problems)

// String challenges

// Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello"));

// Palindrome check
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome("racecar"));

// Count vowels
function countVowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}
console.log(countVowels("hello"));

// Find longest word
function findLongestWord(str) {
    return str.split(' ').reduce((longest, current) => current.length > longest.length ? current : longest, '');
}
console.log(findLongestWord("hello world"));

// Remove duplicate characters
function removeDuplicates(str) {
    return [...new Set(str)].join('');
}
console.log(removeDuplicates("hello"));

// Title case
function toTitleCase(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}
console.log(toTitleCase("hello world"));

// Count character occurrences
function countCharOccurrences(str) {
    return str.split('').reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});
}
console.log(countCharOccurrences("hello"));

// Truncate string
function truncateString(str, maxLength) {
    return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
}
console.log(truncateString("hello world", 5));

// Insert dashes between characters
function insertDashes(str) {
    return str.split('').join('-');
}
console.log(insertDashes("hello"));

// Check if anagrams
function isAnagram(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}
console.log(isAnagram("listen", "silent"));

// Array challenges

// Find max/min
const array1 = [12, 1, 45, 15, 2];
const min = Math.min(...array1)
const max = Math.max(...array1)

console.log(min);
console.log(max);

// Remove duplicates
const array2 = [1, 2, 3, 3, 5];

removeDuplicate = new Set([...array2]);
console.log(removeDuplicate);

// Filter even/odd
const array3 = [1, 2, 3, 4, 5, 6];

const evenNumbers = array3.filter(even => even % 2 === 0);
const oddNumbers = array3.filter(odd => odd % 2 !== 0);

console.log(evenNumbers);
console.log(oddNumbers);

// Sum all numbers
const array4 = [1, 2, 3, 4, 5];
const sum = array4.reduce((total, current) => total + current, 0);

console.log(sum);

// Flatten array
const array5 = [1, [2, [3, [4, 5]]]];
const flattenedArray = array5.flat(Infinity);

console.log(flattenedArray);

// Find missing number
const array6 = [1, 2, 4, 5];
const missingNumber = array6.find((num, index) => num !== index + 1);

console.log(missingNumber);

// Rotate array
function rotateArray(arr, k) {
    const rotations = k % arr.length;
    if (rotations === 0) return arr;

    const splitIndex = arr.length - rotations;
    const rotatedPart = arr.slice(splitIndex);
    const remainingPart = arr.slice(0, splitIndex);

    return [...rotatedPart, ...remainingPart];
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));

// Merge sorted arrays
function mergeSortedArrays(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));

// Find pairs with sum
function findPairsWithSum(arr, targetSum) {
    const pairs = [];
    const seen = new Set();

    for (const num of arr) {
        const complement = targetSum - num;
        if (seen.has(complement)) {
            pairs.push([complement, num]);
        }
        seen.add(num);
    }

    return pairs;
}

console.log(findPairsWithSum([1, 2, 3, 4, 5], 6));

// Chunk array
function chunkArray(arr, chunkSize) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
}

console.log(chunkArray([1, 2, 3, 4, 5], 2));

// FizzBuzz
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

console.log(fizzBuzz(15));

// Fibonacci sequence
function fibonacciSequence(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

console.log(fibonacciSequence(10));

// Factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));

// Binary search
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));

// Bubble sort
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort([5, 2, 8, 1, 4]));
