// The makeJournalEntryComponent function only defines how the journal entry will be structured.
// It does not actually create the journal entry in the DOM
const makeJournalEntryComponent = function(journalEntry) {
    // Create your own HTML structure for a journal entry
    //
    return `
    <div>
    <h2>Concepts Covered: ${journalEntry.conceptsCovered}</h2>
    <p>
    <strong>Entry:</strong> ${journalEntry.journalEntry}
    </p>
    <h4>Mood: ${journalEntry.moodChoice}</h4>
    <h3>Entry Date: ${journalEntry.entryDate}</h3>
    <button class="delete-btn" id="btn-delete-${journalEntry.id}">Delete</button>
    </div>
    `;
};
// create a delete button element above that interpolates the journal entry id onto the button id so it is unique


// Define a function that targets All the delete buttons from the makejournalentry component function
// run a loop on those buttons and add the click event listener
const deleteBtnEvent = function() {
    const deleteBtn = document.querySelectorAll(".delete-btn")
    console.log(deleteBtn)
    for (let i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].addEventListener("click", () => {
    // within the delete button eventlistener need to single out the id # of the journal entry so it can be deleted
    // do this by declaring a variable and targeting the id of the button
    // use split to say where you want to split the id into pieces which creates an array.
    // then identify which index of the array you want to single out i.e.[2] grabs the id#
                let btnId = event.target.id.split("-")[2]
                console.log(btnId)
    // call the deleteEntry function defined in data.js and pass in the new variable from above that  now holds the
    // value of the entry id
            deleteEntry(btnId)
            console.log("delete button clicked", deleteBtn[i])


            getAndDisplayEntries()


        })

    }

}

// getAndDisplayLegos()

// function getAndDisplayLegos() {
//     legoList.innerHTML = ""
//     getLegos()
//     .then( legoData => listLegos(legoData))
//   }

//   function getLegos() {
//     return fetch("http://localhost:8088/legos")
//     .then( legoData => legoData.json())
//   }

//   function listLegos(legoArr) {
//     legoArr.forEach( lego => {
//       legoList.appendChild(createLegoComponent(lego))
//     })
//   }



// The below function validates that each input field has something in it
function validateInputFields () {
    if (document.journalForm.journalDate.value == "") {
        alert("Please select a date");
        document.journalForm.journalDate.focus();
        return false;
    }
    if (document.journalForm.conceptsCovered.value == "") {
        alert("Please list concepts covered");
        document.journalForm.conceptsCovered.focus();
        return false;
    }
    if (document.journalForm.journalEntry.value == "") {
        alert("Please fill out journal entry");
        document.journalForm.journalEntry.focus();
        return false;
    }
    if (document.journalForm.currentMood.value == "") {
        alert("Please choose your current mood");
        document.journalForm.currentMood.focus();
        return false;
    }
        return ( true );
    }

// The below function is to validate that what is entered into each input field matches the allowed characters
// Have to add two arguements that will evaluate both of the text input fields (concepts covered and journal entry)
// at the same time as both have to evaluate to true in order to POST the new entry to the API
function validateInputCharacters(concepttxt, entrytxt)
{
 var allowedCharacters = /^[0-9a-zA-Z{}():; ]+$/;
 if (concepttxt.match(allowedCharacters) && entrytxt.match(allowedCharacters)) {
    alert("Thank You")
    return true;
  }
  else
  {
   alert("Does Not Meet Requirements");
   return false;
  }
  }

// Defining factory function that generates an object representing a journal entry
// Where will this function be called?
function createEntry(date, concept, entry, mood) {
    return {
        entryDate: date,
        conceptsCovered: concept,
        journalEntry: entry,
        moodChoice: mood
    }
  }







