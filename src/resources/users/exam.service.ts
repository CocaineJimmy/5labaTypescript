// src/exam.service.ts
import * as examRepo from './exam.memory.repository';
import { IExam } from './exam.model';

export async function getAll(): Promise<IExam[]> {
  return await examRepo.getAll();
}

export async function getById(id: string): Promise<IExam | undefined> {
  return await examRepo.getById(id);
}

export async function create(data: Omit<IExam, 'id'>): Promise<IExam> {
  return await examRepo.create(data);
}

export async function update(id: string, data: Partial<Omit<IExam, 'id'>>): Promise<IExam | null> {
  return await examRepo.update(id, data);
}

export async function remove(id: string): Promise<IExam | null> {
  return await examRepo.remove(id);
}

export async function getExamsByAbiturient(abiturientId: string): Promise<IExam[]> {
  return await examRepo.getByAbiturientId(abiturientId);
}

/**
 * При удалении абитуриента:
 *   - Если у экзамена значение teacherId равно null – экзамен удаляется,
 *   - иначе поле abiturientId обновляется на null.
 */
export async function handleAbiturientDeletion(abiturientId: string): Promise<void> {
  const exams = await examRepo.getByAbiturientId(abiturientId);
  for (const exam of exams) {
    if (exam.teacherId === null) {
      await examRepo.remove(exam.id);
    } else {
      await examRepo.update(exam.id, { abiturientId: null });
    }
  }
}
