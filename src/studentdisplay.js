let dropDown = document.querySelector("#people")
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



let viewStudentInfo = document.querySelector(".studentInfo")
let createStudentInfoViewer = (student, instrument, length) => {
    // let dateOfLastLesson = student.notesArray[0]

    let html = `
    <div class="studentDisplay" id=${student.id}>
    <h1>${student.name}</h1>
    <h2>${instrument}</h1>
    <h2>${length}</h1>
    `
    viewStudentInfo.innerHTML = html
}

//display student info when button is clicked 
document.querySelector("#selectBtn").addEventListener("click", event => {

    let selectedNameId = document.querySelector("#people").value
    console.log(selectedNameId)
    instrumentId = ""
    let lengthId = ""
    let studentInfos = ""
    let theInstrument = ""
    studentAPI.showStudentInfo(selectedNameId)
        .then(studentInfo => {
            studentInfos = studentInfo
            // console.log(studentInfo)
            instrumentId = studentInfo.instrumentId
            // console.log(instrumentId)
            lengthId = studentInfo.lengthId
            // console.log(lengthId)
            // let instrumentName = 

        }).then(() => {
            studentAPI.getInstrumentNamebyId(instrumentId).then(instrument => {

                theInstrument = instrument.name
                console.log(theInstrument)
                studentAPI.getTimebyId(lengthId).then(length => {
                    let theLength = length.length
                    createStudentInfoViewer(studentInfos, theInstrument, theLength)
                })
            })
        })
    // console.log(instrumentName)
    console.log(`Hello ${selectedNameId}!`)
    // let name = studentInfo.name
    // fetch(`http://localhost:3000/students?name=${selectedName}`)
    // fetch(`http://localhost:3000/students/${selectedNameId}`)
    //     .then(response => response.json())
    //     .then(studentInfo => {
    //         // viewStudentInfo = ""
    //         console.table(studentInfo)
    // fetch(`http://localhost:3000/instruments/${instrumentId}`)
    //     .then(response => response.json())
    //     .then(instrument => {
    //         console.log(instrument.name)
    //     })
    // let id = studentInfo[0].id
    // console.log(id)
    // fetch(`http://localhost:3000/students/${id}/notes`)
    //     .then(response => response.json())
    //     .then(notes => {
    //         // console.log( notes[0].notesDetails[0].note )
    //         if (notes[0] === undefined) {
    //             recentNotes = "no notes yet!"
    //             // createStudentInfoViewer(studentInfo[0], recentNotes)
    //         } else if (notes[0].notesDetails[0].note !== "") {
    //             console.log(notes[0].notesDetails[0].note)
    //             recentNotes = notes[0].notesDetails[0].note
    //         }
    //         createStudentInfoViewer(studentInfo[0], recentNotes)
    //     })
    // console.log(studentInfo[0].notes.notesDetails)


    // })

})