create dropdown selection
fetch(`http://localhost:3000/students`)
    .then(response => response.json())
    .then(studentInfo => {
        // console.log(studentInfo)
        studentInfo.forEach(student => {
            let html = `
    <option id="--${student.id}">${student.name}</option>
    `
            dropDown.innerHTML += html
        })
    })

// display template
let viewStudentInfo = document.querySelector(".studentInfo")
let createStudentInfoViewer = (student, note) => {
    // let dateOfLastLesson = student.notesArray[0]

    let html = `
    <div id=${student.id}>
    <h1>${student.name}</h1>
    <h2>${student.instrument}</h2>
    <h2>${parseInt(student.lessonLength)} Minute Lessons</h2>
    <p> Recent Notes: ${note}</p>
    `
    viewStudentInfo.innerHTML = html


}
//display student info
document.querySelector("#selectBtn").addEventListener("click", event => {
    document.querySelector("#newNoteDisplay").getElementsByClassName.display = "show"
    // console.log("I was clicked")
    let selectedName = document.querySelector("#people").value
    console.log(`Hello ${selectedName}!`)
    let recentNotes = ""
    let instrument = ""
    // fetch(`http://localhost:3000/students?name=${selectedName}`)
    fetch(`http://localhost:3000/students?name=${selectedName}`)
        .then(response => response.json())
        .then(studentInfo => {
            // viewStudentInfo = ""
            let instrumentId = studentInfo[0].instrumentId
            console.table(studentInfo[0])
            fetch(`http://localhost:3000/instruments/${instrumentId}`)
                .then(response => response.json())
                .then(instrument => {
                    console.log(instrument.name)
                })
            let id = studentInfo[0].id
            console.log(id)
            fetch(`http://localhost:3000/students/${id}/notes`)
                .then(response => response.json())
                .then(notes => {
                    // console.log( notes[0].notesDetails[0].note )
                    if (notes[0] === undefined) {
                        recentNotes = "no notes yet!"
                        // createStudentInfoViewer(studentInfo[0], recentNotes)
                    } else if (notes[0].notesDetails[0].note !== "") {
                        console.log(notes[0].notesDetails[0].note)
                        recentNotes = notes[0].notesDetails[0].note
                    }
                    createStudentInfoViewer(studentInfo[0], recentNotes)
                })
            // console.log(studentInfo[0].notes.notesDetails)


        })

})