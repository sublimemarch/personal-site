build-lists: false
footer: @sublimemarch

# [fit] Accessibility
# [fit] It's More Than Just Screen Readers

---

## Stephanie Slattery
## @sublimemarch

^ My name is Stephanie Slattery. I'm a Front End Engineer and Accessibility Specialist at Clique Studios Chicago. I'm also a co-organizer of the Chicago Digital Accessibility and Inclusive Design meetup. I've led accessibility audits and fixes for clients and give talks and workshops about accessibility to lovely folks like yourselves across the US.

---

#https://tinyurl.com/y9yhs3x9

---

# [fit] What is accessibility?

---

## The design of products, devices, services, or environments for people who experience disabilities.


---
## It's the practice of removing barriers that might prevent people with disabilities from accessing something.


---

![](1977.jpg)

# Accessibility is about inclusion.

^ Making our technology inclusive and accessible to everyone who uses it. People with different limitations and needs, and people with disabilities.

---

![](bus.jpg)

# Technology is exists to make our lives easier, not harder.

^ Technology shouldn't be a barrier to people. it should make their lives even easier.

---


# Let's talk about disability.

^ I find that the best way to help people understand accessibility is to touch on disability.

---

# Disability can be the result of disease, trauma, or genetics.

---

# Disability can be permanent, chronic, or temporary.

---

# [fit] Categories of Disability
- 

^ These  general categories of disabilities we need to think about when designing for the web
^ Not an exhaustive list, think of this as a starting point for understanding

---

![](low-vision.jpg)

# [fit] Categories of Disability
- visual

^ Complete or partial blindness, low-vision, color-blindness

---

![](deaf.jpg)

# [fit] Categories of Disability
- visual
- hearing

^ deafness, hard-of-hearing, hyperacusis (sensitivity to certain frequency and volume ranges of sound)

---

![](motor.jpg)

# [fit] Categories of Disability
- visual
- hearing
- motor

^ paralysis, cerebral palsy, carpal tunnel syndrome, repetitive strain injury, dyspraxia (affects planning of movements coordination): cause inability to use a mouse, slow response time, limited fine motor control

---

![](cognitive.jpg)

# [fit] Categories of Disability
- visual
- hearing
- motor
- cognitive

^ 4th and final: conditions that alter cognition (head injury, autism, developmental disabilities) and learning disabilities (dyslexia, dyscalculia, ADHD), distractibility, inability to remember or focus on large amounts of information

---

# People with disabilities are using the technology you create.

^ all of these people use technology! they use the internet! whenever i give a talk like this there's always someone surprised that people who are paralyzed from the neck down use their website. that people who are blind use their website.

---

[.build-lists: true]

# Assistive Technology
- screen readers
- magnifiers (hardware and software)
- large print and tactile keyboards
- eye gaze and head mouse systems
- speech recognition

^ ideally, software should use a generic input API that permits use of any specialized device

---

![](sip-and-puff.jpg)

^ used to send signals to a device using air pressure by "sipping" (inhaling) or "puffing" (exhaling) on a straw or tube. primarily used by people who don't have use of their hands.

---

![](dyslexie.jpg)

^ designed for people with dyslexia to reading easier. every letter is uniquely shaped, eliminating common reading errors with dyslexia like wrapping, mirroring, changing, turning, and melting letters.


---

![](braille.jpg)

^ refreshable braille display. blind users can use it to read text output. sometimes used instead of or with a screen reader. also used by deafblind users.

---

![](flag.jpg)

# [fit] 1 in 5 Americans
# have a disability

^ as of 2010, according to the US Census Bureau, 1 in 5 Americans have a disability that significantly impacts their day-to-day function

---

# [fit] 56.7 million people

^ That's 56.7 million people in the US alone!
^ According to the World Health Organization in 2011, about 15% of the world's population has a significant disability. That's about 785 million people

---

# [fit] 1 in 10 Americans
## have a disability that impacts computer use

---


# Accessibile design helps everyone!

^ each of the major categories requires certain types of adaptations in the design of web content. most of the time, these adaptations benefit nearly everyone, not just people with disabilities.


---

![](curb-cute.jpg)

^ (talk about curb cuts)

---

![](captions.png)

^ captions are needed for deaf users, and can be helpful to people who view a video without audio (maybe in an office without headphones)


---

# Ability is temporary.

^ Disease, injury, and age can all cause us to gain a disability.

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

^ Laws have been created in the US and across the world as a result of the Disability Rights Movement. The enforcement mechanism for the laws in the United States is usually lawsuits. The threat of a lawsuit can cause a business to fix accessibility problems, or the terms of a settlement can require a business to improve their accessibility.


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

^ many international laws

---

# Lawsuits
- MIT and Harvard - no captions
- Scribd - inaccessible to screen readers
- Netflix - no captions
- H&R Block - inaccessible site and app
- Reebok - inaccessible to screen readers

---

# How do I know if what I'm making is accessible?


---

![](listen.jpg)

