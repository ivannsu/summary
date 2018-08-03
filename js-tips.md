# JavaScript Tips

## Array in Conditional
```
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

if(arr1 === arr2) { return true; } else {return false; }
```

Hasil yang diharapkan yaitu `true` karena array yang dibandingkan itu sama. Tetapi output yang didapatkan mala `false`.

Kesimpulan :

`array` tidak bisa seluruhnya dibandingkan dengan `array` lain. Tetapi jika dibandingkan isi `array` secara satu-persatu, maka
bisa. 

Contoh:

```
for(let i = 0; i < arr1.length; i++) {
  if(arr1[i] !== arr2[i]) {
    return false;
   }
   
   return true;
}
```

## Array hack
`new Array(param)` Apabila param diisi dengan nilai 3, maka akan dihasilkan output sebagai berikut
`[undefined, undefined, undefined]`.

Apabila kita menggunakan fitur `array.join(param)`, dan param diisi dengan nilai 'a' maka output yang dihasilkan adalah
`aa`.

kode keseluruhan
```
console.log(new Array(3).join('a'))
```

itu karena nilai undefined adalah kosong('') dan jika menggunakan fitur join maka yang terjadi adalah sebagai berikut

`undefined + 'a' + undefined + 'a' + undefined`, karena undefined adalah '' maka output yang dihasilkan adalah 'aa'

jika kita mengganti nilai undefined menjadi '' maka sebagai berikut
```
'' + 'a' + '' + 'a' + ''
```

## Array Hack : Array and Object is References variable

Example:
```
let arr = [1, 2, 3, 4, 5]
let cloneArr = arr;

console.log(arr); // Output: [1, 2, 3, 4, 5]
console.log(cloneArr); // Output: [1, 2, 3, 4, 5]
```

And if we modified the arr value the cloneArr will be affect

Example:
```
arr.push(6);

console.log(arr); // Output: [1, 2, 3, 4, 5, 6]
console.log(cloneArr); // Output: [1, 2, 3, 4, 5, 6]
```

If we want to copy the array value but dont want to references it. We can copy it with Array.prototype.slice() || Array.splice()

Example:
```
let arr = [1, 2, 3, 4, 5];
let copyArr = arr.slice(); // arr.slice() is same as arr.slice(0) and same as arr.slice(0, arr.length - 1)

arr.push(6);

console.log(arr); // Output: [1, 2, 3, 4, 5, 6]
console.log(copyArr); // // Output: [1, 2, 3, 4, 5];
```

## Arrow function EcmaScript 2015 or ES6
Short hand to write function in JavaScript

Example:
```
// Old Style
function test(param1, param2) {
  return param1 + param2;
}

// Arrow function Style
const test = (param1, param2) => {
  return param1 + param2;
}

// Arrow function Style, if have one statement
const test = (param1, param2) => param1 + param2;

/**
 * We use const, so the function cannot be replaced !
 * if have one statement we can ignored the {} and return
 */
```

## JavaScript DOM
When you using looping to create event with .addEventListener(), there is some bug, your application will be run
unexpected!

here is the example
```
let optionsElm = document.getElementsByClassName('answer');

for(let i = 0; i < optionsElm.length; i++) {
  optionsElm[i].innerHTML = quiz.getOptions()[i];
  optionsElm[i].addEventListener('click', function() {
    if(quiz.checkAnswer(optionsElm[i].innerHTML)) {
      quiz.scores++;
    }
    quiz.changeQuestion();
    populate();
  });
}
```

the correct example is using **onclick**
```
let optionsElm = document.getElementsByClassName('answer');

for(let i = 0; i < optionsElm.length; i++) {
  optionsElm[i].innerHTML = quiz.getOptions()[i];
  optionsElm[i].onclick = function() {
    if(quiz.checkAnswer(optionsElm[i].innerHTML)) {
      quiz.scores++;
    }
    quiz.changeQuestion();
    populate();
  }
}
```

## JavaScript DOM to Manipulate CSS
**When you want to manipulate CSS, you must define it first from JavaScript file not .css file !**

here is **failed** example:

**style.css**
```
#myDiv {
  display: block;
}

or

#mydiv {
  // Nothing property
}
```
**script.js**
```
function toggleDisplay() {
   let resultContainer = document.getElementById('myDiv');
  
  if(resultContainer.style.display === 'none') {
    resultContainer.style.display = 'block';
    selectContainer.style.display = 'none';
  } else {
    resultContainer.style.display = 'none';
    selectContainer.style.display = 'block';
  }
}
```

and the **correct** example: 

**index.html**
```
<div id="myDiv">
  Some text
</div>
```

**script.js**
```
// Set default style for #myDiv
document.getElementById('myDiv').style.display = 'none';

// Create function to manipulate it easily
function toggleDisplay() {
  let resultContainer = document.getElementById('myDiv');

  if(resultContainer.style.display === 'none') {
    resultContainer.style.display = 'block';
    selectContainer.style.display = 'none';
  } else {
    resultContainer.style.display = 'none';
    selectContainer.style.display = 'block';
  }
}
```
