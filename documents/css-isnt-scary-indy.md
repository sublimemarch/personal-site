footer: @sublimemarch

![](ghosts.jpg)
# CSS Isn't Scary

---

## Stephanie Slattery
## @sublimemarch

^ My name is Stephanie Slattery. I'm a Front End Engineer and Accessibility Specialist at Clique Studios Chicago. I'm also a co-organizer of the Chicago Digital Accessibility and Inclusive Design meetup. And I have ~*~emotions~*~ about CSS.

---

https://tinyurl.com/y9p4ypw3

---

##**Raise your hand if...**

---

### **"CSS is strangely considered both one of the easiest and one of the hardest languages to learn as a web developer."**

^ Peter Jang, dean of instruction at Actualize

---

1. Why CSS is scary
2. Why CSS is great!
3. How to write better CSS

---

1. Why CSS is scary
2. *Why CSS is great!*
3. *How to write better CSS*

---
![fit](css-mug.jpg)

^ dealing with overflows, display properties. why is it so hard to just get things to align correctly?
^ and let's not even talk about vertical centering!

---

![fit](twitter2.png)

^ most common complaints with css are about positioning

---


![fit](twitter3.png)

^ because of the cascading nature of CSS, it's so easy to accidentially break something while fixing something else

---

![fit](twitter4.png)

^ there's the idea that you can't test css! on top of that, you don't even get any output errors! missing a semicolon or a curly bracket? good luck!

---

## CSS is declarative.

^
css is declaratve, which is hard to think about when you're used to object-oriented or functional programing.

---

## In this declarative language...
- the last rule declared takes precedence
- the rule declared on the most specific selector takes precedence
- there's no such thing as scope - everything is global!

---

![fit](css-blinds.gif)

^ all of this just gets *frustrating*
^ it feels like you're just guessing and checking.

---

![fit](twitter1.png)

^ enough to make you want to quit the internet
^ soon, you end up needing a dedicated front end engineer to make even tiny changes to the site for you.

---

# [fit] CSS IS **awful!**

---

# [fit] CSS IS **awesome!**

---


1. *Why CSS is scary*
2. Why CSS is great!
3. *How to write better CSS*

---

## The Separation of
## Controls Principle

^separation of controls principal

^simplifies development and maintenance



---

"A design principle for separating a computer program into distinct sections, such that each section addresses a separate concern. A concern is a set of information that affects the code of a computer program." - Wikipedia

---

## We separate concerns into HTML, CSS, and Javascript.


---

## HTML organizes content.

^  before css, html had to do both semantics and style.

---

## CSS defines presentation.

---

## JS defines how content interacts and behaves with the user.

---

## CSS is flexible.

^  CSS is also flexble enough that you can let html and js do the styling for you, too.

---

## CSS is made of simple things.

^ css is a pretty simple language, it's just selectors that have name/value pairs.

---

```css
.selector {
  name: value;
}
```

---

## CSS is easy to generate.

^ css is easy to generate and output, too. theme building and drag & drop tools (think squarespace) exist because css is easy to generate.

---

## CSS stands alone.

---

