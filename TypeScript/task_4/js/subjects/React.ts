namespace Subjects{
    export interface Teacher {
        experienceTeachingReact?: number;
    }

    export class React  extends Subject{
        getRequirements() {
            return "getRequirements";
        }

        getAvailableTeacher() {
            if (this.teacher.experienceTeachingReact > 0) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return `No available teacher`;
            }
        }
    }
}