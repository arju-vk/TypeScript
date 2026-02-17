"use strict";
class Person {
    // Constructor
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    // Methods
    introduce() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
    //Getter
    getName() {
        return this.name;
    }
    //Setter
    setName(name) {
        this.name = name;
    }
}
class Employee {
    constructor(id, name, department) {
        this.id = id;
        this.name = name;
        this.department = department;
    }
    getDetails() {
        return `${this.name} works in ${this.department}`;
    }
}
let Arjun = new Employee(101, "Arjun", "Engineering");
console.log(Arjun.getDetails());
class Manager extends Employee {
    constructor(id, name, department, teamSize) {
        super(id, name, department);
        this.teamSize = teamSize;
    }
    getTeamInfo() {
        return `${this.name} manages ${this.teamSize} people`;
    }
}
