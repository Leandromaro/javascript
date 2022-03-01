# Javascript 

Bunch of js code used to learn promises and Node.js

## Truthy and Falsy Values

Values in JS have an inherent Boolean value associated with. So it’s super important to know what those values would be evaluated to (true or false), especially when it comes to comparisons and conditionals 🤓

The following values are considered falsy:


 - false
 - 0
 - -0
 - ""
 - null
 - undefined
 - NaN

_All other values are considered truthy!_

This means that the following code is unnecessary:

 - === undefined
 - === null
 - === true
 - === false
 - === 0

If you find yourself writing any of the code listed above, find a better way to write it. For example, instead of this:

```
if (pets.length > 0) {
  return 'You have at least one pet!';
}
```

Write this:

```
if (pets.length) {
  return 'You have at least one pet!';
}
```
And instead of this:

```
if (character === undefined) {
  return 'No character found.';
}
```

Write this:

```
if (!character) {
  return 'No character found.';
}
```

## Values that are actually Truthy
Here are some sample values that you might have thought was true (at least I did), but it actually evaluates to true. Remember if it's not on the false list, it's true!
```
// All these will return **true**

Boolean([]); // Empty []
Boolean({}); // Empty {}
Boolean('0'); // String containing zero
Boolean('false'); // String containing the text false
Boolean(function() {}); // Empty function
Boolean(-Infinity); // Infinity or Negative Infinity
Boolean(new Date()); // Date object
 ```
    
## Using Falsy Value in Conditional Statements
Since every value in JS evaluates to a boolean (true or false). We can shorten our conditional in the if statement.
```
// ❌
if(false === null)
if(undefined === null)
if(null === null)
if(NaN === null)
if(0 === null)
if("" === null)
if(value === null)

// ✅  Much better
if(!value)
```
    
## Using Falsy value in Ternary Operators
Similarly, you can use it to shorten your condition in the ternary operators.
```
// ❌
'' === false ? '🙂' : '🙃';

// ✅  Much better
'' ? '🙂' : '🙃';
``` 
## Using Falsy value in Logical Operators
Here's an interesting one. You can use || and && to return a value. Definitely knowing what value is falsy and truthy is super important.

|| comparisons will stop as soon as a truthy expression is evaluated
```
const or = '' || 'hi'; // "hi"
const or = [] || 'hi'; // []
```
    
&& comparison will stop as soon as a falsy expression is evaluated
```
const and = '' && 'hi'; // ""
const and = [] && 'hi'; // "hi"
```
    
## Using Falsy Values for Unit Testing
Sometimes when unit testing we can use an array of falsy values and loop over them to see if my fallback works correctly, sorta like this:
```
[false, undefined, NaN].forEach(el =>
  expect(funcImTesting(el).to.be('my fallback')),
);
```
