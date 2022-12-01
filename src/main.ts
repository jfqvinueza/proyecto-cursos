import { Course } from "./entities/course";
import { Student } from "./entities/student";
import { Teacher } from "./entities/teacher";
import { Activitie } from "./entities/activitie";

let students: Student[] = [];
let teachers: Teacher[] = [];
let courses: Course[] = [];
let activitie: Activitie[] = [];

// refactorisar 
function readFromHtml(id:string, ):string {
    return (<HTMLInputElement>document.getElementById(id)).value;
}

function addStudent():void{

    let currentStudent : Student = {
        name: readFromHtml("name"),
        identification: parseInt(readFromHtml("identification")),
        gmail: readFromHtml("mail"),   
        adress: readFromHtml("adress"),
        enrollment: parseInt(readFromHtml("enrollment")),
        carrer: readFromHtml("carrer"),
        carrerLevel: parseInt(readFromHtml("carrerLevel")),
    }  
    
    students.push(currentStudent);
    console.log(students)

};

function addTeacher():void{

    let currentTeacher : Teacher = {
        name: readFromHtml("name"),
        identification: parseInt(readFromHtml("identification")),
        gmail: readFromHtml("mail"),   
        adress: readFromHtml("adress"),
        title: readFromHtml("enrollment"),
        gradeLevel: readFromHtml("carrer"),
        area: readFromHtml("area"),
    }  
    
    teachers.push(currentTeacher);
    console.log(teachers)

};

function addCourse():void{

    let currentCourse:Course = {
        name: readFromHtml("name"),
        parallel: readFromHtml("parallel"),
        hours: parseInt(readFromHtml('hours'))
    }  
    
    courses.push(currentCourse);
    console.log(teachers)

};

function addActivitie():void{

    let currentActivitie:Activitie = {
        name: readFromHtml("name"),
 
    }  
    
    activitie.push(currentActivitie);
    console.log(activitie)

};


