// Part 2:
// <!- 1. -->
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for (var i = 0; i < numsArr.length; i++) {
  new_string += numsArr[i];
}
console.log(new_string);

// <!- 2. -->
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for (var i = 0; i < numsArr.length; i++) {
  new_string += numsArr[i] + ",";
}
console.log(new_string.substring(0, new_string.length - 1));

// <!- 3. -->
var new_string = "";
let numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = numsArr.length - 1; i >= 0; i--) {
  new_string += numsArr[i] + " ";
}
console.log(new_string.substring(0, new_string.length - 1));

// <!- 4. -->
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <= numsArr.length; i++) {
  if (numsArr[i] % 2 == 0) {
    numsArr[i] = "even";
  }
}
console.log(numsArr);

// <!- 5. -->
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <= numsArr.length; i++) {
  if ([i] % 2 == 0) {
    numsArr[i] = "even";
  }
}
console.log(numsArr);

// <!- 6. -->
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i < numsArr.length; i++) {
  sum += numsArr[i];
}
console.log(sum);

// <!- 7. -->
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i < numsArr.length; i++) {
  if (numsArr[i] % 2 == 0) {
    sum += numsArr[i];
  }
}
console.log(sum);

// <!- 8. -->
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 100;
for (var i = 0; i < numsArr.length; i++) {
  if (numsArr[i] % 2 == 0) {
    sum += numsArr[i];
  } else {
    sum -= numsArr[i];
  }
}
console.log(sum);

// <!- 9. -->
var numsArr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11],
];
for (var i = 0; i < numsArr.length; i++) {
  console.log(numsArr[i]);
}

// <!- 10. -->
var numsArr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11],
];
var str_all = "";
for (var i = 0; i < numsArr.length; i++) {
  var inner_array = numsArr[i];
  for (var j = 0; j < inner_array.length; j++) {
    str_all += inner_array[j];
  }
}
console.log(str_all);

// <!- 11. -->
var numsArr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11],
];
var str_all = 0;
for (var i = 0; i < numsArr.length; i++) {
  var inner_array = numsArr[i];
  for (var j = 0; j < inner_array.length; j++)
    if (inner_array[j] % 2 == 0) {
      inner_array[j] = "even";
    }
}
console.log(numsArr);

// <!- 12. -->
var numsArr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11],
];
var str_all = "";

for (var i = numsArr.length - 1; i >= 0; i--) {
  var inner_array = numsArr[i];
  for (var j = inner_array.length - 1; j >= 0; j--) {
    str_all += inner_array[j] + " ";
  }
}
console.log(str_all.substring(0, str_all.length - 1));

// <!- 13. -->
var numsArr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11],
];
var sum_odd = 0;
var sum_even = 0;
for (var i = 0; i < numsArr.length; i++) {
  var inner_array = numsArr[i];
  for (var j = 0; j < inner_array.length; j++) {
    if (inner_array[j] % 2 != 0) {
      sum_odd += inner_array[j];
    } else {
      sum_even += inner_array[j];
    }
  }
}
console.log(sum_odd);
console.log(sum_even);

// -----------------------------------------
// Part 3:
// <!- 1. -->
// Fix the code to get the largest of three.

let f, s, t;
aa = (f, s, t) => {
  console.log(f, s, t);
  if (f > s && f > t) {
    console.log(f);
  } else if (s > f && s > t) {
    console.log(s);
  } else {
    console.log(t);
  }
};
aa(1, 2, 3);

// <!- 2. -->
//Fix the code to Sum of the digits present in the number

let n = 123;
console.log(add(n));
function add(n) {
  let sum = 0;
  while (n) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

// <!- 3. -->
// Fix the code to Sum of all numbers using IIFE function

const arr = [9, 8, 5, 6, 4, 3, 2, 1];
(() => {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  return sum;
})();

// <!- 4. -->
//Fix the code to gen Title caps.

var arr = ["guvi", "geek", "zen", "fullstack"];
var ano = function (arro) {
  for (var i = 0; i < arro.length; i++) {
    console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
  }
};
ano(arr);

// <!- 5. (doubt) -->
// Fix the code to return the Prime numbers

// const newArray = [1, 3, 2, 5, 10];
// const myPrime = newArray.filter((num) => {
//   for (let i = 0; i <= num; i++) {
//     console.log("i:", i);
//     if (num % i === 0) {
//       return true;
//     }
//   }
//   return num === 1;
// });
// console.log(myPrime);

// <!- 6. -->
//Fix the code to sum the number in that array

const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let sum = (a, b) => a + b;
sum = num.reduce(sum);
console.log(sum);

// <!- 7. (doubt) -->
// Fix the code to rotate an array by k times and return rotated array using IIFE function

// var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
// var k = 3;
// k = arr.length % k;
// (() => {
//   arr = [];
//   out = arr.slice(k + 1, arr.length);
//   var count = out.length;
//   for (var i = 0; i < k + 1; i++) {
//     out[count] = arr[i];
//     count += 1;
//   }
//   console.log(out);
// })();

// <!- 8. -->
// Fix the code to gen Title caps.

var arr = ["guvi", "geek", "zen", "fullstack"];
(() => {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
  }
})();

// <!- 9. -->
// print all odd numbers in an array using IIFE function

var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function () {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      console.log(arr[i]);
    }
  }
})();

// <!- 10. -->
// Fix the code to reverse.

(function (str) {
  let str1 = str.split("").reverse().join("");
  console.log(str1);
})("abcd");

// <!- 11. -->
//Fix the code to remove duplicates.

let newArr = [];
var res = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) == -1) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
};
res(["guvi", "geek", "guvi", "duplicate", "geeK"]);

// <!- 12. (doubt) -->
// Fix the code to give the below output:

// var array = [
//   [
//     ["firstname", "vasanth"],
//     ["lastname", "Raje"],
//     ["age", 24],
//     ["role", "JSWizard"],
//   ],
//   [
//     ["firstname", "Sri"],
//     ["lastname", "Devi"],
//     ["age", 28],
//     ["role", "Coder"],
//   ],
// ];
// var final = [];
// while (array.length != 0) {
//   var outer_remove = array.shift();

//   while (outer_remove.length != 0) {
//     var inner_remove = outer_remove.shift();
//     var key = inner_remove[0];
//     var value = inner_remove[1];
//     var new_object = value;
//   }
//   final.push(new_object);
// }
// console.log(final);

// <!- 13. (doubt) -->
// Sum of odd numbers in an array

// var as = [12, 33, 5, 6, 2, 56, 6, 2, 1];
// var s = as.reduce(function (a, c) {
//   if (c % 2 != 0) {
//     return a + c;
//   }
//   return a;
// });
// console.log(s);

// <!- 14. -->
// Swap the odd and even digits
aa = (data) => {
  var a = data;
  var l = "";
  for (i = 0; i < a.length - 1; i++) {
    var s = a[i + 1];
    var b = a[i];
    l += s;
    l += b;
    i = i + 1;
  }
  if (a.length % 2 != 0) {
    l += a[a.length - 1];
  }
  console.log(l);
};
aa("1234");
