// activity #1

// activity #2

// global function
const showHide = () => {
  let allContainers = document.querySelectorAll(".d-cont");

  allContainers.forEach((container) => {
    let showBtn = container.querySelector(".show-btn");
    let hideBtn = container.querySelector(".hide-btn");
    let myImage = container.querySelector(".d1-show");

    showBtn.addEventListener("click", () => {
      myImage.style.visibility = "visible";
      hideBtn.style.display = "block";
      showBtn.style.display = "none";
    });

    hideBtn.addEventListener("click", () => {
      myImage.style.visibility = "hidden";
      hideBtn.style.display = "none";
      showBtn.style.display = "block";
    });
  });
};

showHide();

// global function

// Hello, World!: Write a script that prints "Hello, world!" to the console.

const helloWorld = () => {
  let btn = document.querySelector(".d1-btn");
  btn.addEventListener("click", () => {
    let d1Append = document.querySelector(".d1-append");
    d1Append.textContent = "Hello World";
  });
};
helloWorld();
//-----------------------------------

// Variable Swap: Declare two variables, a and b, and swap their values without using a temporary variable.

const swap = () => {
  let a = document.querySelector(".d2-input1").value;
  let b = document.querySelector(".d2-input2").value;
  let d2Append = document.querySelector(".d2-append");

  let arr = [];
  arr[0] = a;
  arr[1] = b;
  b = arr[0];
  a = arr[1];
  if (a !== "" && b !== "") {
    d2Append.innerHTML = `<p>Before Swap:</p>
                          <p> First =  ${b}, Second = ${a}</p> 
                          <p>After Swap:</p>
                          <p>First = ${a}, Second = ${b}</p> `;
  } else {
    d2Append.textContent = "Enter Values";
  }
};

//-----------------------------------

// Even or Odd: Write a function that takes a
//number as input and returns whether it's even or odd.
const oddEven = () => {
  let n = document.querySelector(".d3-input").value;
  let d3Append = document.querySelector(".d3-append");
  if (n === "") {
    d3Append.textContent = "Enter Number";
  } else if (n >= 0 && n % 2 === 0) {
    d3Append.textContent = "Even Number";
  } else if (n < 0 && n % 2 === 0) {
    d3Append.textContent = "Negative Even Number";
  } else if (n >= 0 && n % 2 === 1) {
    d3Append.textContent = "Odd Number";
  } else {
    d3Append.textContent = "Negative Odd Number";
  }
};
//-----------------------------------

// FizzBuzz: Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".
const fizzBuzz = () => {
  let n = document.querySelector(".d4-input").value;
  let d4Append = document.querySelector(".d4-append");
  if (n === "") {
    d4Append.textContent = "Enter a Number";
  } else if (n % 3 === 0 && n % 5 === 0) {
    d4Append.textContent = "FIZZBUZZ";
  } else if (n % 3 === 0) {
    d4Append.textContent = "FIZZ";
  } else if (n % 5 === 0) {
    d4Append.textContent = "BUZZ";
  } else {
    d4Append.textContent = `${n} is not divisible by 3 or 5`;
  }
};
//-----------------------------------

