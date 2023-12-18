Alert

An alert is a Javascript popup dialog that can be displayed by a web page to convey important messages

To check whether element is an alert or not
// The element is not inspectable
//The element cannot be ignored

**Types of Dialogs**
# Simple Alert
- allows you to do only single action (Ok)

# Confirmation Alert
- allows you to choose any one action (Ok/ Cancel)

# Prompt Alert
- allows you to choose any one action (accept/reject)
- allows you to enter the value in  the text box

# beforeunload dialog
- special type of dialog that is triggered when a user attempts to leave a webpage that might have unsaved changes (Leave/Stay)

**Methods to handle the dialog**
1. accept()
2. dismiss()
3. message()
4. type()

Steps: 
page.on('dialog')