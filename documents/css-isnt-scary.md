footer: CSS Isn't Scary | @sublimemarch

## CSS Isn't Scary:
### How to Stop Worrying
### and Love Front End
### **with Stephanie Slattery**

^ my name is stephanie slattery and i'm a front end engineer at clique studios. i'm a graduate of illinois tech and dev bootcamp right here in chicago.

---

### #CoderConference
### @sublimemarch

---

##**Raise your hand if...**

---

1. Why CSS is scary
2. Why CSS is great!
3. How to write better CSS

---

1. Why CSS is scary
2. *Why CSS is great!*
3. *How to write better CSS*

---

---

![fit](twitter2.png)

^ most common complaints with css are about positioning

---

![fit](css-mug.jpg)

^ dealing with overflows, display properties. why is it so hard to just get things to align correctly?
^ and let's not even talk about vertical centering!

---

![fit](twitter3.png)

^ because of the cascading nature of CSS, it's so easy to accidentially break something while fixing something else

---

![fit](twitter4.png)

^ there's the idea that you can't test css! on top of that, you don't even get any output errors! missing a semicolon or a curly bracket? good luck!

---

## CSS is declarative

^
css is declaratve, which is hard to think about when you're used to object-oriented or functional programing.

^ in css:
^ - the last rule declared takes precedence
^ - the rule declared on the most specific selector takes precedence
^ - there are no loops
^ - there's no such thing as scope - everything is global!

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
"a design principle for separating a computer program into distinct sections, such that each section addresses a separate concern. A concern is a set of information that affects the code of a computer program." - wikipedia

^simplifies development and maintenance

^HTML, CSS, and JS are how we separate concerns in front end. html organizes content and provides semantics. css defines the presentation style. js defines how content interacts and behaves with the user. before css, html had to do both semantics and style.

---

## CSS is flexible

^  but! css is also flexble enough that you can let html and js do the styling for you, too.

---

## CSS is made
## of simple things

^ css is a pretty simple language, it's just selectors that have name/value pairs.

---

```css
.selector {
  name: value;
}
```

---

## CSS is easy
## to generate

^ css is easy to generate and output, too. theme building and drag & drop tools (think squarespace) exist because css is easy to generate.

---

## CSS stands alone

---

Just [look at this!](https://codepen.io/fbrz/full/whxbF/) Or [this!](https://codepen.io/waynedunkley/full/YPJWaz/)

---

## CSS is open source

^ css isn't secret, whenever you write it you're writing open source. i can see it, right there in the browser.

---

1. *Why CSS is scary*
2. *Why CSS is great!*
3. How to write better CSS

---

## CSS is just another
## programming language

^ think of css like you do back end code. you plan and pseudocode there, right?


---

# Understand specificity


```html

0. Inline styles
1. IDs
2. Classes, attributes, and pseudo-classes
3. Elements and pseudo-elements

```

^ ID selectors (e.g., #example).
^ Class selectors (e.g., .example), attributes selectors (e.g., [type="radio"]) and pseudo-classes (e.g., :hover).
^ Elements (e.g., h1) and pseudo-elements (e.g., :before).

---

## Don't guess and check for specificity

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

^ this reads as "in the home area, in the hero area, in the claim area, for all things with the logo class, for any h2"

^ the more long and specific your selectors are, the harder they will be to override and change in the future

---

## Don't put HTML components in selectors

```css
a {
  text-decoration: none;
}
```

^ tying css to specific html components (like ul, a, p, etc), what if you need to change those later

---

# No !important flags

```css
.pink-text {
  color: pink !important;
}

```

---

# And absolutely no inline styles

```html
<div style="color: red; font-size: 14px;">Hello!</div>

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


## keep it DRY

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

## CSS transpilers make
## this even easier

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

## organize your css

^ organize your css files, also organize within the file (use comments to label sections)

---

## Hacks.css

---

# put it in a hacks.css file if you're

- using magic numbers
- writing overly specific selectors
- using !important flags
- undoing styles that are elsewhere in the code

---


## understand browser compatibility

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
- try visual diffs to test your code
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

---

### [stephanie.slattery.website](stephanie.slattery.website)
