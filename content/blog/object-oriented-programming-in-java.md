---
date: 2022-12-16
title: 'Object Oriented Programming in Java'
description: 'Summary on object oriented programming in java'
time: 6
banner: '/blogs/post-2.jpg'
icon: 'logos:java'
slug: object-oriented-programming-in-java
categories:
  - Interview
tags:
  - OOP
  - java
# image:
#   src: 'https://res.cloudinary.com/dpdm96hjl/image/upload/v1670587534/khuibeom.com/blogs/post-2.jpg'
#   alt: 'Article Image'
# head:
#   meta:
#     - name: 'title'
#       content: 'Object Oriented Programming in Java'
#     - name: 'og:title'
#       content: 'Object Oriented Programming in Java'
#     - name: 'twitter:title'
#       content: 'Object Oriented Programming in Java'
#     - name: 'description'
#       content: 'Summary on object oriented programming in java'
#     - name: 'og:description'
#       content: 'Summary on object oriented programming in java'
#     - name: 'twitter:description'
#       content: 'Summary on object oriented programming in java'
#     - name: 'og:url'
#       content: 'https://khuibeom.com/blog/object-oriented-programming-in-java'
#     - name: 'twitter:url'
#       content: 'https://khuibeom.com/blog/object-oriented-programming-in-java'
#     - name: 'keywords'
#       content: 'Interview, OOP, java'
#     - name: 'author'
#       content: 'Hui Beom Kim'
---

## Introduction
Whenever I looked into developer interview questions online, one of the concepts that often came out was about object oriented programming. I thought it would be helpful to go through object oriented programming in detail so I know how to explain a concept that seems quite fundamental for being a developer.

## What is OOP?
**Object oriented programming** or OOP is a programming paradigm in which related variables and functions are grouped together in a unit called **object**. These objects are used to represent the real world entities. For example, we could have a cat as an object, its name and age as the variable and makeNoise() as the function. 

```java
class Cat {
    private int age;
    private String name;

    public void makeNoise() {
        System.out.println("meow!");
    }
}
```

Here, I have defined a **class** called Cat. We can think about class as a blueprint, something that defines what the entity is going to be like. We call **object** as an **instance** of the class and we create the object by **instantiating** the class. 

So, we could have other class instantiating the Cat class:
```java
class Main {
    public static void main(String args[]) {
        // Instantiating a cat class
        Cat blue = new Cat();
    }
}
```

## Why do we use OOP?
OOP was introduced to solve the problem that **procedural programming** brought, another programming paradigm that came before object oriented programming. In procedural programming, we give computer a list of instructions in step-by-step, top-down manner.

::cloudinaryImage
---
src: /blogs/procedural-oop.png
alt: Procedural and OOP
figure: Procedural vs OOP
---
::

The problem with procedural programming was that as the program grew and became complex, the same set of functions ended up being copied and used everywhere in a program which in turn increased inter-dependency. This led to a **spaghetti code** where a problem in one function ended up breaking other functions that depended on it.

To solve the problem that procedural programming brought, object oriented programming introduced four main concepts:
* Encapsulation
* Abstraction
* Inheritance
* Polymorphism

## Encapsulation & Abstraction
Encapsulation and abstraction is a concept about hiding the information from the outside world. For example, when we drive a car, all we have to care about is pressing on the car pedals. The details of how the car operate is hidden from the drivers. By hiding unnecessary information from the user, interaction with the car becomes simpler since we only have to deal with its public interface.

Then, what is the difference between encapsulation and abstraction?

- Abstraction focuses on hiding unnecessary information so that interface becomes simpler. 
- Encapsulation focuses on hiding internal data so that the data is protected from outside world. 

### Access Modifier
In java, we achieve different levels of abstraction using **access modifier**. Access modifier help restrict the scope of a class, constructor, variable or method. There are 3 types of modifiers:

| Type | Description |
|------|-------------|
| `private`{lang="java"} | variable, method, and class are only accessible on the class on which they are declared |
| `protected`{lang="java"} | variable, method and class are only accessible on the package it belongs |
| `public`{lang="java"} | variable, method and class are accessible everywhere |