# Listen to people with disabilities.

^ involve people with disabilities in the creation of it! listen to the voices of people with disabilities about what they need.

---

# Follow best practices.

^ Also, use laws and guidelines to help you evaluate what you're creating. There are lots of resources you can use, and you should pick the one best suited to the technology you're creating. First, I'll discuss the one that web developers use. It's an excellent framework for understanding accessibility regardless of what you're writing code for.

---

# Web Content Accessibility Guidelines 2.0


^ The WCAG was created by the Worldwide Web Consortium (W3C), the governing body of the web, and its current iteration was published in December of 2008. (Current working draft of 2.1 was released last month, seeking public comment.) These guidelines are the basis of most web accessibility laws around the world, with some countries even formally including them in their laws.

---

#Conformance Levels
- A - minimum, not quite enough

^ The WCAG contains four principles that encompass its many guidelines for web accessibility, each containing several guidelines. There are three different conformance levels within the WCAG, and I encourage you to discuss which is best for you with a legal team who specializes in accessibility.

---

#Conformance Levels
- A - minimum, not quite enough
- AA - addresses most common issues

---

#Conformance Levels
- A - minimum, not quite enough
- AA - addresses most common issues
- AAA - highest level, but not always possible

---

# Four Principles of the WCAG

---

# 1. Perceivable
- 

^ available to the senses either through browser or other assistive technologies (screen readers, screen enlargers, etc). The information content and user interface components of the website must be presentable to users in ways they can perceive.

---

# 1. Perceivable
- text alternatives

---

# 1. Perceivable
- text alternatives
- captions

---

# 1. Perceivable
- text alternatives
- captions
- doesn't rely on sensory characteristics

---

# 1. Perceivable
- text alternatives
- captions
- doesn't rely on sensory characteristics
- doesn't rely on color

---

# 1. Perceivable
- text alternatives
- captions
- doesn't rely on sensory characteristics
- doesn't rely on color
- can control audio

---


# 2. Operable
- 

^ Users can interact with all controls and interactive elements using either the mouse, keyboard, or an assistive device.


---
# 2. Operable

- can navigate with keyboard


---
# 2. Operable

- can navigate with keyboard
- can pause/stop video


---
# 2. Operable

- can navigate with keyboard
- can pause/stop video
- prevent seizures


---
# 2. Operable

- can navigate with keyboard
- can pause/stop video
- prevent seizures
- skip links

---

# 2. Operable

- can navigate with keyboard
- can pause/stop video
- prevent seizures
- skip links
- visible focus

---

# 3. Understandable
- 

^ Content is clear and limits confusion and ambiguity.

---

# 3. Understandable
- languages labeled


---
# 3. Understandable
- languages labeled
- no unpredictable changes on focus/input


---

# 3. Understandable
- languages labeled
- no unpredictable changes on focus/input
- consistent navigation

---

# 3. Understandable
- languages labeled
- no unpredictable changes on focus/input
- consistent navigation
- errors identified

---

# 3. Understandable
- languages labeled
- no unpredictable changes on focus/input
- consistent navigation
- errors identified
- labels and instructions

---

# 4. Robust
- 

^ A wide range of technologies (browsers, assistive tech, operating systems, etc both old and new) can access the content. This includes guidelines about having consistently parsable HTML and clear names, roles, and values in your code.

---

# 4. Robust
- complete and correct markup

---

# 4. Robust
- complete and correct markup
- UI elements can be programatically determined


---

# Open Accessibility Framework (OAF)

^ The Open Accessibility Framework (OAF) provides an outline of the steps that must be in place in order for any computing platform (desktop OSes, web applications, and mobile platforms) to be considered accessible. These steps are analogous to those necessary to make a physical or built environment accessible. The OAF divides the required steps into two categories: creation and use.

---

# Creation

^ creation steps define the precursors and building blocks required for technology devs to create accessible applications and products. This includes defining what "accessibility" means for the intended use of the platform, determining stock UI elements and components, and providing authoring tools that support accessibility.


---

# Use

^ use steps describe what is necessary in the computing environment in which these accessible applications will run. This includes providing platform supports, providing accessible application software, and providing assistive technologies.

---

# But it's more than just the guidelines...

^ You can meet every guideline but still have an inaccessible product.

---

![](tools.jpg)

# Guidelines are tools, not solutions.

^ Guidelines should be used as tools. They might help us determine that a page is inaccessible, but they can't tell us for certain if our page is accessible.

---

# Listen to people with disabilities.

^ Again, it's important to listen to people with disabilities to determine if your technology is truly accessible.

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

^ Yes, accessibility can be tricky. There are lots of guidelines to understand, and it can be time-consuming to implement. But, it's a solvable problem. There are tons of resources out there, and compared to other problems in code, it's not terribly difficult.

---


# We're all responsible for improving the lives of people who use our technology.

---


# [fit] Accessibility
# [fit] It's More Than Just Screen Readers

---

## Stephanie Slattery
## @sublimemarch
