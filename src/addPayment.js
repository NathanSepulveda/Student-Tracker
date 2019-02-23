
let paymentDropdown = document.querySelector("#paymentMethod")
studentAPI.getPaymentMethods()
    .then(methods => {
        console.log(methods)
        methods.forEach(method => {
            let html = `
    <option value=${method.id}>${method.method}</option>
    `
            paymentDropdown.innerHTML += html
        })
    })
document.querySelector("#recordStudentPayment").addEventListener("click", event => {
    let paymentsUrl = `http://localhost:3000/students`
    // let title = document.querySelector("#notesTitle")
    let studentName = document.querySelector("#people").value
    // title.innerHTML = studentName
    let studentId = document.querySelector(".studentDisplay").id
    // let studentId = document.querySelector("#people").id
    console.log(studentName)
    let numericalStudentId = parseInt(studentId)
    let paymentDate = document.querySelector("#paymentDate").value
    let paymentAmount = document.querySelector("#paymentAmount").value
    let lessonNote = document.querySelector("#notesInput").value
    let paymentMethodId = document.querySelector("#paymentMethod").value
    // let studentId = studentThing.className
    console.log(studentId)
    let fullPayment =
    {
        studentId: studentId,
        parentId: null,
        date: paymentDate,
        amount: paymentAmount,
        paymentMethodId: paymentMethodId
    }
    console.log(studentId)
    fetch(`${paymentsUrl}/${studentId}/payments`, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(fullPayment), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));

})