import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private task = [
    {
      id: 1,
      title: 'Complete project proposal',
      description: 'Finish writing the project proposal by Friday',
      due_date: '2023-03-18',
      completed: false,
    },
    {
      id: 2,
      title: 'Buy groceries',
      description: 'Pick up milk, bread, and eggs at the store',
      due_date: '2023-03-14',
      completed: true,
    },
    {
      id: 3,
      title: 'Schedule dentist appointment',
      description: 'Call dentist to schedule appointment for next month',
      due_date: '2023-03-15',
      completed: false,
    },
  ];

  getAlltasks() {
    return this.task;
  }
}
