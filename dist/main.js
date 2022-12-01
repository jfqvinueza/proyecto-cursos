"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let students = [];
let teachers = [];
let courses = [];
let activitie = [];
let gradesBookSetup = [];
var Courses;
(function (Courses) {
    Courses["Programacion"] = "programacion de datos";
    Courses["BaseDatos"] = "Base de datos";
    Courses["Metodologias"] = "metodologias";
})(Courses || (Courses = {}));
var Teachers;
(function (Teachers) {
    Teachers["Programacion"] = "programacion de datos";
    Teachers["BaseDatos"] = "Base de datos";
    Teachers["Metodologias"] = "metodologias";
})(Teachers || (Teachers = {}));
// refactorisar 
function readFromHtml(id) {
    return document.getElementById(id).value;
}
function addStudent() {
    let currentStudent = {
        name: readFromHtml("name"),
        identification: parseInt(readFromHtml("identification")),
        gmail: readFromHtml("mail"),
        adress: readFromHtml("adress"),
        enrollment: parseInt(readFromHtml("enrollment")),
        carrer: readFromHtml("carrer"),
        carrerLevel: parseInt(readFromHtml("carrerLevel")),
    };
    students.push(currentStudent);
    console.log(students);
}
;
function addTeacher() {
    let currentTeacher = {
        name: readFromHtml("name"),
        identification: parseInt(readFromHtml("identification")),
        gmail: readFromHtml("mail"),
        adress: readFromHtml("adress"),
        title: readFromHtml("enrollment"),
        gradeLevel: readFromHtml("carrer"),
        area: readFromHtml("area"),
    };
    teachers.push(currentTeacher);
    console.log(teachers);
    initTeacher();
}
;
function addCourse() {
    let currentCourse = {
        name: readFromHtml("name"),
        parallel: readFromHtml("parallel"),
        hours: parseInt(readFromHtml('hours'))
    };
    courses.push(currentCourse);
    console.log(teachers);
}
;
function addActivitie() {
    let currentActivitie = {
        name: readFromHtml("name"),
    };
    activitie.push(currentActivitie);
    console.log(activitie);
    initCourse();
}
;
function addGradesBookSetup() {
    let currentGradesBookSetup = {
        value: readFromHtml("value"),
        course: readFromHtml("value"),
        activity: readFromHtml("value"),
        maximunGrade: parseInt(readFromHtml("value")),
    };
    gradesBookSetup.push(currentGradesBookSetup);
    console.log(gradesBookSetup);
    initCourse();
}
;
function initCourse() {
    let courseGradeBook = document.getElementById("course");
    let courses = Object.values(Courses);
    courses.forEach((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.text = value;
        courseGradeBook.add(option);
    });
}
function initTeacher() {
    let area = document.getElementById("area");
    let areas = Object.values(Teachers);
    areas.forEach((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.text = value;
        area.add(option);
    });
}
initTeacher();
initCourse();
