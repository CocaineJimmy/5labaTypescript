// src/abiturient.service.ts
import * as abiturientRepo from './abiturient.memory.repository';
import * as examService from './exam.service';
import { IAbiturient } from './abiturient.model';

export async function getAll(): Promise<IAbiturient[]> {
  return await abiturientRepo.getAll();
}

export async function getById(id: string): Promise<IAbiturient | undefined> {
  return await abiturientRepo.getById(id);
}

export async function create(data: Omit<IAbiturient, 'id'>): Promise<IAbiturient> {
  return await abiturientRepo.create(data);
}

export async function update(
  id: string,
  data: Partial<Omit<IAbiturient, 'id'>>
): Promise<IAbiturient | null> {
  return await abiturientRepo.update(id, data);
}

/**
 * При удалении абитуриента:
 *   - Удаляется запись абитуриента.
 *   - Для каждого экзамена с данным abiturientId:
 *       • если teacherId равен null, экзамен удаляется,
 *       • иначе abiturientId обновляется на null.
 */
export async function remove(id: string): Promise<IAbiturient | null> {
  const removed = await abiturientRepo.remove(id);
  if (removed) {
    await examService.handleAbiturientDeletion(id);
  }
  return removed;
}
