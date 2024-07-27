
import { Injectable } from "@nestjs/common";
import { TaskEntity } from "@todoserver/todo/domain/entities/task";
import { TaskRepository } from "@todoserver/todo/domain/repositories/task_repository";

@Injectable()
 export class TaskRepositoryImpl implements TaskRepository {
     setTask(args: TaskEntity): Promise<TaskEntity> {
         throw new Error("Method not implemented.");
     }

}