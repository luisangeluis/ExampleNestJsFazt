import { Module } from "@nestjs/common";
import { TasksController } from "./tasks.controller";
import { TasksService } from './tasks.service';

//You can create a module with the command nest g mo nombreDelModulo
@Module({
  controllers:[TasksController],
  providers: [TasksService]
})
export class TasksModule{

}