// Factorial: Write a function to compute the factorial of a given number.
function factorialResult() {
  let n = parseInt(document.querySelector(".d5-input").value);
  let d5Append = document.querySelector(".d5-append");

  if (isNaN(n) || n < 0) {
    d5Append.textContent = "Enter a valid non-negative number.";
  } else {
    let result = factorial(n);
    d5Append.textContent = `${n}! is equal to ${result}`;
  }
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

//-----------------------------------

// Reverse a String: Write a function that reverses a given string.
const reversedStr = () => {
  let str = document.querySelector(".d6-input").value;
  let d6Append = document.querySelector(".d6-append");

  let temp = str.split("");
  let arrStr = [];
  for (let i = temp.length - 1; i >= 0; i--) {
    arrStr.push(temp[i]);
  }
  let newStr = arrStr.join("");
  d6Append.textContent = newStr;
};
//-----------------------------------

// Sum of Array: Write a function that calculates the sum of all numbers in an array.

const arraySum = () => {
  let input = document.querySelector(".d7-input").value;
  let d7Append = document.querySelector(".d7-append");
  let arr = input.split(",");
  let inputArray = [];
  arr.map((n) => {
    let newArray = parseInt(n);
    inputArray.push(newArray);
  });
  let sum = 0;
  inputArray.reduce((a, b) => {
    sum = a + b;
    return (d7Append.textContent = sum);
  }, 0);
};
//-----------------------------------

// Find the Largest Number: Write a function that finds the largest number in an array of numbers.
const largestNum = () => {
  let input = document.querySelector(".d8-input").value;
  let d8Append = document.querySelector(".d8-append");
  let arr = input.split(",");
  let inputArray = [];
  arr.map((n) => {
    let newArray = parseInt(n);
    inputArray.push(newArray);
  });

  let temp = 0;
  for (let i = 0; i < inputArray.length; i++) {
    temp = Math.max(...arr);
  }
  d8Append.textContent = `The largest No. is ${temp}`;
};
//-----------------------------------

// Check for Prime Number: Write a function to check if a given number is prime or not.                             ////////////////////not yet done here
// const primeNumber = () => {
//   let num = 9;
//   if (num < 1 || ((num / 2) % 2 !== 0 && num !== 2)) {
//     console.log(`${num} is a Prime Number`);
//   } else {
//     console.log(`${num} is Not a Prime Number`);
//   }
// };
// primeNumber();
//-----------------------------------

// Palindrome Checker: Write a function that checks if a given string is a palindrome (reads the same forwards and backwards).
const isPalindrome = () => {
  let input = document.querySelector(".d10-input").value;
  let d10Append = document.querySelector(".d10-append");
  let a = input.toLowerCase().split("");
  let b = [];
  for (let i = a.length - 1; i >= 0; i--) {
    b.push(a[i]);
  }
  let c = a.join("");
  let d = b.join("");
  if (c === d) {
    d10Append.textContent = `${input.toUpperCase()} is a Palindrome`;
  } else {
    d10Append.textContent = `${input.toUpperCase()}  is NOT a Palindrome`;
  }
};

//-----------------------------------

// Count Vowels: Write a function that counts the number of vowels in a given string.
const vowelCounter = () => {
  let str = document.querySelector(".d11-input").value;
  let d11Append = document.querySelector(".d11-append");
  let arr = str.toLowerCase().split("");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] === "a" ||
      arr[i] === "e" ||
      arr[i] === "i" ||
      arr[i] === "o" ||
      arr[i] === "u"
    ) {
      newArr.push(arr[i]);
    }
  }
  d11Append.textContent = `Number of Vowels = ${newArr.length}`;
};

//-----------------------------------

// Title Case a Sentence: Write a function that converts the first letter of each word in a sentence to uppercase.
const capitalLetter = () => {
  let str = document.querySelector(".d12-input").value;
  let d12Append = document.querySelector(".d12-append");
  let arr = str.split("");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i - 1] === " ") {
      let big = arr[i].toUpperCase();
      newArr.push(big);
    } else {
      newArr.push(arr[i]);
    }
  }
  let f = newArr.join("");
  d12Append.textContent = `${f}`;
};


// Remove Duplicates from Array: Write a function that removes duplicate elements from an array.
// const removeDuplicate = () => {
//   let arr = [2, 5, 6, 7, 9, 6, 1, 3, 8, 1, 6, 8, 3];
//   let arrStr = [
//     "cat",
//     "cat",
//     "bird",
//     "cat",
//     "dog",
//     "cat",
//     "cat",
//     "dog",
//     "bird",
//   ];

//   let newArr = arr.filter((n) => {
//     return n;
//   });
//   console.log(newArr);
// };
// removeDuplicate();
// Caesar Cipher: Implement a Caesar cipher, both encoding and decoding.
// let arrayWithDuplicates = [6, 2, 2, 6, 4, 4, 5];
// let uniqueArray = arrayWithDuplicates.filter(
//   (item, index) => arrayWithDuplicates.indexOf(item) === index
// );
// console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

// Count Characters: Write a function that counts the occurrences of each character in a string.
