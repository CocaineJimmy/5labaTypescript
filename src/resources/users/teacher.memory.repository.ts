// src/teacher.memory.repository.ts
export interface Teacher {
    id: string;
    name: string;
    subject: string;
  }
  
  let teachers: Teacher[] = [];
  let nextId = 1;
  
  export function getAll(): Promise<Teacher[]> {
    return Promise.resolve(teachers);
  }
  
  export function getById(id: string): Promise<Teacher | undefined> {
    return Promise.resolve(teachers.find(t => t.id === id));
  }
  
  export function create(data: Omit<Teacher, 'id'>): Promise<Teacher> {
    const teacher: Teacher = { ...data, id: String(nextId++) };
    teachers.push(teacher);
    return Promise.resolve(teacher);
  }
  
  export function update(id: string, data: Partial<Omit<Teacher, 'id'>>): Promise<Teacher | null> {
    const index = teachers.findIndex(t => t.id === id);
    if (index === -1) return Promise.resolve(null);
    teachers[index] = { ...teachers[index], ...data };
    return Promise.resolve(teachers[index]);
  }
  
  export function remove(id: string): Promise<Teacher | null> {
    const index = teachers.findIndex(t => t.id === id);
    if (index === -1) return Promise.resolve(null);
    const removed = teachers.splice(index, 1)[0];
    return Promise.resolve(removed);
  }
  