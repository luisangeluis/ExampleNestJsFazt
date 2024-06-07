import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, Req, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { Request, Response } from "express";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { ApiTags } from "@nestjs/swagger";
//You can create a controller file with the command: 
// nest generate controller nameOfDirectory
// nest generate controller nameOfDirectory --no-spec

// Creating a prexis at everything
// @Controller()
@ApiTags("tasks")
@Controller("/tasks")
export class TasksController{
  //Constructor forma 1 
  // tasksService: TasksService;
  // constructor(tasksService:TasksService){
  //   this.tasksService = tasksService;
  // }

  //Constructor forma 2
  constructor(private tasksService: TasksService) {}

  // @Get("/tasks")
  @Get()
  getAllTasks(@Req() req:Request, @Res() res:Response, @Query() query:any){
    console.log(query);
    
    const tasks = this.tasksService.getAllTask();

    return res.status(200).json(tasks)
    
  }

  @Get("/:id")
  getTask(@Req() req:Request, @Res() res:Response, @Param("id") id:string ){

    
    
    const tasks = this.tasksService.getTask(parseInt(id));

    return res.status(200).json(tasks)
    
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createTask(@Body() task:CreateTaskDto){
    return this.tasksService.createTask(task);
  }

  @Put()
  updateTask(@Body() task:UpdateTaskDto ){
    return "Updating task";
  }

  @Delete()
  deleteTask(){
    return "Deleting task";
  }

  @Patch()
  updateTaskStatus(){
    return "Updating task status";
  }
}