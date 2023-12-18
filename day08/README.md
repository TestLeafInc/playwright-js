Day 8 [Sunday]
[Agenda]

# Recap
# Window
# [Practice]
# Shadow DOM
# [Practice] 
# File Upload & Download 
# Wrap

>> Shadow DOM in Playwright

# Shadow DOM

1. Definition: The Shadow DOM is a web standard that enables encapsulation in web components. It allows for the creation of isolated DOM trees within an element. This means that the internal structure, styling, and behavior of these components are hidden and separate from the main document DOM.

# Shadow Root

1. Definition: The Shadow Root is the root node of the Shadow DOM. It's the top-level element of the encapsulated DOM inside the shadow DOM.

 The Shadow Root acts as the gateway to the Shadow DOM. When a shadow DOM is attached to an element, this attachment point is the shadow root. It's through the shadow root that you interact with and manipulate the shadow DOM.

>> Practical Implications

- Encapsulation: Shadow DOM allows for strong encapsulation of functionality. Styles and scripts inside a shadow DOM do not leak out, and styles and scripts outside do not leak in.
- Reusability: By using shadow DOM in web components, developers can create highly reusable and customizable elements that can be easily shared and used in different projects.

>> The Shadow DOM provides a way to encapsulate and isolate a piece of the DOM, useful in creating reusable components, while the Shadow Root is the entry point to this encapsulated DOM.

>> In Playwright, the handling of Shadow DOM is streamlined through its selector engine, allowing you to interact with elements within the Shadow DOM just like with regular DOM elements. This makes Playwright a powerful tool for testing web applications that make extensive use of Shadow DOM for encapsulation and component isolation.

# File Upload

There are 2 scenarios in which you have to handle file upload

## Scenario:1 You have access to input element on DOM which helps you to set the file path
   - Find the locator
   - Use the locator object to set the file path
      <locator.setInputFiles("img1.png")>

   - Multiple files
      <locator.setInputFiles(["img1.png", "IMG2.PNG]")>
H
andling file uploads using JavaScript involves interacting with file input elements on the webpage. You can achieve this by using the setInputFiles method provided by Playwright. This method allows you to specify the path to the file(s) you want to upload.

Here's a basic outline of the steps to perform a file upload:

>> Steps for File Upload in Playwright

2. Select the File Input Element:
   Locate the file input element on the page. This is typically an <input type="file"> element.

3. Use setInputFiles to Set the File Path:
   Use the setInputFiles method to set the file(s) you want to upload. This method takes the selector for the file input element and the path to the file.

## Scenario:2 You may not have any input element access to set file path

   >> Using promise based approach
   >> based on an event - fileChooser 

   1. Create a promise and you tell that a file chooser event will be triggered
      <const fileChooserPromise = page.waitForEvent("fileChooser")>
   2. Perform that operation
      <await page.locator("#drag-drop-upload").click()>
   3. Once the promise is resolved, it returns the object of fileChooser
      <const fileChooser = await fileChooserPromise>
   4. fileChooser.setFiles(filePath)

   Using the fileChooser event in Playwright is a different approach to handle file uploads, especially useful when the file upload process is not just about setting a file to an input but involves more complex interactions, like clicking a button that triggers a file picker dialog.

>> fileChooser.setFiles():
    This is the method used to set the file(s) that you want to upload through the file picker dialog in the browser.
    It is called within the event handler for the fileChooser event.

>> [path.join(__dirname, 'img1.jpeg')]:

    - path.join(...): This is a method from Node.js's path module, which is used to create a file path string. It joins the given path segments together using the appropriate directory separator for the operating system.

    __dirname: This is a Node.js global variable that holds the directory name of the current module. This means it points to the directory where your current script file resides.

    The entire expression path.join(__dirname, 'img1.jpeg') constructs the full path to 'img1.jpeg' located in the same directory as the script.

# File Download

1. Set up a Listener for the Download Event:  
   <const fileDownloadPromise = page.waitForEvent("download");>

2. Trigger the Download:
   <await page.getByText('img.jpeg').click();>

3. Handling the Download:   
   <const fileDownloader = await fileDownloadPromise;>
   <await fileDownloader.saveAs(path.join("downloads/"+fileDownloader.suggestedFilename()));>

   Once the download starts, you're waiting for the fileDownloadPromise to resolve to get the Download object (fileDownloader). Then, you use fileDownloader.saveAs() to save the downloaded file. The file is saved in the 'downloads' directory with its suggested filename.


