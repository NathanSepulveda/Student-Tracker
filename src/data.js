let studentUrl = `  http://localhost:3000/students`
let instrumentUrl = `http://localhost:3000/instruments`
let lengthUrl = `http://localhost:3000/lengths`
let paymentMethodsUrl = `http://localhost:3000/paymentMethods`
const studentAPI = {

    getStudentNames() {
        return fetch(studentUrl).then(response => response.json())
    },
    getPaymentMethods() {
        return fetch(paymentMethodsUrl).then(response => response.json())
    },
    showStudentInfo(id) {
        return fetch(`${studentUrl}/${id}`).then(response => response.json())
    },
    getInstrumentNamebyId(id) {
         return fetch(`${instrumentUrl}/${id}`).then(response => response.json())
    },
    getTimebyId(id) {
        return fetch(`${lengthUrl}/${id}`).then(response => response.json())
    }
}