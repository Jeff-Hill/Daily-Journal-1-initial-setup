
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
