studentAPI.getStudentNotes()
    .then(notes => {
        console.log(typeof notes)
        const thisStudentNotes = notes.filter(note => {
            let studentNotes = false
          
            if (parseInt(note.studentId) === 4) {
                studentNotes = true
            }
          
            return studentNotes
          })
          console.log(thisStudentNotes)
    //     methods.forEach(method => {
    //         let html = `
    // <option value=${method.id}>${method.method}</option>
    // `
    //         paymentDropdown.innerHTML += html
    //     })
    })