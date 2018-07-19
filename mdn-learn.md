## Best Pratice
remember to always include the `(function(){"use strict";` before your code, and add `})();` to the end of your code.

example:

```
(function(){
  "use strict";
  /* Start of your code */
  function greetMe(yourName) {
    alert('Hello ' + yourName);
  }
  
  greetMe('World');
  /* End of your code */
})();
```

## Declaring variables
There are three kinds of declarations in JavaScript.

- var

Declares a variable, optionally initializing it to a value.

example:
```
var x = 10;
```

- let

Declares a block-scoped, local variable, optionally initializing it to a value.

example:
```
let x = 10;
```

- const

Declares a block-scoped, read-only named constant.

example:

```
const x = 10
```

## No assigned value
A variable declared using the var or let statement with no assigned value specified has the value of `undefined`.

example:
```
let x; // undefined
```

## Extra commas in array literals
You do not have to specify all elements in an array literal. If you put two commas in a row, the array is created with undefined for the unspecified elements. 

example:
```
let fish = ['Lion', , 'Angel']; // Output: ['Lion', undefined, 'Angel']
```
however the comma in the last list of array will be ignored

example:
```
let fish = ['Lion', , 'Angel', ]; // Output: ['Lion', undefined, 'Angel']
```

## ECMAScript 2015 : template literals
ECMAScript 2015 introduces a new type of literal, namely template literals. 
This allows for many new features including multiline strings!

example:
```
var poem = 
`Roses are red, 
Violets are blue. 
Sugar is sweet, 
and so is foo.`
```

## Falsy values
the following values evaluate to false (also known as Falsy values):

* false
* undefined
* null
* 0
* NaN
* the empty string ("")

All other values, including all objects, evaluate to true when passed to a conditional statement.

Do not confuse the primitive boolean values true and false with the true and false values of the Boolean object. 

example:
```
let b = new Boolean(false);
if (b) // this condition evaluates to true
if (b == true) // this condition evaluates to false
```
