/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
// fetch("http://localhost:3000/journalEntries") // Fetch from the API
//     .then(entries => entries.json())  // Parse as JSON
//     .then(entries => {
//       console.log(entries);
//         // What should happen when we finally have the array?
//         for (let i = 0; i < entries.length; i++) {
//           journalContainer.innerHTML += makeJournalEntryComponent(entries[i]);
//         }

//     })

const API = {
  getJournalEntries() {
    return fetch("http://localhost:8088/journalEntries")
    .then(entries =>entries.json());
  }
};