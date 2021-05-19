# Functions

## Objective

- Students can define and invoke functions.
- Students can pass arguments to functions.
- Students can capture output from functions.

## Introduction

Imagine if `console.log` wasn't a function and you had to copy/paste a big chunk of code each time you wanted to log something to console.

We need a way to write code once and then use it easily anywhere else. That's where functions come in.

## Lesson

Run through slides and expand on each point. Then do a walkthrough on:

### Defining a function
```js
function myFuncName() {
    /* code to run when called */
}
```
Notice the similarity with `if` statements?

### Calling a function
```js
myFuncName();
```

### Defining parameters
```js
function myFuncName(arg1, arg2) {
    console.log(arg1 + ' ' + arg2);
}
```

### Supplying arguments
```js
myFuncName('arg1', 'arg2');
```

### Returning results
```js
function myFuncName(arg1, arg2) {
    return arg1 + ' ' + arg2;
}
```

### Capturing results
```js
const result = myFuncName('arg1', 'arg2');
```

## Practice

- Open [GA project](https://github.com/JoshuaCarter/GA) in **VSCode**.
- Open `lessons/4-functions/practice.js`.
- Complete the numbered sections.
- Run code (F5) and check debug console output.
- Save work (see README.md).
