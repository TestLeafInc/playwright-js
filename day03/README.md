Week 02_Day 01: Get started with Playwright  

Recap and Promise
Playwright Architecture
Launch Browser (Headless/Headed) - Chrome, Firefox
Practice Session 1 & Break
Locators (id, name, css) & Basic Actions
Practice Session 2 & Break
Fixture & Assertions
Practice Session 3 & Break
Wrap & Assignments

Playwright Key Concepts
    # Browser
    # Browser Context
    # Page
    # DOM
    # WebElement

In Playwright, the concepts of "browser," "browser context," and "page" are fundamental to 
understanding how Playwright manages and interacts with web browsers during automation. 

### 1. Browser:
    # Definition:
     - A "browser" refers to the web browser instance that is launched by Playwright. 
      This can be Chromium, Firefox, or WebKit, and each browser instance operates independently.

    # Key Characteristics:
     - A browser instance is capable of opening multiple browser contexts and pages.
     - It encapsulates the entire browser process and manages resources such as cookies, 
      local storage, and caches.

    # Example:
     const browser = await chromium.launch();
     

### 2. Browser Context:
    # Definition:
     - A "browser context" is an isolated environment within a browser instance. 
     It represents a set of browser pages, cookies, and storage that are shared among those pages.

    # Key Characteristics:
     - Multiple browser contexts can exist within a single browser instance, and each context 
     operates independently.
     - Browser contexts are useful for scenarios where you want isolated sessions, such as for 
     testing authentication or maintaining separate user sessions.

    # Example:
     const context = await browser.newContext();
     const page = await context.newPage();
     

### 3. Page:
    # Definition:
     - A "page" in Playwright represents a single tab or window within a browser context. 
     It is where the actual web content is loaded and where interactions with the web page take place.

    # Key Characteristics:
     - Multiple pages can exist within a single browser context, each representing a different tab or 
     window.
     - Actions such as navigation, clicking, typing, and extracting information from the page are 
     performed on the page object.

    # Example:
     const page = await context.newPage();
     await page.goto('http://leaftaps.com/opentaps/control/login');
     

### Key Takeaway:

- A single "browser" instance can contain multiple "browser contexts."
- Each "browser context" can contain multiple "pages."
- Actions and interactions with the web content occur on the "page" level.

### Summary:

- Browser: The entire web browser instance (Chromium, Firefox, or WebKit).
- Browser Context: An isolated environment within a browser instance, useful for managing 
  multiple sessions.
- Page: A single tab or window within a browser context, where interactions with the web content 
  take place.

Write your first code!

import {chromium,test} from "@playwright/test"
Import:
### What it is:
import brings in functionalities from other files or modules to use in your current file.
    # Example:
      In Playwright, you import modules like chromium, firefox, or webkit to use their functionalities 
      for browser automation.

test("title 1",async()=>{
    //Open a brower instance
    const browserInstance = await chromium.launch({headless:false,channel:"chrome"})
    //Get a browser context from the browser instance
    const browserContext = await browserInstance.newContext()
    //Get a new page from the browserContext
    const page = await  browserContext.newPage()

    //Open url
    await page.goto("https://www.google.com") 

    //Wait for 10 seconds 
    await page.waitForTimeout(10000) //timeout in milli seconds

    //Print the url
    const currentUrl = page.url()
    console.log(The loaded url is ${currentUrl})
})
Export:
### What it is:
 You make certain functionalities in your file vailable for other files to use.

    # Example:
      If you create a set of functions for common browser tasks, you can export them for others 
      to use in different files.

Day_03
# Classroom - 1    Time: 15 min

1. Create a new browser instance
2. Create a browser context
3. Create a new page
4. Load the url https://login.salesforce.com/
5. Wait for 10 seconds


Understanding DOM

Webpage Development:

### 1. HTML (Hypertext Markup Language):
    # What is it?**
     - Think of HTML as the skeleton or structure of a web page. 
       It's like the blueprint that defines the different parts of the page.

    # Example:     
     <!DOCTYPE html>
     <html>
     <head>
       <title>My Web Page</title>
     </head>
     <body>
       <h1>Welcome to My Web Page</h1>
       <p>This is a simple web page built with HTML.</p>
     </body>
     </html>
   

### 2. CSS (Cascading Style Sheets):
    # What is it?
     - CSS adds colors, styles, and layouts to make the page visually appealing.

    # Example:    
     body {
       background-color: #f0f0f0;
       font-family: 'Arial', sans-serif;
     }

     h1 {
       color: blue;
     }

     p {
       color: green;
     }

