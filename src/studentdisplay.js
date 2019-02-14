let populateDropdown = () => {
    let dropDown = document.querySelector("#people")
    dropDown.innerHTML = ""
    studentAPI.getStudentNames()
        .then(studentNames => {
            console.log(studentNames)
            studentNames.forEach(student => {
                let html = `
    <option id="${student.id}" value=${student.id}>${student.name}</option>
    `
                dropDown.innerHTML += html
            })
        })
}
populateDropdown()



let viewStudentInfo = document.querySelector(".studentInfo")
let createStudentInfoViewer = (student, instrument, length, day, phoneNumber, notes, payments) => {
    // let dateOfLastLesson = student.notesArray[0]

    let html = `
    <div class="studentDisplay" id=${student.id}>
    <h1>${student.name}</h1>
    <h2>${instrument}</h1>
    <h2>${length}</h1>
    <h2>${day}</h1>
    <h2>${phoneNumber}</h1>
    <h2 class="noteTitle">Recent Notes</h2>
    <div class="resultsList">
        ${notes}
        </div>
        <h2 class="noteTitle">Recents Payments</h2>
        <div class="resultsList">
        ${payments}
        </div>
        <button id="--${student.id}">Delete This Student</button>

    `
    viewStudentInfo.innerHTML = html
}

//display student info when button is clicked 
document.querySelector("#selectBtn").addEventListener("click", event => {

    let selectedNameId = document.querySelector("#people").value
    console.log(selectedNameId)
    let studentInfos = ""
    let theInstrument = ""
    let theLength = ""
    studentAPI.showStudentInfo(selectedNameId)
        .then(studentInfo => {
            studentInfos = studentInfo
            // console.log(studentInfo)
            theInstrument = studentInfo.instrument.name
            // console.log(instrumentId)
            theLength = studentInfo.length.length
            day = studentInfo.lessonDay.day
            phoneNumber = studentInfo.phoneNumber
            // console.log(lengthId)
            // let instrumentName = 
        }).then(() => {
            studentAPI.getStudentNotes(selectedNameId).then(notes => {
                console.log(notes)
                notes = notes.reverse()
                let noteHtml = ""
                if (notes.length === 0) {
                    noteHtml = "There are no recent notes."
                } else {
                    notes.forEach(note => {

                        html = `
                    <div class="noteView"><strong>${note.date}</strong>  ${note.note}
                    </div>`
                        noteHtml += html
                    })
                } return noteHtml
            }).then((noteHtml)=> {
                studentAPI.getPaymentsbyStudentId(selectedNameId).then(payments => {
                    console.log(payments)
                    payments = payments.reverse()
                    let paymentHTML = ""
                    let total = 0
                    payments.forEach(payment => {
                        console.log(payment.amount)
                        total += Number(payment.amount)
                    })
                    payments.forEach(payment => {
                        // total += payment.amount
                        html = `
                        <div class="noteView"><strong>${payment.date}</strong>  $${payment.amount} ${payment.paymentMethod.method}
                        </div>
                        <div>This student has payed $${total} in total</div>`
                        paymentHTML += html
                    })
                    createStudentInfoViewer(studentInfos, theInstrument, theLength, day, phoneNumber, noteHtml, paymentHTML)

                })
            })
        })
    console.log(`Hello ${selectedNameId}!`)


})


document.querySelector("body").addEventListener("click", (event) => {

    if (event.target.id.startsWith("--")) {
        let cardID = event.target.id.split("--")[1]
        studentAPI.deleteStudent(cardID).then(() => {
            populateDropdown()
        }).then(() => {
            viewStudentInfo.innerHTML = `<h1>Student Deleted.</h1>`

        })
            // .then(printToDOM)
            .then(() => {
                viewStudentInfo.innerHTML = `<h1>Student Deleted.</h1>`
            })
    }
})