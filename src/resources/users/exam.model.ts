// src/exam.model.ts
export interface IExam {
    id: string;
    subject: string;
    abiturientId: string | null;
    teacherId: string | null;
  }
  
  export class Exam {
    id: string;
    subject: string;
    abiturientId: string | null;
    teacherId: string | null;
  
    constructor({ id, subject, abiturientId, teacherId }: IExam) {
      this.id = id;
      this.subject = subject;
      this.abiturientId = abiturientId;
      this.teacherId = teacherId;
    }
  
    static toResponse(exam: IExam): IExam {
      const { id, subject, abiturientId, teacherId } = exam;
      return { id, subject, abiturientId, teacherId };
    }
  }
  