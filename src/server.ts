// src/server.ts
import express from 'express';
import { config } from './config';
import abiturientRouter from './abiturient.router';
import examRouter from './exam.router';
import teacherRouter from './teacher.router';

const app = express();

app.use(express.json());

app.use('/abiturients', abiturientRouter);
app.use('/exams', examRouter);
app.use('/teachers', teacherRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
