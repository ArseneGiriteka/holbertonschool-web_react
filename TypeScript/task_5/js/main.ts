interface sumMajorCredits {
    credits: number;
    brand: 'major';
}

interface sumMinorCredits {
    credits: number;
    brand: 'minor';
}

function sumMajorCredits(subject1: sumMajorCredits, subject2: sumMajorCredits): number {
    return subject1.credits + subject2.credits;
}

function sumMinorCredits(subject1: sumMinorCredits, subject2: sumMinorCredits): number {
    return subject1.credits + subject2.credits;
}