### 3. JavaScript:
    # What is it?
     - JavaScript adds interactivity to the web page and dynamic behavior.

    # Example:
     function greetUser() {
       var userName = prompt('What is your name?');
       alert('Hello, ' + userName + '! Welcome to the web page.');
     }

What is a DOM?
### DOM (Document Object Model):

    # Definition:
      - The DOM, or Document Object Model, is a programming interface for web documents. 
        It represents the structure of a document as a tree of objects, where each object 
        corresponds to a part of the document, such as elements, attributes, and text.



### How to Open the DOM:

      # Developer Tools in Web Browsers:
        - Open the browser's developer tools (usually by right-clicking on a web page and 
          selecting "Inspect" or using keyboard shortcuts like Ctrl+Shift+I or Cmd+Option+I), 
          and navigate to the "Elements" tab. This tab displays the live DOM of the current web page.


### Let's understand about web element
      - A "web element" refers to an individual component or part of a web page that can be identified
        and interacted with using HTML and web technologies. 
      - Web elements are the building blocks of a web page and include various types, such as text, 
        buttons, images, forms, links, and more. 
      - Each element on a web page is represented by HTML tags and attributes, and they form the 
        structure and content of the page.

Here are some common types of web elements:

1. Text Elements:
   - Represented by HTML tags like <p>, <h1> to <h6>, <span>, etc. 
     These elements display text content on the web page.

   <p>This is a paragraph.</p>
   <h1>This is a heading level 1.</h1>
  

2. Form Elements:
   - Include input fields, buttons, checkboxes, radio buttons, and other elements used in 
     HTML forms for user input.

   <input type="text" placeholder="Enter your name">
   <button type="submit">Submit</button>

3. Links:
   - Represented by the <a> (anchor) tag, links allow navigation between different pages or 
   resources on the web.

   <a href="https://google.com">Google-Home</a>

4. Images:
   - Displayed using the <img> tag, images are visual elements embedded in a web page.
   <img src="image.jpg" alt="Description of the image">   

5. Buttons:
   - Can be created using the <button> tag and are often used to trigger actions on a web page.

   <button onclick="alert('Hello!')">Click me</button>

6. Lists:
   - Ordered and unordered lists represented by <ol> and <ul> tags, respectively, 
     containing list items <li>.
   <ul>
     <li>Item 1</li>
     <li>Item 2</li>
   </ul>
 
Selector Strategies:

      When performing web automation or testing, selecting and interacting with web elements is a crucial 
      aspect. 
      Different strategies, often referred to as "selector strategies" or "locators," are used to 
      locate web elements on a web page. 
      The choice of strategy depends on factors such as the structure of the HTML, the attributes 
      of the elements, and the specific requirements of the automation task. 
 
 Here are some common selector strategies:

1. ID Selector
   - Syntax: #elementId
   - Example: page.locator('#username')
   - Description: Selects an element by its unique id attribute.

2. Class Selector
   - Syntax: .className
   - Example: page.locator('.btn-primary')
   - Description: Selects elements by their class name.

3. Tag Name Selector
   - Syntax: tagName
   - Example: page.locator('input')
   - Description: Selects elements by their HTML tag name.

4. Attribute Selector
   - Syntax: [attribute=value]
   - Example: page.locator('[name="username"]')
   - Description: Selects elements by matching a specific attribute and its value.

5. Attribute with Contains Selector
   - Syntax: [attribute*="value"]
   - Example: page.locator('[class*="button"]')
   - Description: Selects elements where the specified attribute contains the specified value.

6. Child/Descendant Selector
   - Syntax: parentElement childElement or ancestorElement descendantElement
   - Example: page.locator('ul li')
   - Description: Selects elements that are children or descendants of a specified parent or ancestor.

7. Sibling Selector
   - Syntax: element + adjacentElement or element ~ siblingElement
   - Example: page.locator('h2 + p')
   - Description: Selects elements that are siblings of a specified element.

8. First Child Selector
   - Syntax: :first-child
   - Example: page.locator('ul li:first-child')
   - Description: Selects the first child element of a parent.

9. Last Child Selector
   - Syntax: :last-child
   - Example: page.locator('ul li:last-child')
   - Description: Selects the last child element of a parent.

10. Nth Child Selector
    - Syntax: :nth-child(n)
    - Example: page.locator('ul li:nth-child(2)')
    - Description: Selects the nth child element of a parent.

# Classroom - 2       Time: 15 min

1. Launch a browser
2. Load the URL https://login.salesforce.com/
3. Enter the username as <username>
4. Enter the password as <passwprd>
5. Click the Log In button
6. Get the title of the page
7. Close the browser

