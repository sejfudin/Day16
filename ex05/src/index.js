class Microsoft {
    constructor(name) {
        this.name = name;
    }
    get getter() {
        return this.name;
    }
    set setter(newName) {
        this.name = newName;
    }
    occupation() {
        return this.name + " is a philanthropist!";
    }
}

class Facebook extends Microsoft {
    constructor(name, age) {
        super(name);
        this.age = age;
    }

    studentAge() {
        return `${this.name} is ${this.age}`;
    }
}
const henry = new Microsoft("William Henry Gates III");
console.log(henry.occupation());
const elliot = new Facebook("Mark Elliot Zuckerberg", 23);
console.log(elliot.occupation());
console.log(elliot.studentAge());
module.exports = {
    Microsoft,
    Facebook,
};