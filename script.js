"use strict";

const names = ["Harry Potter",
            "Ron Weasley",
            "Hermione Granger",
            "Neville Longbottom",
            "Luna Lovegood",
            "Cho Chang",
            "Justin Finch-Fletchly",
            "Draco Malfoy"];

const houses = {
    Gryffindor: "Gryffindor",
    Hufflepuff: "Hufflepuff",
    Ravenclaw: "Ravenclaw",
    Slytherin: "Slytherin"
}



const Student_template = {
    firstName: "",
    lastName: "",
    toString() {
        return this.firstName + " " + this.lastName;
    },
    splitName( fullName ) {
        const firstSpace = fullName.indexOf(" ");
        this.firstName = fullName.substring(0,firstSpace);
        this.lastName = fullName.substring(firstSpace+1);
    }
}

const students = [];

function createStudents() {
    names.forEach( createASingleStudent );
}


function createASingleStudent( name ) {
    // I'm going to create a new object based on the Student_template prototype
    const aStudent = Object.create(Student_template);
    
    // then I'm letting the object set its own properties, via the splitName method
    aStudent.splitName( name );

    // put the student in a random house
    const randomHouse = Object.keys(houses)[Math.floor(Math.random())*Object.keys(houses).length];
    aStudent.house = randomHouse;
    
    // finally I'm just console.logging the new student
    console.log(aStudent);

    // put the new student in the existing array
    students.push( aStudent );
}