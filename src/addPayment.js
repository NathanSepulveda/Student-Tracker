
let paymentDropdown = document.querySelector("#paymentMethod")
studentAPI.getPaymentMethods()
    .then(methods => {
        console.log(methods)
        methods.forEach(method => {
            let html = `
    <option value=${method.method}>${method.method}</option>
    `
            paymentDropdown.innerHTML += html
        })
    })
// document.querySelector("#recordLessonNotes").addEventListener("click", event => {
//     let paymentsUrl = `http://localhost:3000/students`
//     let title = document.querySelector("#notesTitle")
//     let studentName = document.querySelector("#people").value
//     // title.innerHTML = studentName
//     let studentId = document.querySelector(".studentDisplay").id
//     // let studentId = document.querySelector("#people").id
//     console.log(studentName)
//     let numericalStudentId = parseInt(studentId)
//     let paymentDate = document.querySelector("#paymentDate").value
//     let lessonNote = document.querySelector("#notesInput").value
//     // let studentId = studentThing.className
//     console.log(studentId)
//     let fullNote = 
//     {
//         studentId: numericalStudentId,
//         date: lessonDate,
//         note: lessonNote
//       }
//     console.log(studentId)
//     fetch(`${notesUrl}/${studentId}/notes`, {
//     method: 'POST', // or 'PUT'
//     body: JSON.stringify(fullNote), // data can be `string` or {object}!
//     headers: {
//         'Content-Type': 'application/json'
//     }
// }).then(res => res.json())
//     .then(response => console.log('Success:', JSON.stringify(response)))
//     .catch(error => console.error('Error:', error));

// })