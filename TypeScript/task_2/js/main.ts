interface DirectorInterface {
    workFromHome(): string;
    getCofeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCofeeBreak(): string;
    workTeackerTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCofeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks"
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCofeeBreak(): string {
        return "Cannot have a break";
    }

    workTeackerTasks(): string {
        return "Getting to work";
    }
}

function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

function isDirector(employee: any): boolean {
    if (employee instanceof Director) {
        return true;
    } else {
        return false;
    }
}

function executeWork(employee: any) {
    if (employee instanceof Teacher) {
        console.log(employee.workTeackerTasks());
    } else if (employee instanceof Director) {
        console.log(employee.workDirectorTasks());
    }
}

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects){
    if (todayClass === "Math")
    {
        return "Teaching Math";
    } else {
        return "Teaching History";
    }
}

console.log(teachClass("Math"));
console.log(teachClass("History"));
