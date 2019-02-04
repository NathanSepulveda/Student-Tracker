let dropDown = document.querySelector("#people")
//create dropdown selection
fetch(`http://localhost:3000/students`)
    .then(response => response.json())
    .then(studentInfo => {
        // console.log(studentInfo)
        studentInfo.forEach(student => {
            let html = `
    <option id="--${student.name}">${student.name}</option>
    `
            dropDown.innerHTML += html
        })
    })


let viewStudentInfo = document.querySelector(".studentInfo")
let createStudentInfoViewer = (student) => {
    // let dateOfLastLesson = student.notesArray[0]
    
    let html = `
    <div id=${student.id}>
    <h1>${student.name}</h1>
    <h2>${student.instrument}</h2>
    <h2>${parseInt(student.lessonLength)} Minute Lessons</h2>
    </div>
    `
    viewStudentInfo.innerHTML = html
    

}
    //display student info
document.querySelector("#selectBtn").addEventListener("click", event => {
    document.querySelector("#newNoteDisplay").getElementsByClassName.display = "show"
    // console.log("I was clicked")
    let selectedName = document.querySelector("#people").value
    console.log(`Hello ${selectedName}!`)
    fetch(`http://localhost:3000/students?name=${selectedName}`)
    .then(response => response.json())
    .then(studentInfo => {
        // viewStudentInfo = ""
            console.log(studentInfo[0])
            createStudentInfoViewer(studentInfo[0])
            

        })

})