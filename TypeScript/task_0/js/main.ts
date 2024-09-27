interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentA: Student = {
    firstName: "Lollipop",
    lastName: "Android 5",
    age: 10,
    location: "Palo Alto"
}

const studentB: Student = {
    firstName: "Nougcat",
    lastName: "Android 8",
    age: 8,
    location: "Palo Alto"
}

const list: Student[] = [studentA, studentB];

const table = document.createElement('table');
const tableBody = document.createElement('tbody');

list.forEach((item) => {
    const r = document.createElement('tr');

    const cell1 = document.createElement('td');
    cell1.textContent = item.firstName;

    const cell2 = document.createElement('td');
    cell2.textContent = item.location;

    r.appendChild(cell1);
    r.appendChild(cell2);

    tableBody.appendChild(r);
});

table.appendChild(tableBody);
document.body.appendChild(table);
