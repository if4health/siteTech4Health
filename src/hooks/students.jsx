import axios from "axios";

import Student from "../models/student";

export default async function getStudents(){
    await axios.get("http://localhost:3003/students/data")
    .then((res) => {
        console.log(res.data);
        let students = [];
        res.data.forEach((e) => {
            students.push(e);
        });
        return students;
    })
    .catch((err) => {
        console.log("something is wrong :(");
        console.log(err);
    });
}