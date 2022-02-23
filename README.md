# javascript
Bunch of js code used to learn promises and Node.js

## Truthy and Falsy Values
The following values are considered falsy:


 - false
 - 0
 - -0
 - ""
 - null
 - undefined
 - NaN

All other values are considered truthy!

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
