---
date: 2023-01-13
title: 'Javascript Fundamentals: Basics & Lexical Scope (Part 2)'
description: 'Overview of basic Javascript syntax and understanding lexical scope'
banner: '/blogs/post-4.jpg'
icon: 'logos:javascript'
time: 19
slug: javascript-fundamentals-basics-and-lexical-scope
categories: 
  - Front End
tags:
  - javascript
  - fundamental
  - scope
---

## Introduction
> This is part 2 of the Javascript Fundamentals series. If you haven't, try reading [part 1](https://khuibeom.com/blog/javascript-fundamentals-what-is-javascript) of the series! I explained various aspects of Javascript language there. 

In [You don't know JS](https://github.com/getify/You-Dont-Know-JS), the author categorize Javascript into 3 different pillars:

1. Scope & Closure
2. Prototypes
3. Types & Coercion

I will try to cover the first pillar, scope & closure, in 3 separate blog articles. Below is the list of  topics that will be covered:

::NumberedList
---
contents: [{
    title: 'Value & Variable & Function',
    description: 'Quick overview of Javascript syntax'
}, {
    title: '2 Roles of Variable',
    description: 'How Javascript engine perceive and identify variables'
}, {
    title: 'Illustrating Lexical Scope',
    description: 'Illustrating lexical scope using metaphors'
}, {
    title: 'Scope Chain',
    description: 'Understanding how variable lookup and shadowing work'
}, {
    title: 'Global Scope',
    description: 'Examining global scope in different environments'
}, {
    title: 'Hoisting',
    description: 'How hoisting works and dangers of uninitialized variables (TDZ)'
}, {
    title: 'Closure',
    description: 'Understanding closure and examining some of use cases for closure'
}, {
    title: 'Module',
    description: 'Inspecting different ways of implementing module in Javascript'
}]
---
::

Specifically for this post, the first 3 sections will be covered (until Illustrating Lexical Scope). The first two sections will be a preparation step before we actually get to know more about the scope. The third section will be about lexical scope and understanding it through different metaphors. 

Also note that each sections will build up from previous sections, so it will be useful to read from the begining. 

Before I get to the article, I would like to mention that it will be worth taking time to understand the concept. Most of the time when I thought I understood the concept, I end up discovering that I was not able to explain it to a friend. Studying requires work. Personally, I find writing a blog article (such as this one) helpful. Other than writing, explaining the concept verbally helps too!

Alright, enough with introduction. Let's get to main parts of the article.

## Value & Variable & Function
In programming, value is the most fundamental unit of information. Value is used to maintain a state inside a program. In Javascript, we have two types of value:
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

Trying to access gender results in an error because gender is block-scoped to `if` whereas myName is not. What about myName being function-scoped? I'll get to this later in the series.

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

As seen in above example, value stored in `const` variable can be mutated when using objects (array is special kind of object). `const` only prevents reassignment. 

---

There is practice on using `const` for almost all variable declaration (aka. `constant purism`), by utilizing linting tools to disallow `var` and use `const` if possible. Usage of `const` have pros and cons:

1. **Pros**: Letting Javascript engine make certain assumptions about the code and thus make the code run faster
2. **Pros**: Avoiding accidental re-assignment to prevent possible bug in future
3. **Cons**: Avoiding confusion between re-assignment vs mutation by only using `const` for immutable values

Personally, I think code readability is more important than preventing possible bug (bug resulting from accidental reassignment is rare) or minor improvement on code performance. This is personal preference I formed after reading the book, so it's up to the reader whether to use `const` for objects or not.

> [Here](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/apA.md#const-antly-confused) is author's debate on whether to use `const` for objects

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

Another way of thinking about above code is, identifier `awesomeFunction` associated with a function value. You can kind of see this as `var awesomeFunction = function() {...}` (not accurate but conceptually useful). So again, identifier `awesomeFunction` pointing to function value.

```javascript
var awesomeFunction = function(coolThings) {
  return amazingStuff;
}
```
This is function expression. We have identifier `awesomeFunction` that points to function value.

What is difference between function expression and function declaration? One big difference is the time at which the association between identifier and function value happens. For function declaration, association happens right at the start of scope execution. For function expression, association happens during `=` operator. This leads to some behavioral differences, such as hoisting, but again, I will explain this in later part of series.

If you have noticed, I used the word "function value". In Javascript, all functions are values that can be assigned to variable or passed around. 

Since functions are values, we can assign function as properties on objects:

```javascript
var greeting = {
    morning() {
        console.log("Good Morning!");
    },
    evening() {
        console.log("Good Evening!");
    }
}

greeting.morning();
// Good Morning!
```

This function behavior is essential for Javascript (or any other languages) to support a functional programming pattern.

## 2 Roles of Variable
Now, let's shift our focus to Javascript engine, specifically how it identify and perceive variables as the program is compiled. 

---

All occurences of variables in a program serve one of two "roles": either they're the target of an assignment or they're the source of a value. So when a value is assigned to variable, that variable is a *target*. If not, it is a *source*. For instance,

```javascript
var studentName = myName;
```

Here, studentName is *target* reference because value is assigned to it. All the other variable reference, myName in this case, is *source* reference.

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

Now we are starting to think a little more like how Javascript engine look at the code. Let's move on to next section to build up our mental model.

## Illustrating Lexical Scope
Scope is fundamental mechanism in which Javascript engine manage and organize variables. Specifically, engine uses scope to determine the accessibility of variables and functions. The process of determining the scopes of the variables/functions is called *lexical scoping*.

Another useful way to think about lexical scope is with the word 'lexical'. In classic compiler theory there are 3 stages to compiling a language: `lexing`/`tokenization`, `parsing`, and `code generation`. Notice the word `lexing` stage? It is a stage where the parser converts source code into separate tokens. "Lexical" scope comes from this `lexing` stage of Javascript code execution process. In other words, scope is identified during lexing stage of compilation, not during code execution.

> While I did mention about this in [part 1](https://khuibeom.com/blog/javascript-fundamentals-what-is-javascript#interpretation-and-compilation) of series, I didn't really go in depth about Javascript having two phases: parsing/compilation and execution. If you are curious about whether Javascript have compilation step, read this [part](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch1.md#required-two-phases) of the book. Basically in observable sense, not theory or opinion, Javascript do have sort of compilation phase before code execution.

It is important to note that scope is only *identified* during compilation. The Javascript engine has yet to allocate memory space for a scope, or any other variables. What engine does during compilation is creating a map of lexical scopes. Only after initial parsing, Javascript engine uses this map to define scopes and register the identifier for each scope during code execution.

Ok, so scope is identified during compile time but how exactly is scope determined in a program? Briefly, lexical scope is determined by the placement of functions, blocks, and variable declarations. To illustrate this better, let's look at some metaphors.

> Both of the metaphors that I will use come from the book. I'm just reiterating/summarizing it in my own word.

### Metaphor 1: Marble and Buckets
Imagine pile of marbles with different colors: red, blue, green. You sort the marbles by dropping them into corresponding buckets; red marble into red bucket, blue marble into blue bucket and green marble into green bucket. Later when you need to look for blue marble, you know that it is inside a blue bucket.

Here, marbles are variables and buckets are scopes. Color of marbles are determined by the color of scope/bucket it was first created at. 

Ok, here is the figure from the book to better illustrate this:

::cloudinaryImage
---
src: /blogs/marble-and-bucket.png
alt: Code illustrating lexical scope
figure: Code illustrating lexical scope
width: 400
height: 450
---
::

1. **Bucket 1:** It is global scope with 3 identifiers: `students`, `getStudentName`, `nextStudent`
2. **Bucket 2:** It is function scope with 1 identifier: parameter `studentID`,
3. **Bucket 3:** It is scope of the `for` loop with 1 identifier: `student`

Identifier belongs to the scope where they are declared (using `var`, `let`, `const`). As compiler parses through the code and find variable declarations (not references), it will associate that variable to the current scope.

Also, notice the `students` reference at line 9? It belongs to red scope despite being rerferenced from blue scope. Variables are colored/scoped based on where they are originally created at (line 1), not where they are referred from (line 9). 

In perspective of Javascript engine, how did it decide that `students` (line 9) belong to red bucket/scope? We should *conceptualize* this determination of scope as a "lookup" process. Since `students` at line 9 was not declaration but a reference, it originally do not have any color/scope. We ask the current scope (blue) if it contains matching name and if it doesn't, we move on to outer scope (red). The outer scope have variable/marble of name `students`, so the variable reference in line 9 is determined to be red marble/scope.

> I used word *conceptualize* because it is not how Javascript work exactly. The scope of identifiers are already (mostly) determined during compilation. The engine does not have to lookup through bunch of scopes to determine variable's scope because it is already known. The "lookup" process is still useful conceptually, however, and I think it's safe to think of scope chain this way.

---

Alright, let me list some of key characterstics of scope:
- Scope is determined during compilation
- Each scope is entirely contained within parent scope. It is never partially in 2 different outer scopes
- Each variable's scope/color is determined by where it was originally declared at, not where it is accessed from. To determine variable refernce's scope, it will move up the scope until it finds the declaration.
- Refering to variable in current or outer scope is allowed. However, referring to variable from lower scope is not allowed

---

I hope you are starting to visualize lexical scopes with this first metaphor. I might have rushed a little, but the second metaphor will build on the first metaphor and add more contexts. Specifically, it will help us with understanding Javascript compiler/engine's perspective.

### Metaphor 2: Conversation
What we are doing with this metaphor is imagining the conversation that happens inside the Javascript engine. Within Javascript engine, there are 3 entities involved with conversation, which are:

1. **Engine**: handles start-to-finish compilation and execution of JavaScript program
2. **Compiler**: handles parsing and code-generation
3. **Scope Manager**: collects and maintains a lookup list of all the declared variables/identifiers, and enforces a set of rules as to how these are accessible to currently executing code

To simulate this conversation, we will examine the below code (the same code example as before) and imagine what kind of interaction happens between Javascript engine, compiler and scope manager.

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
// Suzy
```

Before we get to the conversation, one thing to note is that the code execution process happens in 2 phases: one that compiler handle during compilation and one that engine handle during code execution. So in the first phase, there will be an interaction between compiler and scope manager and the second phase will be an interaction between engine and scope manager.

Alright, let's listen to the first phase of conversation (happens during compile/parsing phase):

> **Compiler**: Hey, Scope Manager (of the global scope), I found a formal declaration for an identifier called `students`, ever heard of it?
> 
> **(Global) Scope Manager**: Nope, never heard of it, so I just created it for you.
> 
> **Compiler**: Hey, Scope Manager, I found a formal declaration for an identifier called `getStudentName`, ever heard of it?
> 
> **(Global) Scope Manager**: Nope, but I just created it for you.
> 
> **Compiler**: Hey, Scope Manager, `getStudentName` points to a function, so we need a new scope bucket.
> 
> **(Function) Scope Manager**: Got it, here's the scope bucket.
> 
> **Compiler**: Hey, Scope Manager (of the function), I found a formal parameter declaration for `studentID`, ever heard of it?
> 
> **(Function) Scope Manager**: Nope, but now it's created in this scope.
>
> **Compiler**: Hey, Scope Manager (of the function), I found a for-loop that will need its own scope bucket.
>
> ...

In this question-and-answer exchange, compiler ask scope manager if encountered variable declaration has already been registered. If no, scope manager *creates* the variable in that scope. If yes, it is skipped over. Also note that compiler signals when a new scope need to be created, such as when encountering function or block scopes.

---
This is second phase of conversation (happens during code execution phase):

> **Engine**: Hey, Scope Manager (of the global scope), before we begin, can you look up the identifier getStudentName so I can assign this function to it?
> 
> **(Global) Scope Manager**: Yep, here's the variable.
> 
> **Engine**: Hey, Scope Manager, I found a target reference for students, ever heard of it?
> 
> **(Global) Scope Manager**: Yes, it was formally declared for this scope, so here it is.
> 
> **Engine**: Thanks, I'm initializing students to undefined, so it's ready to use.
> 
> Hey, Scope Manager (of the global scope), I found a target reference for nextStudent, ever heard of it?
> 
> **(Global) Scope Manager**: Yes, it was formally declared for this scope, so here it is.
> 
> **Engine**: Thanks, I'm initializing nextStudent to undefined, so it's ready to use.
> 
> Hey, Scope Manager (of the global scope), I found a source reference for getStudentName, ever heard of it?
> 
> **(Global) Scope Manager**: Yes, it was formally declared for this scope. Here it is.
> 
> **Engine**: Great, the value in getStudentName is a function, so I'm going to execute it.
> 
> **Engine**: Hey, Scope Manager, now we need to instantiate the function's scope.
> 
> ...

In above question-and-answer exchange, engine is mostly involved with assignment/initialization of variables. First engine ask scope manager to look up hoisted `getStudentName` identifier so the engine can assign function to it. Next, engine ask scope manager if `students` exist in the scope. If yes, engine initialize the variable to `undefined`.

So in first compile phase, different identifiers are *setup* in the scope and in second execution phase, engine initialize it with value after checking with scope manager.

> What I meant by identifier being *setup* in the scope is, producing machine code that will later create that identifier during code execution. The identifier is yet to be created during compile/parsing phase. I know it's a little confusing when the scope manager says it *created* variable, but just think of it as preparation for creating variable later in code execution.

#### Nested Scope
So far, we only looked at the variables that are declared and referenced in the same scope. Let's also look at how Javascript handles nested scopes.

::cloudinaryImage
---
src: /blogs/marble-and-bucket.png
alt: Code illustrating lexical scope
figure: Code illustrating lexical scope
width: 400
height: 450
---
::

Back in previous example, we have loop scope (green) nested inside function scope (blue) which in turn is nested inside global scope (red). 

As the engine progress through the program, it will enter into each scope (during code execution phase). At the start of each scope execution, each scope creates identifiers that are previously registered by compiler, in memory. After identifiers are created, it is initialized with value. This registration process of identifiers at the start of scope is called hoisting. 

What value gets assigned to identifier depends on how that identifier is declared. If the identifier came from a function declaration, that variable is initialized to its function reference (pointing to function value). If the identifier came from `var` declaration, that variable is initialized to `undefined`. If the identifier came from `let`/`const` declaration, that variable remains uninitialized (TDZ). More on this in hoisting section.

---

Alright, we got glimpse of what hoisting is about (happens at the start of each scope execution). Let's examine what happens after hoisting, specifically examining this snippet: `for (let student of students) {` 

> **Engine**: Hey, Scope Manager (for the function), I have a source reference for students, ever heard of it?
> 
> **(Function) Scope Manager**: Nope, never heard of it. Try the next outer scope.
> 
> **Engine**: Hey, Scope Manager (for the global scope), I have a source reference for students, ever heard of it?
> 
> **(Global) Scope Manager**: Yep, it was formally declared, here it is.

So, if the identifier reference is not found in the current scope, engine look for the identifier in the outer scope. This lookup process repeats until identifier is found or there are no more scope to ask.

#### Lookup Failure

If the engine fails to find a identifier (after consulting all available scopes), error is thrown. How this error is handled depends on the role of the variable and the mode of program (strict or not).

Remember 2 roles (target/source) of variable from previous section? It's time to use that knowledge in use.

If missing variable is source, then `ReferenceError` is thrown. If missing variable is target, `ReferenceError` is also thrown if the code is ran in strict mode.

This reference error will look like this: `Reference Error: XYZ is not defined`. Here `not defined` means undeclared or missing. The variable is no where to be found in lexically available scope. 

The error message is a little misleading when comparing that to `undefined` primitive value. As mentioned before, identifiers are first initialized to `undefined` at the start of scope execution (to be precise, for `var` declared variable). So `undefined` really means that identifier is declared but have not been assigned with value yet.

---

If the missing variable is target and it is in non strict mode, global scope manager will create global variable to fulfill the target assignment. For instance:

```javascript
function getStudentName() {
    // assignment to an undeclared variable :(
    nextStudent = "Suzy";
}

getStudentName();

console.log(nextStudent);
// "Suzy" -- oops, an accidental-global variable!
```
`nextStudent` was never declared but the code still runs because global scope manager created a global variable `nextStudent` at target assignment. This will probably lead to bug in future and we should never rely on this accidental global variables. Always use `strict mode` to prevent such error.

> I came across a [stackoverflow post](https://stackoverflow.com/questions/1470488/what-is-the-purpose-of-the-var-keyword-and-when-should-i-use-it-or-omit-it?rq=1) made in 2009 that discussed the difference between var declared variable and the accidental global variables. 2009 was before strict mode came out and I thought it was interesting to include it here.

## Conclusion
Alright, that was it for lexical scope!

I originally intended to cover all 8 different sections in this article. Well, obviously it didn't worked out as you can see; the article was getting too long. I decided to split it up into 3 different posts. The first post for laying ground for scope. The upcoming articles for more in depth view of scope, specifically covering scope chain, global scope and hoisting in second post. 

Other than that, I also want to mention that this article is based on my own understanding of the You don't know JS. Read the [book](https://github.com/getify/You-Dont-Know-JS) if you want to look at more detailed, accurate information without my own interpretation.
<!-- I skipped over quite number of sections from [You don't know JS]().  -->

<!-- While I mentioned in part 1 that I will be covering Javascript fundamentals in series of posts, I need to stop this series for awhile. Well, the next part of book, which is about objects are classes, is still in working draft. I could read through the first edition of the book instead of second edition but, first edition is published in 2014 which is before ES6 and I think that is a little too old. -->

## References
- [You don't know js](https://github.com/getify/You-Dont-Know-JS)
- [Lexical Scope in JavaScript – Beginner's Guide](https://www.freecodecamp.org/news/lexical-scope-in-javascript/)
- [The Difference Between Function, Block, And Lexical Scope](https://topinterns.io/blog/article/45)
