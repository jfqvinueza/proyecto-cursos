"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let students = [];
let teachers = [];
let courses = [];
let activitie = [];
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
}
;
