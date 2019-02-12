var url = `http://localhost:3000/students`;

document.querySelector("#postNewStudent").addEventListener("click", event => {
    let studentName = document.querySelector("#studentName").value
    let phoneNumber = document.querySelector("#studentPhoneNumber").value
    let lessonLength = document.querySelector("#lessonLength").value
    let instrument = document.querySelector("#instrument").value
    let lessonLocation = document.querySelector("#lessonLocation").value
    let lessonTime = document.querySelector("#lessonTime").value
    let lessonDay = document.querySelector("#lessonDay").value

    let newStudentData = {
        name: studentName,
        phoneNumber: phoneNumber,
        lessonDayId: lessonDay,
        lessonTime: lessonTime,
        instrumentId: instrument,
        locationId: lessonLocation,
        lengthId: lessonLength,
        parentId: 0
    };
    // {
    //     "name": "Kristi McCoromack",
    //     "phoneNumber": "(615) 308-6062",
    //     "typicalLessonDay": "Saturday",
    //     "typicalLessonTime": 10,
    //     "instrumentId": 1,
    //     "locationId": 1,
    //     "lengthId": 2,
    //     "parentId": null,
    //     "id": 1
    // },
    fetch(`http://localhost:3000/students`, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(newStudentData), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
})

