/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
// objectWithGetterMethod.methodToGetData().then(functionThatRendersData)

API.getJournalEntries().then(loopEntries)
// console.log("journal.js")

let recordEntryBtn = document.querySelector("#record-entry-btn")
// console.log("record entry button", recordEntryBtn)


// This is the event listenter added to the Record Entry button to add the new entry to
// the API and reload the DOM with the updated database of journal entries
recordEntryBtn.addEventListener("click", () => {
    console.log("button was clicked")
    // Had to update the makejournalentryComponent function to use these new variables for each property key
    let entryDate = document.querySelector("#journalDate").value
    let conceptsCovered = document.querySelector("#conceptsCovered").value
    let journalEntry = document.querySelector("#journalEntry").value
    let moodChoice = document.querySelector("#currentMood").value
  // Define a new variable that calls the factory function defined to create a new entry object
    let newEntry = createEntry(entryDate, conceptsCovered, journalEntry, moodChoice)
    // Call The function below that checks that each input field has content when the button is clicked
    let basicValidation = validateInputFields()
    // Call the function below that checks that the content in each text input matches the allowed characters
    let charValidation = validateInputCharacters(conceptsCovered, journalEntry)
    // createEntry(entryDate, conceptsCovered, journalEntry, moodChoice)
    // Invoke the factory function, passing along the form field values
console.log(basicValidation, charValidation)
    // Use `fetch` with the POST method to add your entry to your API
    // Add a conditional "if" statement to make sure both validation conditions evaluate as true
    // before Posting the new entry to the API
    if( basicValidation && charValidation) {
      fetch("http://localhost:8088/journalEntries", { // Replace "url" with your API's URL
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEntry)
    })
    // chain on another .then promise after the POST to call the API GET function again
    .then(API.getJournalEntries)
    // a final .then promise that takes the new object of entries and puts them into the
    // loopEntries function that creates the DOM element
    .then(allEntries => {
      loopEntries(allEntries)
    })
    }
})









// Old code from Daily Journals 1-5
// /*
//     Define the keys and value for a JavaScript object that
//     represents a journal entry about what you learned today
// */
// fetch("http://localhost:3000/journalEntries") // Fetch from the API
//     .then(entries => entries.json())  // Parse as JSON
//     .then(entries => {
//       console.log(entries);
//         // What should happen when we finally have the array?
//         for (let i = 0; i < entries.length; i++) {
//           journalContainer.innerHTML += makeJournalEntryComponent(entries[i]);
//         }

//     })
//     const makeJournalEntryComponent = function(journalEntry) {
//       // Create your own HTML structure for a journal entry
//       return `
//     <div>
//     <h2>Concepts Covered: ${journalEntry.Concepts}</h2>
//     <p>
//     <strong>Entry:</strong> ${journalEntry.Entry}
//     </p>
//     <h4>Mood: ${journalEntry.Mood}</h4>
//     <h3>Entry Date: ${journalEntry.Date}</h3>
//     </div>
//     `;
//     };

// let journalContainer = document.querySelector(".entryLog");


// // const objectsJournalEntry = {
// //     Date: "" ,
// //     Concepts: "" ,
// //     Entry: "",
// //     Mood: ""

// // }

// // objectsJournalEntry.push(journalEntry entry_1)

// // const entry_1 = {
// //   Date: "05/25/2019",
// //   Concepts: "Command line basics, Git & GitHub, Semantic HTML",
// //   Entry:
// //     "Today we set up our terminals and loaded git, played around with commands in the terminal to create directories and files. Reviewed semantic HTML, and made our first GitHub repository and pushed it to git.",
// //   Mood: "Excited"
// // };
// // journalEntries.push(entry_1);

// // const entry_2 = {
// //   Date: "05/30/19",
// //   Concepts: "Using the debugger, basic HTML layout, flexbox",
// //   Entry:
// //     "Basic html layout and how to connect a css file to it. What is flexbox, how to use it. We played the Froggy Game to play with Flexbox and the Dinner Table game to practice CSS",
// //   Mood: "Happy"
// // };
// // journalEntries.push(entry_2);
// // const entry_3 = {
// //   Date: "06/03/2019",
// //   Concepts: "Manipulating the DOM, Javascript Objects, Functions & Logic",
// //   Entry:
// //     "Learned how to inject HTML into the index file using Javascript, practiced object/array/function exercises",
// //   Mood: "Worried"
// // };
// // journalEntries.push(entry_3);

// // console.log(journalEntries);
