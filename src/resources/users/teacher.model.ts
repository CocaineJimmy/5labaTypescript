// src/teacher.model.ts
export interface ITeacher {
    id: string;
    name: string;
    subject: string;
  }
  
  export class Teacher {
    id: string;
    name: string;
    subject: string;
  
    constructor({ id, name, subject }: ITeacher) {
      this.id = id;
      this.name = name;
      this.subject = subject;
    }
  
    static toResponse(teacher: ITeacher): ITeacher {
      const { id, name, subject } = teacher;
      return { id, name, subject };
    }
  }
  