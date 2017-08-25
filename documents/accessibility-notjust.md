build-lists: false
footer: @sublimemarch

# [fit] Accessibility
# [fit] It's Not Just a Client Side Problem

^ My name is Stephanie Slattery and I'm a front end engineer at Clique Studios in Chicago. I specialize in accessibility. I've led accessibility audits and fixes for clients and give talks and workshops about accessibility to lovely folks like yourselves across the US.

---

## Stephanie Slattery
## @sublimemarch

^ let me know if i'm speaking too quickly, too quietly, you can't read a slide, i'm not making any sense, etc
^ slides are up on my website right now, i tweeted out the link before i came up here. :D

---

# [fit] What is accessibility?

---

## The design of products, devices, services, or environments for people who experience disabilities.

^ It's the practice of removing barriers that might prevent people with disabilities from accessing the above.

^ technology shouldn't be a barrier to people. it should make their lives even easier.

---

# Let's talk about disability.

^ to understand accessibility, we need to understand disability.  general categories of disabilities we need to think about when designing for the web
^ not an exhaustive list, think of this as a starting point for understanding
^ Can be acquired from disease, trauma, or maybe congenital

---

# [fit] Categories of Disability
- visual

^ complete or partial blindness, low-vision, color-blindness

---

# [fit] Categories of Disability
- visual
- hearing

^ deafness, hard-of-hearing, hyperacusis (sensitivity to certain frequency and volume ranges of sound)

---

# [fit] Categories of Disability
- visual
- hearing
- motor

^ paralysis, cerebral palsy, dyspraxia (affects planning of movements coordination), carpal tunnel syndrome, repetitive strain injury: cause inability to use a mouse, slow response time, limited fine motor control

---

# [fit] Categories of Disability
- visual
- hearing
- motor
- cognitive

^ cognitive impairments (head injury, autism, developmental disabilities) and learning disabilities (dyslexia, dyscalculia, ADHD), distractibility, inability to remember or focus on large amounts of information

---

# And all of these people use technology!

^ all of these people use technology! they use the internet! whenever i give a talk like this there's always someone surprised that people who are paralyzed from the neck down use their website. that people who are blind use their website.

---

[.build-lists: true]

# Assistive Technology
- screen readers
- magnifiers (hardware and software)
- large print and tactile keyboards
- sip and puff devices
- eye gaze and head mouse systems
- speech recognition
- closed captions

^ ideally, software should use a generic input API that permits use of any specialized device

---

![](sip-and-puff.jpg)

---

![](head-switch.jpeg)

---

# [fit] 1 in 5 Americans
# have a disability

^ as of 2010, according to the US Census Bureau
^ 1 in 10 people have a disability that directly impacts computer use

---

# [fit] 56.7 million people

---

# [fit] 1 in 10 Americans
## have a disability that impacts computer use

---


# Accessibility helps everyone!

^ each of the major categories requires certain types of adaptations in the design of web content. most of the time, these adaptations benefit nearly everyone, not just people with disabilities.


---

![](curb-cute.jpg)

^ (talk about curb cuts)

---

![](captions.png)

^ captions are needed for deaf users, and can be helpful to people who view a video without audio (maybe in an office without headphones)

---

# Why would we make something accessible?

---

# To improve the lives of people with disabilities

^ we have an ethical duty to help all people who will use what we make

---

# We are responsible for what we create.

^ regardless of what you make, if you make something for any other human being to interact with, you are responsible for making sure those other humans can use it

---

# To capitalize on a wider audience or consumer base

^ 1 in 5 americans have a disability. no sensible person could make an ethical or economical argument for potentially excluding 20% of their audience. you wouldn't design a website to not work on 20% of browsers used by your audience, would you?

---

![](money.jpg)

# [fit] $175 billion
## in discretionary income

^ People with disabilities in the US control about 175 billion dollars in discretionary income

---

# It's the law.

^ to avoid lawsuits or bad press

^ what? laws?! talk about these laws coming into existence because of the disability rights movement


---

![](rehab.jpg)

# [fit] Rehabilitation Act of 1973

