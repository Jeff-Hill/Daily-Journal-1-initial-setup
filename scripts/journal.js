/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
fetch("http://localhost:3000/journalEntries") // Fetch from the API
    .then(entries => entries.json())  // Parse as JSON
    .then(entries => {
      console.log(entries);
        // What should happen when we finally have the array?
        for (let i = 0; i < entries.length; i++) {
          journalContainer.innerHTML += makeJournalEntryComponent(entries[i]);
        }

    })
    const makeJournalEntryComponent = function(journalEntry) {
      // Create your own HTML structure for a journal entry
      return `
    <div>
    <h2>Concepts Covered: ${journalEntry.Concepts}</h2>
    <p>
    <strong>Entry:</strong> ${journalEntry.Entry}
    </p>
    <h4>Mood: ${journalEntry.Mood}</h4>
    <h3>Entry Date: ${journalEntry.Date}</h3>
    </div>
    `;
    };

let journalContainer = document.querySelector(".entryLog");


// const objectsJournalEntry = {
//     Date: "" ,
//     Concepts: "" ,
//     Entry: "",
//     Mood: ""

// }

// objectsJournalEntry.push(journalEntry entry_1)

// const entry_1 = {
//   Date: "05/25/2019",
//   Concepts: "Command line basics, Git & GitHub, Semantic HTML",
//   Entry:
//     "Today we set up our terminals and loaded git, played around with commands in the terminal to create directories and files. Reviewed semantic HTML, and made our first GitHub repository and pushed it to git.",
//   Mood: "Excited"
// };
// journalEntries.push(entry_1);

// const entry_2 = {
//   Date: "05/30/19",
//   Concepts: "Using the debugger, basic HTML layout, flexbox",
//   Entry:
//     "Basic html layout and how to connect a css file to it. What is flexbox, how to use it. We played the Froggy Game to play with Flexbox and the Dinner Table game to practice CSS",
//   Mood: "Happy"
// };
// journalEntries.push(entry_2);
// const entry_3 = {
//   Date: "06/03/2019",
//   Concepts: "Manipulating the DOM, Javascript Objects, Functions & Logic",
//   Entry:
//     "Learned how to inject HTML into the index file using Javascript, practiced object/array/function exercises",
//   Mood: "Worried"
// };
// journalEntries.push(entry_3);

// console.log(journalEntries);