It is generally good practice to use `private`{lang="java"} over `public`{lang="java"} since using `public`{lang="java"} makes any change on the internal structure of class very difficult because it affects all clients using it. 


## Inheritance
**Inheritance** is a mechanism in which one object acquires all the properties and behaviors of a parent object. For example, we could have vehicle as a parent class and a truck as a child class. In vehicle class, we can have a function that all of its child classes would have, such as `drive()`{lang="java"}. The main advantage of this is that it reduces redunduncy in code.

When we talk about the relationship between classes, there are two types to consider:
1. **inheritance**
2. **composition**

I briefly explained what inheritance is but there is different way of thinking about this. Inheritance is `is a` relationship whereas composition is `has a` relationship. For example, car **is a** vehicle but car **has a** car engine. 

```java
// Composition: has-a relationship
public class Car {
    private Engine engine;
   
    public Car(){
        this.engine = new Engine();
    }
}
```

```java
// Inheritance: is-a relationship
public class Car extends Vehicle{   
    public Car(){
        
    }
}
```

<!-- So both of **inheritance** and **composition** defines a relationship between classes but when do we use one over the other? We use inheritance if we want to take advantage of **polymorphism**, but otherwise it is better to use composition. To understand this, we should know what **polymorphism** is. -->

## Polymorphism
In general term, we can define polymorphism as the ability of a message to be displayed in more than one form. In java, we have two types of polymorphism:

1. `method overloading`
2. `method overriding`

### Method Overloading

Method overloading is a **compile time** polymorphism and it happens when there are multiple functions with same name but different parameters:

```java
class Main {
    public static void add(int a, int b) {
        System.out.println(a + b);
    }

    public static void add(int a, int b, int c) {
        System.out.println(a + b + c);
    }

    public static void add(float a, float b) {
        System.out.println(a + b);
    }

    public static void main(String args[]) {
        int a = 3;
        int b = 5;
        int c = 7;
        float d = 2.5;
        float e = 6.4;

        add(a,b);   // Calls the first add() function
        add(a,b,c); // Calls the second add() function
        add(d,e);   // Calls the third add() function
    }
}
```



### Method Overriding

Method overriding is a **run time** polymorphism and it happens when the child class have a definition for the function that exist in the parent class:

```java
// Parent Class
class Animal{
    public void makeNoise() {
        System.out.println("some noise...");
    }
}

// Child Class
class Cat extends Animal{   
    @Override
    public void makeNoise() {
        System.out.println("meow!");
    }
}

class Main {
    public static void main(String[] args) {
        Animal animal = new Animal();
        Animal kitty = new Cat();

        animal.makeNoise(); // Prints "some noise..."
        kitty.makeNoise(); // Prints "meow!"
    }
}
```

Notice a line of code that says `Animal kitty = new Cat()`{lang="java"}? Let's dig into this a little more.

On the right side of equal statement, we are creating an object of type `Cat` with **new** keyword. Creating an object means that Java is allocating a memory that is required to store the object.

On the left side of equal statement, we are creating a **reference variable** of type `Animal` called kitty. Reference variable is a variable that stores the address of the object, not the object itself.

So we have reference variable of type Animal called kitty, that points to the address of object that is of type Cat. 

Then, what happens if reference variable kitty make the function call `kitty.makeNoise()`{lang="java"}? Which function would this method call invoke if reference variable and actual object in memory have different types?

Java solves this in a process known as binding. **Binding** is when Java associate the method call to the appropriate method body. In the case of calling overridden function, Java uses **dynamic binding** to determine which function to call. 

#### Dynamic Binding
In dynamic binding, we call the function according to the type of object in memory (ie. Cat class) instead of reference type (ie. Animal class). This means that `kitty.makeNoise()`{lang="java"} will call method defined in an object in memory, which is Cat class.

One thing I want to point out is that, dynamic binding happens during run time.

All objects are created during run time in java. This implies that during compile time, compiler does not yet know which method `kitty.makeNoise()`{lang="java"} will call because object, where method body is defined, does not exist. During run time, however, method overriding can figure out which function to call. The name `run time polymorphism` comes from this.
