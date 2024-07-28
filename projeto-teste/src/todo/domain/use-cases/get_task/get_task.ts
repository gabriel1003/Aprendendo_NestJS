import { Injectable } from "@nestjs/common";
import { GetTaskRepository } from "../../repositories/get_task_repository";
import { TaskEntity } from "../../entities/task";

@Injectable()
export class GetTaskUseCase {

    constructor( readonly getRepository: GetTaskRepository) {}

    async call( args: TaskEntity): Promise<TaskEntity> {

        return await this.getRepository.getTask(args);
    }
}