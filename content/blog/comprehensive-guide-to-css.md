---
date: 2022-12-05
title: 'Comprehensive Guide to CSS'
description: 'A complete overview of CSS, covering syntax, layouts, animations and more'
banner: '/images/banners/post-2.jpg'
icon: 'logos:css-3'
time: 2
slug: comprehensive-guide-to-css
categories: 
  - Front End
tags:
  - css
  - design
---

## Test
I've seen many navbars that have a bug that causes the menu to disappear on desktop if you already toggled the view on mobile. This is an issue that is mostly noticed by developers, as your average user probably isn't constantly resizing screens and toggling menus. However, this is a very simple problem to fix. If you'll notice in the original HTML, I've set the ul class to `nav-list`, but haven't referenced it yet. With this simple code, I'm going to ensure that the menu is _always_ displayed on large screen sizes.

> Now is the time to uncomment `display: none;` from the `.nav-mobile` class. We want it to be invisible until mobile collapse.

Now go back to your `@media only screen and (max-width: $breakpoint)` query. Place this at the top.

```scss
.nav-mobile {
  display: block;
}
```

We have to apply some styles to the mobile menu. First, set the `nav` to take up 100% of the viewport. Remove the left float from the list. We'll set some padding and height to the `a` tag, and extra left padding to the nested `ul`s.

#### Test
I've seen many navbars that have a bug that causes the menu to disappear on desktop if you already toggled the view on mobile. This is an issue that is mostly noticed by developers, as your average user probably isn't constantly resizing screens and toggling menus. However, this is a very simple problem to fix. If you'll notice in the original HTML, I've set the ul class to `nav-list`, but haven't referenced it yet. With this simple code, I'm going to ensure that the menu is _always_ displayed on large screen sizes.

> Now is the time to uncomment `display: none;` from the `.nav-mobile` class. We want it to be invisible until mobile collapse.

Now go back to your `@media only screen and (max-width: $breakpoint)` query. Place this at the top.

```scss
.nav-mobile {
  display: block;
}
```

We have to apply some styles to the mobile menu. First, set the `nav` to take up 100% of the viewport. Remove the left float from the list. We'll set some padding and height to the `a` tag, and extra left padding to the nested `ul`s.

### Test
I've seen many navbars that have a bug that causes the menu to disappear on desktop if you already toggled the view on mobile. This is an issue that is mostly noticed by developers, as your average user probably isn't constantly resizing screens and toggling menus. However, this is a very simple problem to fix. If you'll notice in the original HTML, I've set the ul class to `nav-list`, but haven't referenced it yet. With this simple code, I'm going to ensure that the menu is _always_ displayed on large screen sizes.

> Now is the time to uncomment `display: none;` from the `.nav-mobile` class. We want it to be invisible until mobile collapse.

Now go back to your `@media only screen and (max-width: $breakpoint)` query. Place this at the top.

```scss
.nav-mobile {
  display: block;
}
```

We have to apply some styles to the mobile menu. First, set the `nav` to take up 100% of the viewport. Remove the left float from the list. We'll set some padding and height to the `a` tag, and extra left padding to the nested `ul`s.

## Test
I've seen many navbars that have a bug that causes the menu to disappear on desktop if you already toggled the view on mobile. This is an issue that is mostly noticed by developers, as your average user probably isn't constantly resizing screens and toggling menus. However, this is a very simple problem to fix. If you'll notice in the original HTML, I've set the ul class to `nav-list`, but haven't referenced it yet. With this simple code, I'm going to ensure that the menu is _always_ displayed on large screen sizes.

> Now is the time to uncomment `display: none;` from the `.nav-mobile` class. We want it to be invisible until mobile collapse.

Now go back to your `@media only screen and (max-width: $breakpoint)` query. Place this at the top.

```scss
.nav-mobile {
  display: block;
}
```

We have to apply some styles to the mobile menu. First, set the `nav` to take up 100% of the viewport. Remove the left float from the list. We'll set some padding and height to the `a` tag, and extra left padding to the nested `ul`s.