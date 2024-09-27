interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    [name: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}
