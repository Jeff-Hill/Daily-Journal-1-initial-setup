let journalContainer = document.querySelector(".entryLog");


const loopEntries = (entries) =>
  {
    // In order to clear the DOM before reloading the API with the new + old entries set the journalContainer = to
    // empty string
journalContainer.innerHTML = ""
    // What should happen when we finally have the array?
    for (let i = 0; i < entries.length; i++) {
      journalContainer.innerHTML += makeJournalEntryComponent(entries[i]);
      console.log(entries[i]);
    }
  }


