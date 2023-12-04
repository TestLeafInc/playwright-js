Dig Deeper into Playwright

Agenda 
Recap
CSS & Playwright Selectors 
Classroom Activity-1
Assertions & Auto-wait 
Classroom Activity-2
Playwright config file walkthrough 
Handling Dropdown (Select)
Classroom Activity-3
Salesforce Testcase walkthrough
Wrap & QA

### Playwright Locators
    page.getByRole() - to locate by explicit and implicit accessibility attributes.
    page.getByText() - to locate by text content.
    page.getByLabel() -  to locate a form control by associated label's text.
    page.getByPlaceholder() - to locate an input by placeholder.
    page.getByAltText() - to locate an element, usually image, by its text alternative.
    page.getByTitle() - to locate an element by its title attribute.
    page.getByTestId() to locate an element based on its data-testid attribute 

### Assertions
### Assertions  
 
- Assertions are statements or conditions that you include in your test scripts to verify that  certain expectations about your application are met during testing. 
- Playwright includes test assertions in the form of expect function. 
- To make an assertion, call expect(value) and choose a matcher that reflects the expectation.
    Examples:    
     toContain() - Asserts that a value contains a certain substring.
     toBeEnabled() - Asserts that an element is enabled.
     toHaveUrl() -  to verify the current page URL

## Types of Assertions
    - Generic Assertions        :arrayContaining,closeTo,objectContaining,stringContaining
                                 stringMatching, toBe, toBeCloseTo, toBeFalsy, toBeGreaterThan
                                 toBeGreaterThanOrEqual, toBeLessThan, toBeLessThanOrEqual,
                                 toBeNull, toBeTruthy, toContain(expected), toContainEqual

    - APIResponseAssertions
    - LocatorAssertions         : toBeAttached,toBeChecked, toBeDisabled,toBeEnabled,toBeFocused,
                                  toBeHidden,toBeVisible,toContainText,toHaveAttribute(name, value),toHaveAttribute(name),toHaveClass,toHaveCount,toHaveCSS,toHaveId,toHaveText,toHaveValue
    - PageAssertions            : toHaveTitle, toHaveURL
    -SnapshotAssertions

### Here are the steps on how to handle a dropdown:

    - Select the dropdown using the locator property. 
        const dropdown = await page.locator('#dropdown');

    - Select the option from the dropdown using the selectOption method. You can specify the option by its  label, value, or index. 
    For example, to select the option with the label Cold, you can use the following code:
        await dropdown.selectOption({ label: 'Cold' });

    - You can also use the value or index to select the option. For example, to select the option with the  value 1, you can use the following code:
        await dropdown.selectOption({ value: '1' });

    - To select the option with the index 1, you can use the following code:
        await dropdown.selectOption({ index: 1 });