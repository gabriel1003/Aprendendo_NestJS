
import { Injectable } from "@nestjs/common";
import { TaskEntity } from "@todoserver/todo/domain/entities/task";
import { GetTaskRepository } from "@todoserver/todo/domain/repositories/get_task_repository";
import { TaskRepository } from "@todoserver/todo/domain/repositories/task_repository";

@Injectable()
export class TaskRepositoryImpl implements TaskRepository, GetTaskRepository {
    setTask(args: TaskEntity): Promise<TaskEntity> {
        throw new Error("Method not implemented.");
    }

    getTask(args: TaskEntity): Promise<TaskEntity> {

        throw new Error("Method not implemented.");
    }

}