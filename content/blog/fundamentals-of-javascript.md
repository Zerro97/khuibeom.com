---
date: 2022-12-24
title: 'Javascript Fundamentals: What is Javascript? (Part 1)'
description: 'A deeper inspection on how javascript work under the hood'
banner: '/blogs/post-3.jpg'
icon: 'logos:javascript'
time: 4
slug: fundamentals-of-javascript
categories: 
  - Front End
tags:
  - javascript
---

## Introduction
Something that I realized while I worked on many of frontend tasks is that, it is often far more efficient to look for an answer online and use them in my project rather than coming up with my own solutions. Online answers usually follow better code practices than how I would have implemented, and it takes time and effort to solve a problem on my own.

However, sometimes, I feel that I do not have enough knowledge on how all these resources work under the hood. It's true that I feel more confident after I tried out these new techniques, but I also feel that I do not have a fundamental knowledge that glue all the concepts together. 

Taking a step back from trying to make things work, I think it's important to take time to solidify foundational knowledge that can be applied in many situations. So, without further ado, let's take a deeper look at how javascript work under the hood.

## Javascript Specification
> I will be going over about Javascript language itself in this entire post. For detailed workings of Javascript code, you might skip over to Part 2 of the series

Javascript specification is maintained by [TC39](https://tc39.es/), an international group of committees comprised of around 50 to 100 people from web-invested companies (Mozilla, Google, Samsung etc). TC39 is responsible for deciding which new features are going to be added to Javascript. 

When a new feature is going to be added, a proposal is made. Interestingly, all of the new proposals are managed in open source [github repository](https://github.com/tc39/ecma262/) so anyone can participate in making a proposal. However, only TC39 committees are responsible for deciding which proposals will take effect, through series of meetings and votes.

A newly made proposals goes through [TC39 process](https://tc39.es/process-document/) which is comprised of Stage 0 to Stage 4. Stage 0 means that one of the committee memeber thinks that the proposal is worthy of consideration. Stage 4 means that the proposal is eligible to be included in the formal ECMAScript standard.

---

One thing about Javascript specification is that, there are no multiple versions of Javascript. There is only a single, central specification as maintained by TC39.

The time at which different web browsers implement the new feature, however, can differ. Chrome might implement a new feature in their Javascript engine earlier than Firefox and vice versa. Nonetheless, it should never be the case that web browser engines implement the feature differently from other web browser engines. 

This implies that developers can be rest assured that the same Javascript can be applied in multiple environments.

## Javascript Environments
There are many environments in which Javascript can be executed. Two of major runtime environments are:
1. Web Browser
2. Node.js

As mentioned earlier, there is only single Javascript specification. However, various Javascript environments add their own APIs into the global scope of Javascript program.

Take a look at below code:

```javascript
alert("Hello World!")
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

While some languages are oriented towards one 

## Compatibility

## Execution Context
Take a look at the below javascript code:

```javascript
var a;
function b() {

}
```

## Conclusion
Most source of this article comes from a book called [You don't know js](https://github.com/getify/You-Dont-Know-JS). While I tried to summarize and put it into my own words, it might be better to read the book instead, if you want to better grasp the concepts about javascript.

## References
- [You don't know js](https://github.com/getify/You-Dont-Know-JS)
- [Javascript: Understanding the Weird Parts](https://www.udemy.com/course/understand-javascript/)