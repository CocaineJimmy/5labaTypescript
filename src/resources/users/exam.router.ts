// src/exam.router.ts
import { Router, Request, Response, NextFunction } from 'express';
import { Exam } from './exam.model';
import * as examService from './exam.service';

const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const exams = await examService.getAll();
    res.json(exams.map(Exam.toResponse));
  } catch (err) {
    next(err);
  }
});

router.get('/:examId', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const exam = await examService.getById(req.params.examId);
    if (!exam) return res.status(404).json({ message: 'Not found' });
    res.json(Exam.toResponse(exam));
  } catch (err) {
    next(err);
  }
});

// Для простоты, если в экзамене указан teacherId, возвращаем его в виде массива
router.get('/:examId/teachers', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const exam = await examService.getById(req.params.examId);
    if (!exam) return res.status(404).json({ message: 'Exam not found' });
    if (exam.teacherId) {
      res.json([{ teacherId: exam.teacherId }]);
    } else {
      res.json([]);
    }
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newExam = await examService.create(req.body);
    res.status(201).json(Exam.toResponse(newExam));
  } catch (err) {
    next(err);
  }
});

router.put('/:examId', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updated = await examService.update(req.params.examId, req.body);
    if (!updated) return res.status(404).json({ message: 'Not found' });
    res.json(Exam.toResponse(updated));
  } catch (err) {
    next(err);
  }
});

router.delete('/:examId', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const removed = await examService.remove(req.params.examId);
    if (!removed) return res.status(404).json({ message: 'Not found' });
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

export default router;
