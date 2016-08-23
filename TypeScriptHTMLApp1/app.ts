//class Greeter {
//    element: HTMLElement;
//    span: HTMLElement;
//    timerToken: number;

//    constructor(element: HTMLElement) {
//        this.element = element;
//        this.element.innerHTML += "The time is: ";
//        this.span = document.createElement('span');
//        this.element.appendChild(this.span);
//        this.span.innerText = new Date().toUTCString();
//    }

//    start() {
//        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
//    }

//    stop() {
//        clearTimeout(this.timerToken);
//    }

//}

//window.onload = () => {
//    var el = document.getElementById('content');
//    var greeter = new Greeter(el);
//    greeter.start();
//};
class Student {
    fullName: string;
    constructor(public firstName, public middleName, public lastName) {
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}
function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = {firstName:"Sujay",lastName:"Adkar"};

window.onload = () => {
    //document.body.innerHTML = greeter(user);
    var user = new Student('sujay', 'sudhir', 'adkar');
    document.body.innerHTML = user.fullName;
};
