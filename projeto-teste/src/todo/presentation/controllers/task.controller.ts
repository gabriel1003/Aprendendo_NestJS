import { Body, Controller, Post } from "@nestjs/common";
import { TaskEntity } from "@todoserver/todo/domain/entities/task";
import { SetTaskUseCase } from "@todoserver/todo/domain/use-cases/set_task/set_task";

@Controller("task")
export class TaskController {

    constructor(readonly setTaskUseCase: SetTaskUseCase) {}

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
}