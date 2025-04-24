// src/abiturient.model.ts
export interface IAbiturient {
  id: string;
  name: string;
  email: string;
}

export class Abiturient {
  id: string;
  name: string;
  email: string;

  constructor({ id, name, email }: IAbiturient) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  static toResponse(abiturient: IAbiturient): { id: string; name: string; email: string } {
    const { id, name, email } = abiturient;
    return { id, name, email };
  }
}
