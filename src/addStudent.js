var url = `http://localhost:3000/students`;

document.querySelector("#postNewStudent").addEventListener("click", event => {
    let studentName = document.querySelector("#studentName").value
    let phoneNumber = document.querySelector("#studentPhoneNumber").value
    let lessonLength = document.querySelector("#lessonLength").value
    let instrument = document.querySelector("#instrument").value
    let lessonLocation = document.querySelector("#location").value

    let newStudentData = {
        name: studentName,
        phoneNumber: phoneNumber,
        instrument: instrument,
        lessonLocation: lessonLocation,
        lessonLength: lessonLength,
        payments: [
            {
                date: null,
                method: null,
                amount: null
            }
        ],
        notesArray:[
            {
                date: null,
                notes: null
            }
        
        ]
    };
    fetch( `http://localhost:3000/students`, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(newStudentData), // data can be `string` or {object}!
    headers: {
        'Content-Type': 'application/json'
    }
}).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
})

