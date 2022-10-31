const express = require('express');
const app = express();
const nodemon = require('nodemon');
app.use(express.json());

const PORT = 3000;

let user = {
    username: "skolvikes",
    password: "Password1",
    email: "kcousins@gmail.com"
}

let course1 = {
    courseId: "123",
    courseName: "Math",
    startDate: "01/18/2023",
    endDate: "06/27/2023"
}

let course2 = {
    courseId: "456",
    courseName: "English",
    startDate: "01/18/2023",
    endDate: "06/27/2023"
}

let course3 = {
    courseId: "789",
    courseName: "Science",
    startDate: "01/18/2023",
    endDate: "06/27/2023"
}

app.get('/getUser', (req, res) => {
    try{
        let courses = {
            course1, 
            course2, 
            course3
        }

        let data = {
            user, 
            courses
        }

        return res.status(200).json(data);
    }
    catch{
        return res.status(500);
    }
});

app.post('/addUser', (req,res) => {
    try {
        return res.status(200).json(`Added user ${req.body.object.user.username} successfully`);
    }
    catch{
        return res.status(500);
    }
});

app.listen(3000);