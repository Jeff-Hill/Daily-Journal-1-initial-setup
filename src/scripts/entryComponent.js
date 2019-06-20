
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

// Defining factory function that generates an object representing a journal entry
// Where will this function be called?
const createEntry = function (date, concepts, entry, mood) {
    return {
        "Entry_Date": date,
        "Concepts": concepts,
        "Journal_Entry": entry,
        "Mood": mood
    }
}
