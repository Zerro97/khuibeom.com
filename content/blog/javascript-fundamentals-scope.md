---
date: 2023-01-10
title: 'Javascript Fundamentals: Scope (Part 2)'
description: 'Understanding scope in Javascript. In-depth look at lexical scope, scope chain, global scope, hoisting, closure and more'
banner: '/blogs/post-4.jpg'
icon: 'logos:javascript'
time: 15
slug: javascript-fundamentals-scope
categories: 
  - Front End
tags:
  - javascript
  - fundamental
  - scope
---

## Introduction
This is part 2 of the Javascript Fundamentals series. If you haven't, try reading [part 1](https://khuibeom.com/blog/javascript-fundamentals-what-is-javascript) of the series! I explained various aspects of Javascript language there. 

Also bear in mind that I will be referring to a book called [You don't know JS](https://github.com/getify/You-Dont-Know-JS) in this article.

---

Before I get into the article, I would like to point out that it might take time to process the information that I present here. From my personal experience, studying Javascript scope required more of formulating my own mental model than simply memorizing the concepts.  While you might feel anxious (at least it was for me!), it will be worth taking time to understand the concept, because having right mental model at the back of the mind will help us in long run. 

### Goals
In this post, I will explain about Javascript scope. Namely, I will cover the following:
- Value & Variable & Function
- Identifying Variables
- Identifying Lexical Scope
- Scope chain
- Global scope
- Hoisting
- Closure
- Module

The first two sections will be a preparation step before we actually get to know more about the scope. Again, take your time and try to formulate your own mental model of how Javascript work. 

With that in mind, let's dive into Javascript Scope!

## Value & Variable & Function
Value is most fundamental unit of information and it is used by program to maintain state. In Javascript, we have two types of value:
1. **Primitive**
2. **Object**

Going further, we have 7 different built-in **primitive** value types:
1. `string`
2. `boolean`
3. `number`
4. `bigint`
5. `undefined`
6. `null`
7. `symbol`

The simplest way of using value in Javascript is through *literals*:

```javascript
while(true) {
  printString("Hello World!");
  console.log(3.141)
}
```

In the above example, we have a boolean *literal*: `true`, string *literal*: `"Hello Wold!"` and a number *literal*: `3.141`. **Literals** are fixed value provided in a script.

::displayButton
Brief explanation for 7 primitive types

#content
When using string literals, we either use double quote `"` or single quote `'` or backtick `` ` `` character to *delimit* (surround, separate) the string value. While difference between double quote and single quote is purely stylistic, backtick has behavioral difference as well. For instance:

```javascript
console.log(`Hi ${ name }!`);
```

Here, I **interpolated** variable expression `${ name }`. Backtick is different from single or double quote in that it allows **string interpolation** which is when a variable expression resolves to its value inside the string.

Boolean value type can either be `true` or `false`. By convention, `0` means `false` and `1` means `true` in most programming languages. You can think of `true` and `false` as a semantic sugar on top of `1` and `0` values.

In Javascript, number value type is always decimal (including floating-point values). So in perspective of Javascript engine, both `26` and `26.0000` are indistinguishable.

The maximum safe integer value that Javascript engine can store is `9007199254740991`. To support even higher value, we need to use bigint value type. To use bigint, we add suffix `n` to a number:

```javascript
myAge = 42n;
```

As for `null` and `undefined` value types, they both are used to indicate emptiness of a value. I'll come back to this later in the post.

Lastly for `symbol`, it is hidden, unguessable value that ensures uniqueness of a key used in objects.
```javascript
obj[ Symbol("private") ];
```
::

---

Now, values can either appear as literals or they can be held inside variables. Think of variable as container that holds values.

There are 3 syntax forms that are used to declare variable:
1. `var`
2. `let`
3. `const`

The obvious difference between `var` and `let` is, while `var` is function-scoped, `let` is block-scoped. For instance:

```javascript
if (true) {
    var myName = "Hui Beom";
    let gender = "Male";
}

console.log(myName);
// Hui Beom

console.log(gender);
// Error!
```

Trying to access gender results in an error because gender is block-scoped to `if` whereas myName is not. What about myName being function-scoped? I'll get to this later in the article.

`const` share similar behavior to `let` except that it has additional limitation: it must be given a value at the moment it's declared, and cannot be re-assigned a different value later.

```javascript
const myBirthday = true;
let age = 39;

if (myBirthday) {
    age = age + 1;    // OK!
    myBirthday = false;  // Error!
}
```

So reassignment results in error when using `const`. However, its value can still be mutated when using object values. 

```javascript
const actors = [
    "Morgan Freeman", "Jennifer Aniston"
];

actors[2] = "Tom Cruise";   // OK :(
actors = [];                // Error!
```

So as seen in above example, value stored in `const` variable can be mutated. `const` only prevents reassignment. 

Using `const` for objects are ill adviced. It is better to use `const` only for primitive values because by doing so, we can avoid any confusion with re-assignment (not allowed) vs. mutation (allowed).

> Many people consider using `const`, a better, safer practice than using `let` and `var`. However, do we really need to prevent reassignment of object by trading off its semantic meaning?

---
In Javascript, there are different ways of defining functions, namely:
1. Function Declaration
2. Function Expression

```javascript
function awesomeFunction(coolThings) {
  return amazingStuff;
}
```
Above example is function declaration. 

Another way of thinking about above code is, identifier `awesomeFunction` being assigned a function value. You can kind of see this as `var awesomeFunction = function() {...}` (not accurate but you get the point). So again, identifier `awesomeFunction` holding function value.

```javascript
var awesomeFunction = function(coolThings) {
  return amazingStuff;
}
```
This is function expression. We have identifier `awesomeFunction` that is assigned function value.

What is difference between function expression and function declaration? One big difference is the time at which the association between identifier and function value happens. For function declaration, association happens during compile time. For function expression, association happens during code execution. This leads to some behavioral differences, such as hoisting, but again, I will explain this later.

> While I did mention about this in [part 1](https://khuibeom.com/blog/javascript-fundamentals-what-is-javascript#interpretation-and-compilation) of series, I didn't really go in depth about Javascript having two phases: parsing/compilation and execution. If you are curious about whether Javascript have compilation step, read this [part](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch1.md#required-two-phases) of the book. Basically in observable sense, not theory or opinion, Javascript do have sort of compilation phase before code execution.

If you have noticed, I used the word "function value". In Javascript, all functions are values that can be assigned to variable or passed around. This function behavior is essential for Javascript (or any other languages) to support a functional programming pattern.

## Identifying Variables
Now, let's shift our focus to Javascript engine, specifically how it identify and perceive variables as the program is compiled. 

---

All occurences of variables in a program serve one of two "roles": either they're the target of an assignment or they're the source of a value. So when a value is assigned to variable, that variable is a *target*. If not, it is a *source*. For instance,

```javascript
var studentName = myName;
```

Here, studentName is *target* reference and myName is *source* reference.

While you might think that target is always at the left side of `=` assignment operator, that is not always the case.

To explore this target assignment a little more, let's take a look at a code snippet from [You don't know JS](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch1.md#compiler-speak):

```javascript
var students = [
    { id: 14, name: "Kyle" },
    { id: 73, name: "Suzy" },
    { id: 112, name: "Frank" },
    { id: 6, name: "Sarah" }
];

function getStudentName(studentID) {
    for (let student of students) {
        if (student.id == studentID) {
            return student.name;
        }
    }
}

var nextStudent = getStudentName(73);

console.log(nextStudent);
```

There are 5 target references in the above example. Can you figure them out? Remember, target is a variable that is assigned a value.

..

..

..

..

..

..

..

..

..

..

..

..

Alright.

The first two obvious ones are:

```javascript
// students is target
var students = [
    { id: 14, name: "Kyle" },
    { id: 73, name: "Suzy" },
    { id: 112, name: "Frank" },
    { id: 6, name: "Sarah" }
];
```
```javascript
// nextStudent is target
var nextStudent = getStudentName(73);
```

---

The third target assignment is:
```javascript
// getStudentName is target
function getStudentName(studentID) {
```
As mentioned before, the identifier `getStudentName` is target reference of function value.

---

```javascript
// student is target
for (let student of students) {
```
For each iteration of the loop, `student` is assigned a value from `students`.

---

Lastly:
```javascript
// studentId is target
function getStudentName(studentID) {
// ..
// ..
getStudentName(73)
```
Argument 73 is assigned to parameter studentId, so studentId is target reference.

---

I showed what targets are but what about sources? Well, I mentioned that all occurences of variables are either target or source. That means, all the remaining variable refernces must be the source. 

Here are the list of sources:

1. `students` in `for (let student of students)` 
2. `student` and `studentID` in `if (student.id == studentID)`
3. `student` in `return student.name;`
4. `console` in `console.log(nextStudent)`
5. `getStudentName` in `getStudentName(73)`

---

Now we are starting to think a little more like how Javascript engine look at the code. Let's move on to next section to build on this mental model.

## Identifying Lexical Scope
You might be wondering what I meant by lexical scope in the section title. 

In classic compiler theory there are 4 stages to compiling a language: `lexing`, `tokenization`, `parsing`, and `code generation`. Notice the word `lexing` stage? It is a stage where the parser converts source code into separate tokens. 

"Lexical" scope is associated with the `lexing` stage of Javascript code execution process. Specifically, "lexical" scope is determined at compile time by the placement of functions, blocks, and variable declarations. Sounds confusing? Let's look at some metaphors to properly understand lexical scope.

### Metaphor 1: Marble and Buckets

### Metaphor 2: Conversation

## Scope Chain

## Conclusion
I skipped over quite number of sections from [You don't know JS](). 

## References
- [You don't know js](https://github.com/getify/You-Dont-Know-JS)