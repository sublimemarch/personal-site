footer: @sublimemarch
build-lists: false

![](money.jpg)

#[fit] Why Won't You 
#[fit] Take My Money?

---

## Stephanie Slattery
## @sublimemarch

^ My name is Stephanie Slattery. I'm a Front End Engineer and Accessibility Specialist at Clique Studios Chicago. I'm also a co-organizer of the Chicago Digital Accessibility and Inclusive Design meetup. I've led accessibility audits and fixes for clients and give talks and workshops about accessibility to lovely folks like yourselves across the US.

---

# [fit] What is accessibility?

---

## The design of products, devices, services, or environments for people who experience disabilities.

^ It's the practice of removing barriers that might prevent people with disabilities from accessing something.

---

![](1977.jpg)

#[fit] Accessibility is about inclusion.

^ Making our technology inclusive and accessible to everyone who uses it. People with different limitations and needs, and people with disabilities.

---

![](use-tech.jpg)

# People with disabilities are using the technology you create.

^ People with a wide variety of disabilities (visual, hearing, motor, cognitive) use a wide variety of assistive technology (screen readers, tactile keyboards, speech recognition, eye gaze systems) to use the web.

---

![](flag.jpg)

# [fit] 1 in 5 Americans
# have a disability

^ as of 2010, according to the US Census Bureau, 1 in 5 Americans have a disability that significantly impacts their day-to-day function

---

#[fit] Accessibile design helps everyone!

^ each of the major categories requires certain types of adaptations in the design of web content. most of the time, these adaptations benefit nearly everyone, not just people with disabilities. Similar to curb cuts.

---

# Why would we make something accessible?

^ There are several reasons, which are all valid. They're just more or less altruistic than one another.

---

# To improve the lives of people with disabilities

^ we have an ethical duty to help all people who will use what we make

---

# We are responsible for what we create.

^ regardless of what you make, if you make something for any other human being to interact with, you are responsible for making sure those other humans can use it

---

![](rehab.jpg)

# It's the law.
^ Laws have been created in the US and across the world as a result of the Disability Rights Movement. The enforcement mechanism for the laws in the United States is usually lawsuits. The threat of a lawsuit can cause a business to fix accessibility problems, or the terms of a settlement can require a business to improve their accessibility.

---

# Lawsuits
```
            Scribd              Five Guys
            Dick Blick          Peapod
            H&R Block           eBay
            Hilton              Carnival Cruise Lines
            Ace Hardware        GrubHub

```

^ examples from the last 10 years of companies that were successfully sued for being inaccessible to screen readers. In each of these, the arguments mentioned the plaintiff not being able to successfully complete a purchase.

---

> "Plaintiff found the gift card page confusing and was unable to purchase products from the website because the checkout feature did not work properly."

-- Sean Gorecki vs Hobby Lobby Stores, Inc. (2017)

^ lawsuit of a screen reader user against hobby lobby

---

> "For over 20 years, the DOJ has consistently maintained that the ADA applies to private websites that meet the definition of a public accommodation. ... Hobby Lobby had more than sufficient notice ... to determine that its website must comply with the ADA."

-- Judge John F. Walter, U.S. District Judge

---

# To capitalize on a wider audience or consumer base.

^ 1 in 5 americans have a disability. no sensible person could make an ethical or economical argument for potentially excluding 20% of their audience. you wouldn't design a website to not work on 20% of browsers used by your audience, would you?

---

![](money.jpg)

# [fit] $175 billion
## in discretionary income

^ People with disabilities in the US control about 175 billion dollars in discretionary income

---

![](money.jpg)
#[fit] Take my money!

---

# So how do we build things accessibly and inclusively?

---

# Listen to people with disabilities.

^ involve people with disabilities in the creation of it! listen to the voices of people with disabilities about what they need.

---

# Follow best practices.

^ Also, use laws and guidelines to help you evaluate what you're creating. There are lots of resources you can use, and you should pick the one best suited to the technology you're creating.

---

# How can we make sure payment forms are accessible?

^ Generally we'll be focusing on what makes forms accessible for people who use keyboards and screen readers, and people with cognitive disabilities. People with other types of disabilities are generally less affected by faulty forms.

---

![](screen-reader.jpg)
# Screen Readers

---

# Forms should be easy to use.

---

# Ensure forms are keyboard accessible.

^ By default, standard HTML5 is keyboard accessible, but we have a tendency to use technologies that break this accessibility, like Javascript. Field focus states should also be visible.

---

# Clear instructions are necessary.

---

# Associate labels with form components.

^ Labels should both be visually adjacent as well as sematnically associated.

---

# Use `fieldset` and `legend` for groups of form components.
^ For example, for a group of shipping option radio buttons. Fieldset describes entire grouping and the legend describes the descriptive text.

---

# Basic text input

```html
<label for="first-name">First Name</label>
<input id="first-name" type="text">

```

---


# What if we don't want to see the label?

^ Much of the time, visual labels are important for sighted users. However, other times a visual text label (or an additional one) would be overkill and negatively impact site design and comprehension.

---

# If necessary, use CSS to visually hide an item.

```css
.hidden {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
}
```

^ If you do this, don't set visibility to hidden or display to none, this removes it from the flow of the page. Same with height or width of 0 pixels.

---

# What if I have help text that's not quite a label?

^ Sometimes a form includes information that's not exactly a label, but it's important for the understanding of the form, and therefore important for a screen reader to read. 

---

```html
<label for="cvv">CVV</label>
<input type="number" id="cvv">
<span>For Visa, Mastercard, and Discover etc</span>
```

---

# ARIA to the rescue!

^ Accessible Rich Internet Applications is a W3C protocol for enhancing and supporting accessibility of scripted and dynamic content. Also used to address content items that can't be made accessible with HTML alone.

---

#aria-describedby

```html
<label for="cvv">CVV</label>
<input type="number" id="cvv" aria-describedby="cvv-help">
<span id="cvv-help">For Visa, Mastercard, and Discover etc</span>
```

^ aria-describedby attribute points to the id of the element that contains the CVV help text. A screen reader would read both the associated label and then the associated description.

---

# And so much more...
- understandable placeholder text
- cart timers and valid business exceptions
- clear error messages
- avoiding Javascript for form functionality
- submit buttons as inputs, not links
- using breadcrumbs to show progress
- adequate target areas

---


![](injustice.jpg)

# [fit] You can do it!

^ Yes, accessibility can be tricky. There are lots of guidelines to understand, and it can be time-consuming to implement. But, it's a solvable problem. There are tons of resources out there, and compared to other problems in code, it's not terribly difficult.

---

# [fit] Accessible payment forms are doable!

---

![](money.jpg)

# Why Won't You 
# Take My Money?


## Stephanie Slattery
## @sublimemarch

^ additional reading: https://wave.webaim.org/cognitive
