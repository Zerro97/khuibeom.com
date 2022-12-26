---
date: 2022-12-24
title: 'Javascript Fundamentals: What is Javascript? (Part 1)'
description: 'A deeper inspection on how javascript work under the hood'
banner: '/blogs/post-3.jpg'
icon: 'logos:javascript'
time: 4
slug: javascript-fundamentals-what-is-javascript
categories: 
  - Front End
tags:
  - javascript
  - fundamental
---

## Preface
Something that I realized while I worked on many of frontend tasks is that, it is often far more efficient to look for an answer online and use them in my project rather than coming up with my own solutions. Online answers usually follow better code practices than how I would have implemented, and it takes time and effort to solve a problem on my own.

However, sometimes, I feel that I do not have enough knowledge on how all these resources work under the hood. As [Anthony Alicea](https://anthonyalicea.com/courses/) puts it, imitation can only get you so far. Having a deeper understanding of inner workings, however, can make you a successful developer.

Taking a step back from trying to make things work, I think it's important to take time to solidify foundational knowledge that can be applied in many situations. 

## Series Introduction
I'm planning to go over Javascript fundamentals in series of posts in next couple of weeks. Also kindly note that I will be referring to many of online resources to reinforcement my blog article.

In this article, I will try to explain different aspects of Javascript language itself, like how its name came about or about the compatibility issues with Javascript. Also note that most of the source of this article comes from a book called [You don't know js](https://github.com/getify/You-Dont-Know-JS). I'll be adding some additional information on top of it and summarize the book in my own words. If you have not read the book and want to gain deeper understanding of Javascript, I think it's worth a time to read through the book.

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

---

That was a lot of names for Javascript and I hope you are not lost. Whether you call it Javascript, JS or ECMAScript, just remember that Javascript is not a variant of Java!

## Javascript Specification
Have you ever wondered how a new feature is added to Javascript and who is maintaining Javascript specification? 

Well, Javascript is maintained by [TC39](https://tc39.es/), an international group of committees comprised of around 50 to 100 people from web-invested companies (Mozilla, Google, Samsung etc). TC39 is also responsible for deciding what changes are going to be applied to Javascript. 

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

While some languages are oriented towards one programming paradigm like C (Procedural) or Java (OOP), Javascript is a multi-paradigm language. So Javascript can be used to implement procedural, object oriented or functional programming paradigm as needed.

## Javascript Compatibility
One thing to note about Javascript is that while Javascript is *backward compatible*, it is not *forward compatible*.

Backward compatible means that once a new feature is added to Javascript, it would never become invalid JS syntax in future. This make sure that developers can write code with confidence, knowing that the code won't break in future. For TC39, however, they have to be really careful when introducing a new feature because once implemented, it is permanent, even if mistakes were made.

Forward compatible means that including a new feature to a program will not break the program ran in older Javascript engine. Unfortunately, Javascript is not forward compatible and using newer syntax (ex. ES2022) in older javascript engine would break the program.

Since Javascript is not forward compatible, does this imply that developers should always use older syntax that is supported by older Javascript engines?

Developer overcome forward compatible issue through transpilation and polyfills. 


## Interpretation and Compilation

## Web Assembly

## Conclusion
This was a long article and I hope you managed to stick through it.

## References
- [You don't know js](https://github.com/getify/You-Dont-Know-JS)
- [Javascript: Understanding the Weird Parts](https://www.udemy.com/course/understand-javascript/)
- [JavaScript Interpreted or Compiled? The Debate is Over](https://blog.greenroots.info/javascript-interpreted-or-compiled-the-debate-is-over)
- [JavaScript Versions: How JavaScript has changed over the years](https://www.educative.io/blog/javascript-versions-history)