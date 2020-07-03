# Assignment 1: Personal Profile Page

## Due Date: Feb 10, 10:00pm

You will practise building an HTML web page with CSS for layout and style, and Javascript to make it dynamic, by building a profile page - either for yourself, or for a fictional character. All components of the page should be responsive. Changes made to the page during user interactions are non-persistent; refreshing the page will reset all changes.

Read these specifications carefully, particularly **Code Specifications** at the end. **Assignments that do not adhere to code specifications may receive a grade of 0 for functional correctness**.

---

### Part 1: Navigation 

Implement a responsive navigation bar, as seen in Lab 3. That is, navigation links should be in a single row for larger screens, and stacked and collapsed for smaller screens (see advanced section of Lab 3). 

There should be a 'logo' section with the name of your profile. The navigation links should be anchor links to the other sections of the page
 - one link to the profile information in part 2 
 - one link to the feed section in part 3
 
---

### Part 2: Profile information

The next section on the page should contain profile information. This could be information about yourself or the character whose profile you are creating. 

The main content portion of the page should have this information:
 
 - Name
 - Cover photo
 - Profile Photo
 - Location
 - List of hobbies/interests
 - Blurb / bio

And should contain a section for external / contact links:
 - The GitHub account you are using for this course
 - link to email you
 - 2 other links of your choosing 
 
Reminder: All components are to be responsive.

---

### Part 3: Profile Feed

Implement a status feed for your profile. This is similar to Twitter or Facebook statuses. This component should also be responsive. **Remember that all data is non-persistent**; this is a front-end only assignment. Any input by the user will be lost upon page refresh.

#### Interaction 1: Posting

There are two types of posts that can be made: text posts or photo posts. Each post should contain the timestamp of when the post was made, as well as the profile's name and photo. 

**Text post**: There is a text box into which you can enter text, and a button which 'posts' this text onto your profile feed. 

**Photo post**: There is a text box into which a URL to a photo can be entered, and a button which 'posts' this photo onto your profile feed. No need to worry about file type checking or anything to make sure that the input is indeed a URL for a photo.  

#### Interaction 2: Liking

Each post should keep a simple counter of the number of 'likes'. There is to be a button within each post and pressing the button will increment the number of 'likes' on the post by 1. The counter starts at 0. The button can be pressed as many times as you'd like. 

---

## Details
A solution that fully satisfies the above specifications in a simple way with minimal design work will receive approximately 70%.
Style the layout and components such that they are visually appealing. A well-designed page that meets specifications will receive up to 85%.
Once you have a well-designed page that meets specifications, showcase your skills and creativity with additional features.
Extra features you may want to consider: 
 - having multiple profile photos 
 - smooth scrolling for the anchor links in the nav bar
 - transitions or animations for interactions
 - additional profile information
 - checking the URL to make sure that it is a photo type

---

## What to submit:
- `profile.html`
- `profile.css`
- `profile.js`
- any other appropriately named CSS or JS files used in your assignment

The README.md file will contain any information you would like to pass onto the grader regarding design decisions and additional features.  It is also the place to indicate if you were able to partially complete one or more of the questions.  This should not be a long document and will not be graded.

Your assignment should be able to load in the latest version of Chrome and Firefox. Your code should be clean and concise and easily readable. 

Reminder: It is an academic offence to submit work that is not your own without attribution.  If you find a function or snippets of code that help you implement your assignment, you must cite where you got the code from.

---

## Rough Marking Scheme

 - Functional correctness - 60%
 - Code style: modular, readable, documented - 15%
 - Web page style - 10%
 - Polish and extra feature(s) - 15%
 
Clean, polished code will receive a higher mark than mostly working fancy features.  
All JS should be in your .js file and all CSS should be in your .css file. Do not inline CSS or JS.
HTML elements should be **semantic** - using `<nav>`, `<aside`>, `<article>`, etc., instead of using `<div>` all the time

---

## Code Specification
**Your code will be partially autograded**

To facilitate autograding, you **must** include the following **classes** as test hooks. Assignments that do not implement these test hooks may receive a grade of 0 on functional correctness.

#### Part 1:
 - `test--nav` on the navigation bar

#### Part 2:
 - `test--profile_name` - on the name of the user
 - `test--profile_cover-photo` - on the cover photo of the user
 - `test--profile_photo` - on the profile photo of the user
 - `test--profile_location` - on the location of the user
 - `test--profile_hobbies` - on the hobbies of the user
 - `test--profile_links` - on the user's external links
 - `test--profile_bio` - on the user's bio

#### Part 3:
 - `test--post` - the wrapper on each new post made
 - `test--post_content` - the content in each new post (given from the input box)
 - `test--input_text` - the input box into which text updates are entered 
 - `test--input_button` - the button by which text updates are posted
 - `test--photo_url` - the input box into which photo URL posts are entered
 - `test--photo_button` - the button by which photo updates are posted
 - `test--like_button` - the 'like' button in each post
 - `test--like_count` - the 'like' count of each post
 
A basic example of a test that may be run on your page has been included - see `simple_test.py`
A basic example that passes simple_test.py has also been included - see the example `profile.html`
 
To run simple_test.py as an example, make sure you have installed:
 - [Selenium](https://pypi.python.org/pypi/selenium) 
 - [Chrome Driver for Selenium](https://sites.google.com/a/chromium.org/chromedriver/downloads)
 
```
python simple_test.py
```

**Do not use these test hooks as your javascript or CSS hooks.**
You should use other classes for styling or js functionality.
 
Your code will also be validated using HTML5 validator and CSS Jigsaw validator.
Run your code through these yourself before submitting:
- [HTML validator](https://validator.w3.org/)
- [CSS validator](https://jigsaw.w3.org/css-validator/)
 
---

## Checklist Before Submitting
- Run code through HTML & CSS Validators
- All test class hooks are included
- All components are responsive
- Files are named according to the `What to submit` section
 
---

## How to Submit
- Submit a pull request to your A1 repo.


