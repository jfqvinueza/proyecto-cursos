import { Course } from "./entities/course";
import { Student } from "./entities/student";
import { Teacher } from "./entities/teacher";
import { Activitie } from "./entities/activitie";
import { GradesBookSetup } from "./entities/gradesBookSetup";


let students: Student[] = [];
let teachers: Teacher[] = [];
let courses: Course[] = [];
let activitie: Activitie[] = [];
let gradesBookSetup: GradesBookSetup[] = [];


enum Courses
{
    Programacion = 'programacion de datos',
    BaseDatos = 'Base de datos',
    Metodologias = 'metodologias'

}

enum Teachers
{
    Programacion = 'programacion de datos',
    BaseDatos = 'Base de datos',
    Metodologias = 'metodologias'

}



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
    initTeacher()
    

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
    initCourse()

};

function addGradesBookSetup():void{

    let currentGradesBookSetup:GradesBookSetup = {
        value: readFromHtml("value"),
        course:readFromHtml("value"),
        activity:readFromHtml("value"),
        maximunGrade: parseInt(readFromHtml("value")),
 
    }  
    
    gradesBookSetup.push(currentGradesBookSetup);
    console.log(gradesBookSetup)
    initCourse()




};

function initCourse():void {
    let courseGradeBook = document.getElementById("course") as HTMLSelectElement
 
    let courses = Object.values(Courses)
    courses.forEach(
        (value)=>
        {
            let option = document.createElement("option")
            option.value = value;
            option.text = value;
            courseGradeBook.add(option)
        }
    )
}

function initTeacher():void {
    let area = document.getElementById("area") as HTMLSelectElement
 
    let areas = Object.values(Teachers)
    areas.forEach(
        (value)=>
        {
            let option = document.createElement("option")
            option.value = value;
            option.text = value;
            area.add(option)
        }
    )
}

initTeacher()
initCourse();