Just [look at this!](https://codepen.io/fbrz/full/whxbF/) Or [this!](https://codepen.io/waynedunkley/full/YPJWaz/)

---

## CSS is open source.

^ css isn't secret, whenever you write it you're writing open source. i can see it, right there in the browser.

---

## ✨ CSS tries its best. ✨

^ It's inherently a forgiving language. It doesn't throw an error when something doesn't work, it just moves forward and makes its best guess. If you add a line of code a browser doesn't support, that's okay! Where other languages would throw an error and stop, CSS moves on.

---

1. *Why CSS is scary*
2. *Why CSS is great!*
3. How to write better CSS

---

### CSS stops being scary when you understand it and follow best practices.

^ CSS is still frustrating , though.

---

## CSS is just another programming language

^ think of css like you do back end code. you plan and pseudocode there, right?

---

## Apply your programming skills:
- Reading the docs
- Planning your code
- Pseudocoding
- Refactoring

---

# Understand specificity


```html



```

---

# Understand specificity

```html

0. Inline styles


```

---

# Understand specificity

```html

0. Inline styles
1. IDs
```

---

# Understand specificity

```html

0. Inline styles
1. IDs
2. Classes, attributes, and pseudo-classes
            [type="radio"]    :hover


```

---

# Understand specificity

```html

0. Inline styles
1. IDs
2. Classes, attributes, and pseudo-classes
3. Elements and pseudo-elements

```

---

# Understand specificity

```html

0. Inline styles
1. IDs
2. Classes, attributes, and pseudo-classes
3. Elements and pseudo-elements
      h1        :before

```

---

## Don't guess and check for specificity!

---

![inline](specificity.png)

[http://specificity.keegan.st/](http://specificity.keegan.st/)

---

## Don't over-specify

```css
#home #hero #claim .logo h2 {
  display: inline-block;
}
```


---

## Don't over-specify

```css
#home #hero #claim .logo h2 {
  display: inline-block;
}
```

```html
For any h2 inside anything with the 
logo class that's inside of the claim element
that's inside of the hero element
that's inside of the home element,
display with inline-block.
```

---

### Very specific selectors are hard to override in the future.

^ the more long and specific your selectors are, the harder they will be to override and change in the future

---

# No !important flags

```html
<p id="pink-text">Kittens are cute.</p>
```

```css


```

---

# No !important flags

```html
<p id="pink-text">Kittens are cute.</p>
```

```css

#pink-text {
  color: pink;
}
```

---

# No !important flags

```html
<p id="pink-text">Kittens are cute.</p>
```

```css

#pink-text {
  color: pink;
}

p {
  color: black !important;
}

```

---

# And no inline styles

```html
<div style="color: pink;">I love kittens.</div>

```

---

# Use a single class as your selector

```css
.hero-text-link {
  font-size: 18px;
}
```

---

# Use a single class as your selector

```css
.hero-text-link {
  font-size: 18px;
}
```

# instead of something more complex

```css
.hero p a {
  font-size: 18px;
}
```

---


## Keep it DRY


---

## Keep it DRY

###**(don't repeat yourself)**

---

```html
<h2 class="fun-title pink-title">Hello</h2>
```

```css
.fun-title {
  font-family: "Comic Sans", sans-serif;
}

.pink-title {
  font-family: "Comic Sans", sans-serif;
  color: pink;
}
```

---

#instead

```html
<h2 class="fun-title pink-title">Hello</h2>
```

```css
.fun-title, .pink-title {
  font-family: "Comic Sans", sans-serif;
}

.pink-title {
  color: pink;
}
```

---

#or even better

```html
<h2 class="title pink-title">Hello</h2>
```

```css
.title {
  font-family: "Comic Sans", sans-serif;
}

.pink-title {
  color: pink;
}
```

---

# or even better-er

```html
<h2 class="title pink">Hello</h2>
```

```css
.title {
  font-family: "Comic Sans", sans-serif;
}

.pink.title {
  color: pink;
}
```

---

## CSS extensions make this even easier!

^ like Sass and LESS

---

```html
<h2 class="pink-title">Hello!</h2>
```

```scss
.title {
  font-family: "Comic Sans", sans-serif;
}

.pink-title {
  @extend .title;
  color: pink;
}
```

^ for example, in SCSS

---

## Organize your CSS.

^ organize your css files, also organize within the file (use comments to label sections)


---

![inline](organized.png)

---

## Organize your files, but also your selectors.

^ There are lots of different opinions on this. Consider sorting by purpose, by importance, or from general to specific.

---

## hacks.css

---

## In hacks.css, you should leave:
- your hacky code
- why you did it
- possible ways to fix it

---

# Put it in a hacks.css file if you're

- using magic numbers
- writing overly specific selectors
- using !important flags
- undoing styles that are elsewhere in the code

---


## Understand browser compatibility.

---

![inline](caniuse.png)

[https://caniuse.com/](https://caniuse.com/)

---

## And so much more!

```html
- learn the box model
- use flexbox
- pick a preprocessor
- implement a naming methodology like BEM or OOCSS
- use a linter
- look at dev tools
- use a CSS reset
```

^ use a preprocessor to simulate scope (nesting selectors) - but you need a build tool and nesting too deeply gives performance issues
^ use naming methodology like BEM or OOCSS - but need to learn and strictly apply this

---

#[fit] CSS IS **awesome**!
###(mostly)

^further reading:
^- http://developer.telerik.com/topics/web-development/love-letter-css/
^- https://medium.com/thinkful/top-five-css-mistakes-6ab6944e66a2
^- http://www.creativebloq.com/css3/avoid-css-mistakes-10135080
^- https://csswizardry.com/2012/11/code-smells-in-css/
^- https://www.darrylholtby.com/2015/03/css-is-hard/
^- https://medium.com/any-stack-any-language-anywhere/why-css-is-hard-89f3b221dd4d
^- https://medium.com/actualize-network/modern-css-explained-for-dinosaurs-5226febe3525
^- https://medium.freecodecamp.org/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849
^- https://christianheilmann.com/2017/09/19/web-truths-css-is-not-real-programming/?utm_source=CSS-Weekly&utm_campaign=Issue-285&utm_medium=email
^- https://medium.com/@isaaclyman/8-css-gotchas-to-start-your-morning-off-right-c5daade0731d
^- https://medium.freecodecamp.org/its-not-dark-magic-pulling-back-the-curtains-from-your-stylesheets-c8d677fa21b2

---

![](ghosts.jpg)

## Stephanie Slattery
## @sublimemarch
