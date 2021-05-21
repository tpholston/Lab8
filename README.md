# Lab8_Starter
Tyler Holston

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)
ANSWER: 1 (or a?)

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
ANSWER: Probably not because messaging requires a couple different procedures in that some user would need to write the message and send it but this necessarily suggests there is some sort of external procedure to handle this message and actually deliver it. This interaction would make it difficult to apply a unit test.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters
ANSWER: This is probably fine. Checking to see if a message is a length of less than some threshold doesn't really require any interaction with other components.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?
ANSWER: Setting headless to true won't bring up the browser UI so we would bypass all the time a real browser takes to load CSS, JavaScript and open and render HTML DOM.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?
you could click on the settings img through something like "await page.click("header > img");"
