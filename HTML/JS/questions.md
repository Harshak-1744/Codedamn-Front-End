## ✅ Objective-1 : Create a JavaScript object to represent a book.

### Requirements:

- The object should be named book.
- It should have properties for title, author, and yearPublished.
- After creating the object, write a line of code that logs the book's details in the console in the format:   "Title by Author, published in Year."


## ✅ Objective-2: Develop a simple JavaScript console application to manage a personal budget.

### Requirements:

- **Functionality to Add Transactions:** 
    Users should be able to add transactions (both incomes and expenses) to their budget. Each transaction should include a description and amount.

- **Functionality to Remove Transactions:**
    Users should be able to remove a transaction based on its index in the list.

- **Functionality to View All Transactions:** 
    Users should be able to display all transactions along with a summary that includes total income, total expense, and current balance.

- **Use Arrays for Storing Transactions:** 
    All transactions should be stored in an array. Each transaction can be an object with type (income or expense), description, and amount.



## ✅ Objective-3: Build a JavaScript console application to manage event reminders.

### Requirements:

- **Create Event Reminders**:
    Users should be able to create reminders for events. Each reminder should include the event name, the date, and the time.

- **Store Reminders**:
    All reminders should be stored in an array. Each reminder can be represented as an object with properties for eventName, date, and time.

- **List Upcoming Events**:
    Users should be able to view a list of all upcoming events, sorted by the closest upcoming date.

- **Remove Past Events**:
    The application should have functionality to automatically remove events that are past the current date and time to keep the list updated.


##  ✅Project: Theme Switcher

## Objective-4:  Create a basic webpage that changes its theme

### Requirements:

- HTML Layout:
    Create an HTML page with a paragraph of text and two buttons.
    One button for switching to a "Dark" theme and another for switching to a "Light" theme.

- JavaScript Functionality:
    Write JavaScript code that uses document.querySelector to find the buttons and paragraph.
    Add onclick directly in the HTML to call JavaScript functions when each button is clicked.

- Switching Themes:
    Define two functions in JavaScript: setDarkTheme() and setLightTheme().
    These functions should use document.querySelector to change the styles of the HTML body and paragraph to reflect the selected theme.


## ✅ Project: Image Gallery with Descriptions

## Objective-5: Create a simple image gallery 

### Requirements:

- HTML Layout:
    Create a section with a large display area for the main image and its description.
    Below or beside the display area, add several smaller thumbnails of images.

- JavaScript Functionality:
    Use document.querySelector to select the main image and description elements.
    Add onclick attributes in the HTML that call a JavaScript function to update the main image and description based on the thumbnail clicked.

- CSS for Styling:
    Style the main display area to prominently show the image and description.
    Style the thumbnails so they look appealing and are clearly clickable.


 
## Objective-6: Interactive Quiz App

### Description:

Create a web-based quiz application where users can answer multiple-choice questions. The quiz will provide immediate feedback on whether the answer was correct or incorrect and show the next question.

### Features:

- Start Screen:
    Display a start button to begin the quiz.
    Title and brief instructions.

- Quiz Screen:
    Show one question at a time with multiple-choice answers.
    Use buttons for each answer.
    When an answer is clicked, indicate if it's right or wrong.

- Results Screen:
    After the last question, show the user’s score.
    Option to restart the quiz.

- Interactive Elements:
    Use getElementById to manage the quiz content updates.
    Use addEventListener to handle clicks on answer buttons and the start button.


## Project -7 : Countdown Timer
Create a countdown timer app that allows users to input a time duration, displays the countdown in real-time, and triggers an alert when time's up.

### Objective:
Create a countdown timer that takes user input, starts the countdown, and shows the remaining time dynamically.

### Features:
    
    - Time Input:
        Accept hours, minutes, and seconds from the user.
    
    - Timer Display:
        Show the countdown time in an "HH:MM:SS" format.

    - Start/Stop Functionality:
        Allow the user to start, pause, and reset the timer.

    - Alert on Completion:
        Trigger an alert or play a sound when the countdown reaches zero.

* Steps:
    
    - Setup HTML Layout:
        Add input fields to accept hours, minutes, and seconds.
    - Create buttons for starting, pausing, and resetting the timer.
        Provide a section to display the countdown.
    - JavaScript Logic:
        Use setTimeout or setInterval to decrease the time at one-second intervals.
        Use promises to handle the timer start, pause, and reset functionalities.
    - Handling Promises:
        Use promises to manage the countdown.
        Resolve promises when the timer completes.
        Reject promises if an error occurs (e.g., negative time input).



## Project - 8: Online Bookstore Order Process
    Create a simple simulated order process for an online bookstore. The user can place an order for a book, then the system checks if the book is in stock, processes the payment, and finally confirms the order.

### Project Outline:

## Features to Implement :-

    - Place Order Function: Takes a book ID and returns a promise. If the book is in stock, it proceeds; otherwise, it rejects.
    - Check Stock Function: Checks the availability of the requested book.
    - Process Payment Function: Processes payment for the book if it's in stock.
    - Confirm Order Function: Sends an order confirmation message.


## Project - 9: Currency Converter
    Create a simple currency converter that allows users to convert amounts between different currencies based on real-time exchange rates fetched from an API. The user selects or inputs the base currency and the target currency, and the amount they wish to convert. The application then displays the converted amount in the target currency.

### Project Outline:
    
### Features to Implement :- 
        
        - Fetch Exchange Rates Function: An async function that takes base and target currencies as parameters, fetches their current exchange  rate using a public API, and returns the rate as a promise.
        
        - Convert Currency Function: Takes an amount, base currency, and target currency, fetches the current exchange rate, and then calculates the converted amount.
        
        - Update UI Function: Updates the user interface to display the converted amount dynamically.
        
        - Error Handling Function: Handles and displays errors for scenarios like invalid currency codes, API failures, or no internet connection.