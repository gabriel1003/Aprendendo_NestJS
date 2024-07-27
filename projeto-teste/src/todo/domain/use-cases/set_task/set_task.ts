import { Injectable } from "@nestjs/common";
import { TaskEntity } from "../../entities/task";
import { TaskRepository } from "../../repositories/task_repository";

@Injectable()
export class SetTaskUseCase {

    constructor(readonly taskRepository: TaskRepository) {}
    async call( args: TaskEntity): Promise<TaskEntity> {

        return await this.taskRepository.setTask(args);
    }
}