---
date: 2022-12-29
title: 'Javascript Fundamentals: What is Javascript? (Part 1)'
description: 'A deeper inspection on what Javascript is and different aspects of Javascript'
banner: '/blogs/post-3.jpg'
icon: 'logos:javascript'
time: 15
slug: javascript-fundamentals-what-is-javascript
categories:
  - Front End
tags:
  - javascript
  - fundamental
  - history
  - web assembly
---

## Preface
Something that I realized while I worked on many of frontend tasks is that, I often use online resources as a confirmation of what I'm doing, even trival ones, such as using substring method in Javascript. I'm not saying searching for answers online is bad. Opposite of it, in fact, since it lets you discover new and better ways of dealing with problem.

What was concerning for me, however, is how quickly I forget about this findings. I often end up searching for same thing over in internet, even ones that I thought interesting.

What can I do to really ingrain a knowledge? I thought about it, and I think the problem was that I was not putting enough effort in using the answers that I found online. Instead of simply using them, I should have taken some time to understand them. This applied to my basic understanding of Javascript as well. While I have experience using Javascript through different frameworks, I didn't really spend time to dig into Javascript language itself. It's never late to learn something, so I decided go back and study how Javascript work under the hood.

## Series Introduction
I'm planning to go over Javascript fundamentals in series of posts. I will be covering many detailed bits of Javascript and it will be geared towards developers with some basic understanding of Javascript. Also kindly note that I will be referring to many online resources to reinforce my blog article.

In this part 1 of series, I will explain different aspects of Javascript and define what Javascript is. There won't be much Javascript coding since it will be about Javascript language itself.

