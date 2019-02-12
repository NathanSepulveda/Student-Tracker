

document.querySelector("#recordLessonNotes").addEventListener("click", event => {
    let notesUrl = `http://localhost:3000/students`
    let title = document.querySelector("#notesTitle")
    let studentName = document.querySelector("#people").value
    // title.innerHTML = studentName
    let stringStudentId = document.querySelector(".studentDisplay").id
    let studentId = parseInt(stringStudentId)
    // let studentId = document.querySelector("#people").id
    console.log(studentName)
    let numericalStudentId = parseInt(studentId)
    let lessonDate = document.querySelector("#lessonDate").value
    let lessonNote = document.querySelector("#notesInput").value
    // let studentId = studentThing.className
    console.log(studentId)
    let fullNote = 
    {
        studentId: numericalStudentId,
        date: lessonDate,
        note: lessonNote
      }
    console.log(studentId)
    fetch(`${notesUrl}/${studentId}/notes`, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(fullNote), // data can be `string` or {object}!
    headers: {
        'Content-Type': 'application/json'
    }
}).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));

})