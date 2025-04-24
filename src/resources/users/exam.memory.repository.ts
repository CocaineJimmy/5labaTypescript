// src/exam.memory.repository.ts
export interface Exam {
    id: string;
    subject: string;
    abiturientId: string | null;
    teacherId: string | null;
  }
  
  let exams: Exam[] = [];
  let nextId = 1;
  
  export function getAll(): Promise<Exam[]> {
    return Promise.resolve(exams);
  }
  
  export function getById(id: string): Promise<Exam | undefined> {
    return Promise.resolve(exams.find(e => e.id === id));
  }
  
  export function create(data: Omit<Exam, 'id'>): Promise<Exam> {
    const exam: Exam = { ...data, id: String(nextId++) };
    exams.push(exam);
    return Promise.resolve(exam);
  }
  
  export function update(
    id: string,
    data: Partial<Omit<Exam, 'id'>>
  ): Promise<Exam | null> {
    const index = exams.findIndex(e => e.id === id);
    if (index === -1) return Promise.resolve(null);
    exams[index] = { ...exams[index], ...data };
    return Promise.resolve(exams[index]);
  }
  
  export function remove(id: string): Promise<Exam | null> {
    const index = exams.findIndex(e => e.id === id);
    if (index === -1) return Promise.resolve(null);
    const removed = exams.splice(index, 1)[0];
    return Promise.resolve(removed);
  }
  
  export function getByAbiturientId(abiturientId: string): Promise<Exam[]> {
    return Promise.resolve(exams.filter(e => e.abiturientId === abiturientId));
  }
  
  export function _exams(): Exam[] {
    return exams;
  }
  