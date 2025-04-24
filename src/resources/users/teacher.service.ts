// src/teacher.service.ts
import * as teacherRepo from './teacher.memory.repository';
import { ITeacher } from './teacher.model';

export async function getAll(): Promise<ITeacher[]> {
  return await teacherRepo.getAll();
}

export async function getById(id: string): Promise<ITeacher | undefined> {
  return await teacherRepo.getById(id);
}

export async function create(data: Omit<ITeacher, 'id'>): Promise<ITeacher> {
  return await teacherRepo.create(data);
}

export async function update(id: string, data: Partial<Omit<ITeacher, 'id'>>): Promise<ITeacher | null> {
  return await teacherRepo.update(id, data);
}

export async function remove(id: string): Promise<ITeacher | null> {
  return await teacherRepo.remove(id);
}
