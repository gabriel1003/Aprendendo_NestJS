import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post } from "@nestjs/common";
import { TaskEntity } from "@todoserver/todo/domain/entities/task";
import { GetTaskUseCase } from "@todoserver/todo/domain/use-cases/get_task/get_task";
import { SetTaskUseCase } from "@todoserver/todo/domain/use-cases/set_task/set_task";

@Controller("task")
export class TaskController {

    constructor(readonly setTaskUseCase: SetTaskUseCase, readonly getTaskUseCase: GetTaskUseCase) {}

    @Post("set")
    async setTask(@Body() input: unknown): Promise<TaskEntity> {
        return await this.setTaskUseCase.call(new TaskEntity({
            completed: input["completed"],
            createdAt: input["createdAt"],
description: input["description"],
updatedAt: input["updatedAt"],
id: input["id"],

        }))
    }

    @Get()
    async getTask(): Promise<TaskEntity[]> {

        const taskEntity = new TaskEntity({});

        const task = await this.getTaskUseCase.call(taskEntity);

        if (!task) {
            throw new NotFoundException('Task not Fond');
        }

        return task;
    }
}