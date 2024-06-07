import { Injectable } from '@nestjs/common';
import { UpdateTaskDto } from './dto/update-task.dto';

export interface task{
  id: number,
  title:string
}

@Injectable()
export class TasksService {
  private tasks = [];

  getAllTask():task[]{
    return this.tasks;

  }

  getTask(id:number){
    return this.tasks.find(task=> task.id === id);
  }

  createTask(task){
    this.tasks.push({...task,id:this.tasks.length+1});
    return task;
  }

  updateTask(task:UpdateTaskDto){
    return "actualizando tarea"
  }
}
