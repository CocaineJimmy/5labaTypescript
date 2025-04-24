// src/abiturient.memory.repository.ts
export interface Abiturient {
  id: string;
  name: string;
  email: string;
}

let abiturients: Abiturient[] = [];
let nextId = 1;

export function getAll(): Promise<Abiturient[]> {
  return Promise.resolve(abiturients);
}

export function getById(id: string): Promise<Abiturient | undefined> {
  return Promise.resolve(abiturients.find(a => a.id === id));
}

export function create(data: Omit<Abiturient, 'id'>): Promise<Abiturient> {
  const abiturient: Abiturient = { ...data, id: String(nextId++) };
  abiturients.push(abiturient);
  return Promise.resolve(abiturient);
}

export function update(
  id: string,
  data: Partial<Omit<Abiturient, 'id'>>
): Promise<Abiturient | null> {
  const index = abiturients.findIndex(a => a.id === id);
  if (index === -1) return Promise.resolve(null);
  abiturients[index] = { ...abiturients[index], ...data };
  return Promise.resolve(abiturients[index]);
}

export function remove(id: string): Promise<Abiturient | null> {
  const index = abiturients.findIndex(a => a.id === id);
  if (index === -1) return Promise.resolve(null);
  const removed = abiturients.splice(index, 1)[0];
  return Promise.resolve(removed);
}

export function _getAllAbiturients(): Abiturient[] {
  return abiturients;
}
