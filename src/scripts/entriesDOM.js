let journalContainer = document.querySelector(".entryLog");


const loopEntries = (entries) =>
  {

    // What should happen when we finally have the array?
    for (let i = 0; i < entries.length; i++) {
      journalContainer.innerHTML += makeJournalEntryComponent(entries[i]);
      console.log(entries[i]);
    }
  }


