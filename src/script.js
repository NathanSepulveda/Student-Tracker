fetch(`http://localhost:3000/students`)
        .then(response => response.json())
        .then(studentInfo => {
            // console.table(studentInfo)
             for (let i = 0; i < studentInfo.length; i++) {
                let studentName = studentInfo[i].name
                let studentInstrument = studentInfo[i].instrument
                let latestNoteNumber = studentInfo[i].notesArray.length - 1
                let latestNote = studentInfo[i].notesArray[latestNoteNumber].notes
                let latestPaymentNumber = studentInfo[i].payments.length - 1
                let latestPayment = studentInfo[i].payments[latestPaymentNumber].amount
                // console.log(latestNoteNumber)
                // let latestNote = studentInfo[i].notesArray[latestNoteNumber]
                console.log(studentName, studentInstrument, latestNote, latestPayment)
                // let type = restInfo.restaurants[i].restaurant.cuisines;
                // let cost = restInfo.restaurants[i].restaurant.average_cost_for_two;
                // let location = restInfo.restaurants[i].restaurant.location.locality
                // let rating = restInfo.restaurants[i].restaurant.user_rating.aggregate_rating
             }
        })

        // var url = 'https://api.mlab.com/api/1/databases/lessons_planner/collections/student?apiKey=Ba1B9tSGfX3geZKu46Vdbue-S32DeB5C';
        // var data = { '_id': {
        //     $oid: "5c4ccdfefb6fc05326ad2b5f"},
        //     name: 'Jules',
        //             instrument: "piano",
        //             home: "true"};
        
        // fetch(url, {
        //   method: 'PUT', // or 'PUT'
        //   body: JSON.stringify(data), // data can be `string` or {object}!
        //   headers:{
        //     'Content-Type': 'application/json'
        //   }
        // }).then(res => res.json())
        // .then(response => console.log('Success:', JSON.stringify(response)))
        // .catch(error => console.error('Error:', error));