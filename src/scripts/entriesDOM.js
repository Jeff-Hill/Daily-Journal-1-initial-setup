let journalContainer = document.querySelector(".entryLog");


const loopEntries = (entries) => {
    // In order to clear the DOM before reloading the API with the new + old entries set the journalContainer = to
    // empty string
    journalContainer.innerHTML = ""
    // What should happen when we finally have the array?
    for (let i = 0; i < entries.length; i++) {
      journalContainer.innerHTML += makeJournalEntryComponent(entries[i])
      // console.log(entries[i]);
      // let deleteBtn = document.createElement("button")
      // deleteBtn.setAttribute("id", entries.id)
      // deleteBtn.textContent = "delete"
      // deleteBtn.addEventListener("click", () => {
      //   let id = event.target.id
      //   console.log(id)
      //   console.log("delete button clicked")
      //   // let deleteEntry = function deleteEntry(id) {
      //   //   return fetch(`http://localhost:8088/${id}`, {
      //   //     method: "DELETE",
      //   //     headers:{"Content-Type": "application/json"}
      //   //   }
      //   //   )
      //   // }
      //   // deleteEntry(id)
      // })
      //   journalContainer.appendChild(deleteBtn)
        // document.querySelector(".entryLog").appendChild(journalContainer)
    }
    // call the deleteBtnEvent function from entryComponents.js that adds the click event listener to the newly
    // created delete buttons. You have to call the function here because this is the function that actually creates
    // the entry DOM elements
    deleteBtnEvent()

  }


