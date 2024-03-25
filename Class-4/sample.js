//1.anonymous function
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

(function(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
})(numbers);

//1.IIFE
var numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var printOddNumbers = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
};

printOddNumbers(numberss);

//1.arrow functions
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var printOddNumbers = (arr) => {
  arr.forEach(num => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

printOddNumbers(numbers);

//2.anonymous function
var strings = ["hello", "world", "javascript"];

var convertToTitleCase = function(arr) {
  return arr.map(function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  });
};

console.log(convertToTitleCase(strings));


//2.IIFE
var strings = ["hello", "world", "javascript"];

(function(arr) {
    var result = arr.map(function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  });
  console.log(result);
})(strings);


//2.arrow functions
var strings = ["hello", "world", "javascript"];

var convertToTitleCase = (arr) => {
  return arr.map(str => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  });
};

console.log(convertToTitleCase(strings));


//3.anonymous function
var numbers = [1, 2, 3, 4, 5];

var sum = function(arr) {
  return arr.reduce(function(acc, curr) {
    return acc + curr;
  }, 0);
};

console.log(sum(numbers));


//3.IIFE
var numbers = [1, 2, 3, 4, 5];

(function(arr) {
    var result = arr.reduce(function(acc, curr) {
    return acc + curr;
  }, 0);
  console.log(result);
})(numbers);

//3.arrow functions
var numbers = [1, 2, 3, 4, 5];

var sums = (arr) => {
  return arr.reduce((acc, curr) => acc + curr, 0);
};

console.log(sums(numbers));

//4.anonymous function
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var getPrimes = function(arr) {
  return arr.filter(function(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
};

console.log(getPrimes(numbers));


//4.IIFE
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

(function(arr) {
    var primes = arr.filter(function(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
  console.log(primes);
})(numbers);


//4.arrow functions
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var getPrimess = (arr) => {
  return arr.filter(num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
};

console.log(getPrimess(numbers));

//5.anonymous function
var stringsn = ["hello", "level", "world", "racecar"];

var getPalindromes = function(arr) {
  return arr.filter(function(str) {
    return str === str.split("").reverse().join("");
  });
};

console.log(getPalindromes(stringsn));

//5.IIFE
var stringk = ["hello", "level", "world", "racecar"];

(function(arr) {
    var palindromes = arr.filter(function(str) {
    return str === str.split("").reverse().join("");
  });
  console.log(palindromes);
})(stringk);


//5.arrow functions
var string = ["hello", "level", "world", "racecar"];

var getPalindromess = (arr) => {
  return arr.filter(str => str === str.split("").reverse().join(""));
};

console.log(getPalindromess(string));


//6.anonymous function
var arr1 = [1, 3, 5, 7, 9];
var arr2 = [2, 4, 6, 8, 10];

var median = function(arr1, arr2) {
    var merged = [...arr1, ...arr2].sort((a, b) => a - b);
    var mid = Math.floor(merged.length / 2);
  return merged.length % 2 !== 0 ? merged[mid] : (merged[mid - 1] + merged[mid]) / 2;
};

console.log(median(arr1, arr2));


//6.IIFE
var arr3 = [1, 3, 5, 7, 9];
var arr4 = [2, 4, 6, 8, 10];

(function(arr3, arr4) {
    var merged = [...arr3, ...arr4].sort((a, b) => a - b);
    var mid = Math.floor(merged.length / 2);
    var result = merged.length % 2 !== 0 ? merged[mid] : (merged[mid - 1] + merged[mid]) / 2;
  console.log(result);
})(arr3, arr4);


//7.anonymous function
var array = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9];

var removeDuplicates = function(arr) {
  return arr.filter(function(item, index) {
    return arr.indexOf(item) === index;
  });
};

console.log(removeDuplicates(array));

//7.IIFE
var arrays = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9];

var removeDuplicatess = function(arr) {
  return arr.filter(function(item, index) {
    return arr.indexOf(item) === index;
  });
};

console.log(removeDuplicatess(arrays));

//8.anonymous function
var arraya = [1, 2, 3, 4, 5];
var k = 2;

var rotateArray = function(arr, k) {
    var rotations = k % arr.length;
  return arr.slice(rotations).concat(arr.slice(0, rotations));
};

console.log(rotateArray(arraya, k));

//8.IIFE
var arrayd = [1, 2, 3, 4, 5];
var f = 2;

(function(arr, k) {
    var rotations = k % arr.length;
    var rotatedArray = arr.slice(rotations).concat(arr.slice(0, rotations));
  console.log(rotatedArray);
})(arrayd, f);






