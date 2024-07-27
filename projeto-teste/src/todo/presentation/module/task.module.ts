import { Module } from "@nestjs/common";
import { TaskController } from "../controllers/task.controller";
import { SetTaskUseCase } from "@todoserver/todo/domain/use-cases/set_task/set_task";
import { TaskRepository } from "@todoserver/todo/domain/repositories/task_repository";
import { TaskRepositoryImpl } from "@todoserver/todo/data/repository/task_repository_impl";

@Module({
    controllers: [TaskController],
    providers: [SetTaskUseCase,
        {
            provide: TaskRepository,
            useClass: TaskRepositoryImpl
        }
    ]
})
export class TaskModule {

}