Note that most source of this article comes from a book called [You don't know js](https://github.com/getify/You-Dont-Know-JS). I'll be adding some additional information on top of it and summarize the book in my own words. If you have not read the book and want to gain deeper understanding of Javascript, it will be worth a time to read through the book.

So, without further ado, let's dive into javascript fundamentals.

## Javascript Name
Compared to other programming languages, there are quite number of names associated with Javascript: JS, ECMAScript, ES6 as well as Mocha, Livescript or Jscript if considering history of Javascript. So how did all these different names came about?

Back in 90s, most of web contents were static. The owner of Netscape, which was one of the most widely used web browser at the time, envisioned to make web more dynamic. So Netscape assigned its employee, Brendan Eich to work on creating a scripting language, which later becomes Javascript as we know today.

::cloudinaryImage
---
src: /blogs/netscape.png
alt: Netscape Web Browser
figure: Netscape Web Browser (v1)
---
::

Unfortunately, due to internal pressure at Netscape, Brendan Eich had to rush the development of Javascript. As a matter of fact, he developed Javascript in mere 10 days!

Initially, Eich code-named Javascript as Mocha and internally at Netscape, it was referred to as Livescript. When it came to publically announcing the language, however, "Javascript" was used.

Why "Javascript"? Javascript was supposed to be lightweight language that people with little programming background would be able to use. Hence the word "script" was used. Also, Netscape wanted to appeal to the audience of Java developer and marketed it as an alternative to writing Java.

While keeping syntax close to Java was not the original intention behind Javascript, marketing force changed that. So on the surface, both Java and Javascript's syntax looks similar because both targeted the developers who are familiar with C syntax.

After its initial launch, usage of Javascript in Netscape made considerable difference in user experience. This caused competiting companies to come up with ways to implement Javascript in their own web browser. Because web standards were not strong at the time, Microsoft came up with its own version of Javascript called "JScript" and used it in Internet Explorer.

Another interesting aspect of Javascript name is that, the official trademark for Javascript is owned by Oracle. This happened because Netscape had a partnership with Sun Microsystems and Sun had obtained the trademark for Javascript through its partnership. So when Oracle acquired Sun Microsystems in 2010, the ownership transferred to Oracle.

> The book [You don't know js](https://github.com/getify/You-Dont-Know-JS) suggests that we use the word JS instead of Javascript to distance from trademark owned by Oracle.

Also note that the official name for Javascript is **ECMAScript** as formalized by TC39. Since 2016, this official name is also suffixed by the revision year (ex. ECMAScript 2022) and abbreviated as ES (ex. ES2022).

## Javascript Specification
Javascript is maintained by [TC39](https://tc39.es/), an international group of committees comprised of around 50 to 100 people from web-invested companies (Mozilla, Google, Samsung etc). TC39 is also responsible for deciding what changes are going to be applied to Javascript.

When a new feature is going to be added, a proposal is made. Interestingly, all of the new proposals are managed in open source [github repository](https://github.com/tc39/ecma262/) so anyone can participate in making a proposal. However, only TC39 committees are responsible for deciding which proposals will take effect, through series of meetings and votes.

A newly made proposals goes through [TC39 process](https://tc39.es/process-document/) which is comprised of Stage 0 to Stage 4. Stage 0 means that one of the committee member thinks that the proposal is worthy of consideration. Stage 4 means that the proposal is eligible to be included in the formal ECMAScript standard.

---

One thing about Javascript specification is that, there are no multiple versions of Javascript. There is only a single, central specification as maintained by TC39.

The time at which different web browsers implement the new feature, however, can differ. Chrome might implement a new feature in their Javascript engine earlier than Firefox and vice versa. Nonetheless, it should never be the case that web browser engines implement the feature differently from Javascript specification.

This implies that developers can be rest assured that the same Javascript can be applied in multiple environments.

## Javascript Environments
There are many environments in which Javascript can be executed. Two of major runtime environments are:
1. Web Browser
2. Node.js

As mentioned earlier, there is only single Javascript specification. However, various Javascript environments add their own APIs into the global scope of Javascript program.

Take a look at below code:

```javascript
alert('Hello World!')
```

`alert()` function is web API that is offered by all the major web browsers. Web APIs, however, are not part of Javascript specification.

We can see how these web APIs are only available in the scope of web browsers by trying to execute them in different environment. For instance, executing `alert()` in Node.js will throw an error since `alert()` API is not available in Node.js environment.

### Developer Console
There is some misconception about developer tool's console when it comes to determining whether developer console is considered a Javascript environment.

Since developer console feels pretty much like Javascript environment, we tend to think that it will behave just like any other javascript environment. Developer console is, however, a tool created for better developer experience (DX). It is not a javascript environment where you expect it to work exactly like how Javascript engine handles a .js file. Developer console's behavior varies from browser to browser and hence it might be good idea to use it only for quick debugging purposes (which is its original, intended use case anyway).

## Programming Paradigm
In programming languages, we have a concept called **programming paradigm**, which refers to different approaches in how we organize the code. There are namely 3 big programming paradigm categories:
1. **Procedural:** Structures code in top-down, step by step manner
2. **Object Oriented:** Structures code by grouping related variables and functions in a unit called object
3. **Functional:** Structures code by using pure functions and avoiding usage of shared, mutable data

While some languages are oriented towards one programming paradigm like C (Procedural) or Java (OOP), Javascript is a multi-paradigm language. So Javascript can be used to implement procedural, object oriented or functional programming paradigm as needed.

## Javascript Compatibility
One thing to note about Javascript is that while Javascript is *backward compatible*, it is not *forward compatible*.

Backward compatible means that once a new feature is added to Javascript, it would never become invalid JS syntax in future. This make sure that developers can write code with confidence, knowing that the code won't break in future. For TC39, however, they have to be really careful when introducing a new feature because once implemented, it is permanent, even if mistakes were made.

Forward compatible means that including a new feature to a program will not break the program ran in older Javascript engine. Unfortunately, Javascript is not forward compatible and using newer syntax (ex. ES2022) in older javascript engine (ex. IE 6) would break the program.

Since Javascript is not forward compatible, does this imply that developers should always use older syntax that is supported by older Javascript engines? Not really, as developers have come up with ways to counter this, namely **transpilation** and **polyfills**.

Both of the concept has to do with solving forward compatible issue by making sure newer syntax can be run on older JS engines. The difference is:

1. Transpilation: Convert newer JS syntax to older JS syntax
2. Polyfill: Provide definition for missing API in older JS environment

Here is the example of polyfill from [You don't know js](https://github.com/getify/You-Dont-Know-JS):

```javascript
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function f(fn) {
    return this.then(
      (v) => {
        return Promise.resolve(fn())
          .then(() => {
            return v
          })
      },
      (e) => {
        return Promise.resolve(fn())
          .then(() => {
            throw e
          })
      }
    )
  }
}
```

As you might have noticed, polyfill has to do with providing the definition for the newer syntax rather than converting it to old JS syntax. So in the above code, it checks whether the `finally` is defined in JS engine by giving `if` check and if it does not exist, it will add the polyfill (`finally()`) to the environment.

## Interpretation and Compilation
There is ongoing debate on whether we should consider Javascript as compiled or interpreted language. While Javascript was initially considered as interpreted language, the boundary between interpreted and compiled language blurred as Javascript engine got optimized and changed over the years. To understand this better, let's look at what is meant by interpretation and compilation, as well as examining Javascript code execution process.

Interpreted languages refer to languages that are executed in a top-down and step-by-step fashion without any initial parsing. Because code is executed on the fly, error is only detected if interpreter reads that line of code during execution.

Compiled languages refer to languages that are first parsed and then converted to executable version of code. As compared to interpreted languages, error can be detected during compile time.

---

Let's also examine how Javascript code gets processed. Briefly, the following happens during code execution:

1. The source code gets converted by transpiler (ex. Babel), then packed by a bundler (ex. Vite, Webpack).
2. Javascript engine parses the code into AST(Abstract Syntax Tree)
3. Javascript engine converts AST into bytecode using interpretor which is further optimized by JIT compiler
4. Javascript VM executes the optimized program.

So Javascript code is first parsed into AST and AST is converted to bytecode which is then optimized by JIT compiler.

What do I mean by AST and JIT compiler?

Abstract Syntax Tree (AST) is tree representation of source code. Below code:

```javascript
const a = 42

function add(b, c) {
  return b + c
}
```

gets converted to this:

::cloudinaryImage
---
src: /blogs/AST.png
alt: Abstract Syntax Tree
figure: Abstract Syntax Tree
---
::

You can explore this with online tools like [AST Explorer](https://astexplorer.net/) and [AST Visualizer](https://www.jointjs.com/demos/abstract-syntax-tree)

As for JIT (just in time) compiler, it is compiler that compiles code during code execution instead of ahead of time (AOT). So in Javascript engine, there is profiler/monitor that watch how many times different statements get executed. If it gets executed multiple times, it is marked either as 'warm' or 'hot'. Baseline compiler optimize the code marked by profiler and compile them into "stub". When profiler sees that same code is getting executed again, it uses the compiled version to speed things up.

As for parts of the code that becomes really "hot", the profiler send it to optimizing compiler which then creates even faster version of the code. It makes some assumptions about the code in order to do this, however, and when this assumptions become invalid, the compiled code is trashed. This trashing process is called deoptimization or bailing out. Note that, Javascript can be progressively promoted to higher level of optimization or it can drop down to slower, less optimized code.

So again, Javascript is parsed into AST, AST is converted into bytecode by interpretor, bytecode is compiled using baseline compiler and some of it is further optimized by optimizing compiler.

::cloudinaryImage
---
src: /blogs/javascript-process.png
alt: Javascript Process
figure: Execution of Javascript Code
---
::

> While different javascript engines handle the process differently, all the major Javascript engines (V8, SpiderMonkey, Chakra) support optimization through JIT compiler. In the case of V8 engine, it uses interpretor called Ignition and use JIT compiler called TurboFan.

---

Going back to the original question: is Javascript interpreted or compiled?

There are two characteristics of compiled languages:
1. Language is parsed
2. Language performs code generation (after it was parsed)

Remember that Javascript is parsed into AST and then further optimized by the JIT compiler? Also note that Javascript informs us of syntatic errors before the code is executed. These are characterstics that are closer to compiled language than interpreted language.

Having said that, people today consider Javascript as compiled language and I personally think that Javascript is compiled language as well.

## Web Assembly
I briefly explained about the Javascript code execution process and how it gets optimized through JIT compiler. However, engineers from Mozilla actually came up with ways that made the process even faster. They invented asm.js, a subset of Javascript, which focused on compiling C/C++ into Javascript.

Using Mozilla’s Emscripten compiler, C/C++ is compiled to asm.js which is then passed to Javascript engine for further processing. One thing to note about asm.js is that, it skips some of the monitoring and optimization steps as illustrated below:

::cloudinaryImage
---
src: /blogs/asm-js.png
alt: Javascript Process
figure: Execution of asm.js
---
::

Intoduction of asm.js excited many developers, especially after its demonstration of a port of the Unreal 3 game engine in a browser. It still had some room for performance improvement, however, since there were inherent delays with asm.js; asm.js is delivered to browser as obfuscated JavaScript which also needed to be parsed into AST. Seeing this, engineers from Google, Microsoft, Mozilla, and Apple started working on a project that would bring new possibilities for the web: WebAssembly.

WebAssembly is a portable representation format that is delivered to the browser as modules. There are two formats associated with WebAssembly:

1. Binary format
2. Text format

Text format is readable version of WASM using *.wat* extension while binary format is more compact version using *.wasm* extension. Text format looks like this:

```wasm
(module
  (func $i (import "imports" "imported_func") (param i32))
  (func (export "exported_func")
    i32.const 42
    call $i
  )
)
```

Notice `module` in the code above? All the WebAssembly code is distributed in separate *modules* and each module contain different *sections* (You can find the list of different sections [here](https://webassembly.github.io/spec/core/binary/modules.html)). For instance, there is `export` section, which allows the functions defined in WebAssembly to be executed by the host environment. Also note that WebAssembly doesn’t have any built-in I/O capabilities, so the only way it can communicate with outside environment is through export section or using *shared linear memory*.

**Shared linear memory** is used as heap where complex data types that cannot be handled by WASM (it only supports 4 numeric data types) gets stored. Contrary to WebAssembly stack (used to store function instructions), shared linear memory is accessible by the host environment. To read from shared lineary memory, however, it first need to be decoded. This encoding/decoding logic is a bit of issue since it require encoder and decoder, but the community have developed tools like [wasm-bindgen](https://github.com/rustwasm/wasm-bindgen) to tackle this issue.

::cloudinaryImage
---
src: /blogs/shared-linear-memory.png
alt: Shared Linear Memory Decoding Process
figure: Shared Linear Memory Decoding Process
---
::

### Design Goals
Alright, let's step back a bit and look at some of design goals of WebAssembly.

#### Security
WebAssembly modules are *sandboxed*, meaning code execution cannot escape the runtime environment. As mentioned before, runtime environment has no I/O capability (ex. write to filesystem) and only use export/import section and shared linear memory to interact with outside environment.

#### Portability
WASM binary format can be executed on variety of system environments, both within browser and outside browser. When WASM communicate with hosting environment, it makes no assumptions (including web specific assumptions)

#### Performance
When WASM module is passed to browser, it needs to be decoded and compiled. This process, however, is faster compared to parsing & compilation process that Javascript need to go through. Moreover, this decode/compilation can be split across multiple threads, and this whole process can take place while the module is being downloaded in the browser. WASM is simple in nature too, (it has no garbage collection, runtime APIs or reflections) and the simple validation rules contribute to fast start time and near native performance.

---

One final thing to note about WebAssembly is that it supports wide range of programming languages.

If you remember from earlier in this section, Emscripten compiler is used to compile C/C++, not only to asm.js but also to WebAssembly. Originally, Emscripten compiler was used to compile Rust as well. Recently though, LLVM (low level virtual machine), which is a toolkit for building other compilers, is used to compile Rust into WebAssembly. If you come from .NET background, blazor, framework for building client side web app, is used to compile C# into WebAssembly. Other than that, there are still many other compilers that supports compiling languages such as Python, Go, Swift, Javascript and more.

## Conclusion
I summarized quite a bit of information from different articles and books. If the information presented here does not click and you want to gain better context to what I just wrote, try reading [You don't know js](https://github.com/getify/You-Dont-Know-JS)! It definitely gives more background information than my summarized version.

## References
- [You don't know js](https://github.com/getify/You-Dont-Know-JS)
- [JavaScript Versions: How JavaScript has changed over the years](https://www.educative.io/blog/javascript-versions-history)
- [JavaScript Interpreted or Compiled? The Debate is Over](https://blog.greenroots.info/javascript-interpreted-or-compiled-the-debate-is-over)
- [How Does JavaScript Really Work? (Part 1)](https://blog.bitsrc.io/how-does-javascript-really-work-part-1-7681dd54a36d)
- [A crash course in just-in-time (JIT) compilers](https://hacks.mozilla.org/2017/02/a-crash-course-in-just-in-time-jit-compilers/)
- [What Is WebAssembly?](https://learning.oreilly.com/library/view/what-is-webassembly/9781492076902/)
