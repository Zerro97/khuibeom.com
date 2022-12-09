---
date: 2022-12-08
title: 'History of CSS'
description: 'Overview of how CSS came about and evolved over the years'
banner: '/banners/post-2.jpg'
icon: 'logos:css-3'
time: 4
slug: history-of-css
categories: 
  - Front End
tags:
  - css
  - design
  - history
---

## How CSS came about
Before CSS, developers used formatting markup to design webpage, which looked like this:

```html
<BODY>
  <P SIZE="8" COLOR="GREEN">SOME TEXTS</P>
  <BR>
  <IMG align=left border=2>
</BODY>
```

Notice how the styles are embedded within HTML? With lack of [separation of concerns](https://dev.to/tamerlang/separation-of-concerns-the-simple-way-4jp2), this was not ideal for designing a webpage in a long run. Developers at the time was considering stylesheets that is separate from the document structure. CSS was one of them.

CSS, a shorthand for Cascading Style Sheet, is a design language proposed by Håkon Wium Lie in 1994 and later released in 17th December 1996.

While CSS was not the only proposal for stylesheets, it distinguished itself from other proposals in that it allowed cascading of styles. Cascading style allowed for different author, reader, display device and browser to define their own styles and combine them together. For instance, every browser (aka user agent), have their own style sheets called user-agent **stylesheets**. This is used to give default styles to a document rendered in browser. On top of user-agent stylesheet that browser use, there is **author stylesheets** that web developers define. Lastly, there is **user stylesheets** in which the reader of the website can choose to override the styles as tailored to his own taste. With CSS, these styles are cascaded and combined together so that the design is not defined by single individual.

## CSS Levels
Ever since it was first introduced, CSS has evolved, from CSS Level 1 to modular CSS Level 3 as maintained by [CSS Working Group](https://www.w3.org/Style/CSS/members) (CSSWG). 

What do I mean by CSS level? Level here refers to the specification of CSS and how it builds on top of previous specification. For instance, CSS 4 builds on CSS 3 specification, CSS 3 builds on CSS2 and CSS2 builds on CSS1. 

Note that beyond CSS level 2, CSS specification has become modular, so all the current CSS specification modules have their own levels to them. For instance, [color module](https://www.w3.org/TR/2022/CRD-css-color-4-20221101/) and [selectors module](https://www.w3.org/TR/2022/WD-selectors-4-20221111/) are currently at level 4 while [flexible box layout module](https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/) is currently at level 1 and [grid layout module](https://www.w3.org/TR/2020/CRD-css-grid-2-20201218/) at level 2.

The reason that CSSWG separated css specification into modules, were to break down monolithic CSS specification into separate chunks and allow for more rapid, immediate improvements to CSS. 

While we often refer to CSS3 as a whole, I think it's still useful to remember that each of CSS modules have their own pacing. Some might be waiting for CSS4 to come out, but strictly speaking, CSS 4 is just marketing term. 

> *Peter-Paul Koch*
> 
> I am proposing that we web developers, supported by the W3C CSS WG, start saying “CSS4 is here!” and excitedly chatter about how it will hit the market any moment now and transform the practice of CSS.
> Of course “CSS4” has no technical meaning whatsoever. All current CSS specifications have their own specific versions ranging from 1 to 4, but CSS as a whole does not have a version, and it doesn’t need one, either.
> Regardless of what we say or do, CSS 4 will not hit the market and will not transform anything. It also does not describe any technical reality.
> Then why do it? For the marketing effect.

## CSS 1
> *When I say Level 1 here, I'm referring back to the original CSS specification made before CSS was modularized*

CSS Level 1, released in 1996, featured properties like following:
- `width`
- `height`
- `float`
- `margin`
- `padding`
- `border`

While it was better than the previous formatting markup, CSS Level 1 lacked layout tools. In order to layout page, developers came up with hacky way of using `float`. With `float`, developers were able to move things left or right of the page and since then, the developers were stuck with using float to design layout for quite some time. Original purpose of `float`, however, was to allow web developers to create magazine-style layouts by having text wrapping around an image. As a matter of fact, `table` was the recommended way of making a layout at the time.

## CSS 2
CSS Level 2, released in 1998, introduced `display` property and added support for different media types. With `display` property, CSS2 promised the ability to dissociate the layout from the html tags. 

```css
.sidebar, .main { display: table-cell; }
```

However, due to browser compatibility issue, there were several bugs and inconsistent behavior among different browsers. To address this, CSS Working Group started CSS 2 revision 1 and worked on fixing errors and building [test suits](https://test.csswg.org/harness/). 

## CSS 3
As mentioned before, css specification was modularized beyond CSS 2, each modules having their own pace of levelling up.

In CSS 3, 4 major improvements were made:

1. **Processing power:** Selectors and media queries.
2. **Decorative effects:** Multiple backgrounds, rounded corners, border images, and CSS gradients
3. **Typography and Internationalization:** Vertical text, custom fonts, line-breaking and justification controls
4. **Layout:** Flexbox, Grid, regions & exclusions and multi column

Out of these 4 efforts, CSS's layout capabilities has seen the most change in past years. 

Notably, [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) offered flexible way of designing elements that adapts to different screen sizes and [grid layout](https://css-tricks.com/snippets/css/complete-guide-grid/) gave expressive way of architecturing overall page layout.

While not used as often, multi-column layout allowed megazine-like design by creating columns in a page and determning how the content flow from column to column.

Apart from layout, CSS has also evolved in other aspects as well. CSS variables and functions allowed for more dynamic use of CSS which was previously handled by javascript. Use of `color-scheme` can help decide operating systems color scheme preference. Using `aspect-ratio` can make images more responsive. There are so many interesting stuff about CSS that learning CSS feels so enjoyable these days.

## Conclusion
While I wanted to write more about CSS properties, it seemed a little off to introduce them in this post. Anyway, I hope that this article gave brief overview of history of CSS and helped you in some way :)

## References
- [The evolution of scalable CSS](https://frontendmastery.com/posts/the-evolution-of-scalable-css/)
- [A Touch of Class](https://fantasai.inkedblade.net/weblog/2012/css-layout-evolution/)
- [CSS4](https://css-tricks.com/css4/)
- [The Evolution of CSS in 3 Decades](https://byby.dev/css-evolution)
- [A brief history of CSS until 2016](https://www.w3.org/Style/CSS20/history.html)
- [Introducing the CSS Cascade](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade)