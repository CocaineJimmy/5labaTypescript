// src/abiturient.router.ts
import { Router, Request, Response, NextFunction } from 'express';
import { Abiturient } from './abiturient.model';
import * as abiturientService from './abiturient.service';
import * as examService from './exam.service';

const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const list = await abiturientService.getAll();
    res.json(list.map(Abiturient.toResponse));
  } catch (err) {
    next(err);
  }
});

router.get('/:abiturientId', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const abiturient = await abiturientService.getById(req.params.abiturientId);
    if (!abiturient) return res.status(404).json({ message: 'Not found' });
    res.json(Abiturient.toResponse(abiturient));
  } catch (err) {
    next(err);
  }
});

router.get('/:abiturientId/exams', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const exams = await examService.getExamsByAbiturient(req.params.abiturientId);
    res.json(exams);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newAbiturient = await abiturientService.create(req.body);
    res.status(201).json(Abiturient.toResponse(newAbiturient));
  } catch (err) {
    next(err);
  }
});

router.put('/:abiturientId', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updated = await abiturientService.update(req.params.abiturientId, req.body);
    if (!updated) return res.status(404).json({ message: 'Not found' });
    res.json(Abiturient.toResponse(updated));
  } catch (err) {
    next(err);
  }
});

router.delete('/:abiturientId', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const removed = await abiturientService.remove(req.params.abiturientId);
    if (!removed) return res.status(404).json({ message: 'Not found' });
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

export default router;
