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
let createStudentInfoViewer = (student, instrument, length, day) => {
    // let dateOfLastLesson = student.notesArray[0]

    let html = `
    <div class="studentDisplay" id=${student.id}>
    <h1>${student.name}</h1>
    <h2>${instrument}</h1>
    <h2>${length}</h1>
    <h2>${day}</h1>
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
            // console.log(lengthId)
            // let instrumentName = 
            createStudentInfoViewer(studentInfos, theInstrument, theLength, day)

        })

    console.log(`Hello ${selectedNameId}!`)


})
