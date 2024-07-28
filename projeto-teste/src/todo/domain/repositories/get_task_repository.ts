import { Injectable } from "@nestjs/common";
import { TaskEntity } from "../entities/task";

@Injectable()
export abstract class GetTaskRepository {

    abstract getTask( args: TaskEntity): Promise<TaskEntity>;
}