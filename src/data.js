let studentUrl = `  http://localhost:3000/students`
let instrumentUrl = `http://localhost:3000/instruments`
let lengthUrl = `http://localhost:3000/lengths`
let paymentMethodsUrl = `http://localhost:3000/paymentMethods`
let notesUrl = `http://localhost:3000/notes`
let paymentsUrl = `http://localhost:3000/payments`
let daysUrl = `http://localhost:3000/lessonDays`
const studentAPI = {

    getStudentNames() {
        return fetch(studentUrl).then(response => response.json())
    },
    getPaymentsbyStudentId(studentId) {
        return fetch(`${paymentsUrl}?studentId=${studentId}&_expand=paymentMethod`).then(response => response.json())
    },
    getPaymentMethods() {
        return fetch(paymentMethodsUrl).then(response => response.json())
    },
    showStudentInfo(id) {
        return fetch(`${studentUrl}/${id}?_expand=parent&_expand=instrument&_expand=length&_expand=location&_expand=lessonDay`).then(response => response.json())
    },
    getInstrumentNamebyId(id) {
        return fetch(`${instrumentUrl}/${id}`).then(response => response.json())
    },
    getTimebyId(id) {
        return fetch(`${lengthUrl}/${id}`).then(response => response.json())
    },
    getStudentNotes(studentId) {
        return fetch(`${notesUrl}?studentId=${studentId}`).then(response => response.json())
    },
    deleteStudent(studentId) {
        return fetch(`${studentUrl}/${studentId}`, {
            method: "DELETE"
        })
    }
}