^ Rehabilitation Act of 1973
^ This law prohibits discrimination on the basis of disability in programs run by federal agencies, programs that receive financial assistance from the federal government, in federal employment, and in the employment practices of federal contractors. In 1998, Congress amended this act with Section 508 to require federal agencies to provide accessible electronic resources and information technology to people with disabilities. Currently, this doesn’t require private websites that don’t receive government funding to be accessible, although the law is evolving as cases go on.


---

![](ada.jpg)

# [fit] Americans with Disabilities Act
## (1990)

^ Americans with Disabilities Act
^ This US labor law prohibits discrimination on the basis of disability and created accessibility requirements for public services and accommodations. The ADA doesn’t directly mention the web, but works to ensure that people with disabilities have equal opportunities. The Department of Justice is currently developing regulations to address web accessibility, although several notable cases regarding the ADA have made it clear that the ADA’s authority pertains to websites, even business that are web-only.

^ notable cases: lawsuits against Netflix, Southwest Airlines, and so much more

^ many international laws

---

# How do I know if what I'm making is accessible?


---

# Listen to people with disabilities.

^ involve people with disabilities in the creation of it! listen to the voices of people with disabilities about what they need.

---

# Follow best practices.

^ also, use laws and guidelines to help you evaluate what you're creating. there are lots of resources you can use, but i'll discuss the one that web developers use. it's an excellent framework for understanding accessibility regardless of what you're writing code for.

---

# Web Content Accessibility Guidelines 2.0


^ The WCAG was created by the Worldwide Web Consortium (W3C), the governing body of the web, and its current iteration was published in December of 2008. These guidelines are the basis of most web accessibility laws around the world, with some countries even formally including them in their laws.

^ The WCAG contains four principles that encompass its many guidelines for web accessibility, each containing several guidelines.

---

# Four Principles of the WCAG

---

# 1. Perceivable

^ available to the senses either through browser or other assistive technologies (screen readers, screen enlargers, etc). The information content and user interface components of the website must be presentable to users in ways they can perceive.

---

# 2. Operable

^ users can interact with all controls and interactive elements using either the mouse, keyboard, or an assistive device

---

# 3. Understandable

^ content is clear and limits confusion and ambiguity

---

# 4. Robust

^ a wide range of technologies (browsers, assistive tech, operating systems, etc both old and new) can access the content

---

# Open Accessibility Framework (OAF)

^ The Open Accessibility Framework (OAF) provides an outline of the steps that must be in place in order for any computing platform to be considered accessible. These steps are analogous to those necessary to make a physical or built environment accessible. The OAF divides the required steps into two categories: creation and use.

---

# Creation & Use

^ creation steps define the precursors and building blocks required for technology devs to create accessible applications and products. THis includes defining what "accessibility" means for the intended use of the platform, determining stock UI elements and components, and providing authoring tools that support accessibility.

^ use steps describe what is necessary in the computing environment in which these accessible applications will run. This includes providing platform supports, providing accessible application software, and providing assistive technologies.


---

# But it's more than just the guidelines...

^ You can meet every guideline but still have an inaccessible product. Guidelines should be used as tools. They might help us determine that a page is inaccessible, but they can't tell us for certain if our page is accessible.

---

![](tools.jpg)

# Guidelines are tools, not solutions.

---

# Listen to people with disabilities.


---

# How can you advocate for accessibility?

^ help you better advocate for people with disabilities in your work, whatever that might be

---

# Collect baseline information.

^ gather baseline information - are you accessible right now? do an audit or hire someone to do it. use an accessibility validator tool - be careful! they can only get about 40-60% of issues!

---

# Gather support.

^ gather support at your organization - identify stakeholders and convince them of business value. cheaper to do this now and be proactively accessible.

---

# Define a standard.

^ define an internal standard and train people on it.

---

# Monitor conformance.


---

# If not you, then who?

^ If I've convinced you that accessibility is important, but you're still on the fence, I need you to think: if I don't do this, then who will? Now, maybe you've got a whole internal team jointly organized with QA, UX, and FEDs. Then hurray! Ask them how you can help. But if you have anything short of that, then you can do better. Start an initiative within your organization or join a small one and make it bigger.

---

![](injustice.jpg)

# [fit] You can do it!

---


# We're all responsible for improving the lives of people who use our technology.

---

## Stephanie Slattery
## @sublimemarch
