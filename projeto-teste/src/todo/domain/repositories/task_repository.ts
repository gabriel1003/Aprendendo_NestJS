import { Injectable } from "@nestjs/common";
import { TaskEntity } from "../entities/task";

@Injectable()
export abstract class TaskRepository {
    abstract setTask( args: TaskEntity): Promise<TaskEntity>;

    abstract getTasks(): Promise<TaskEntity[]>;
    
}