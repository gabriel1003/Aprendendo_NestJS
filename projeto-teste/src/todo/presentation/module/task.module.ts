import { Module } from "@nestjs/common";
import { TaskController } from "../controllers/task.controller";
import { SetTaskUseCase } from "@todoserver/todo/domain/use-cases/set_task/set_task";
import { TaskRepository } from "@todoserver/todo/domain/repositories/task_repository";
import { TaskRepositoryImpl } from "@todoserver/todo/data/repository/task_repository_impl";
import { GetTaskUseCase } from "@todoserver/todo/domain/use-cases/get_task/get_task";
import { PrismaModule } from "@todoserver/prisma/presentation/module/prisma.module";

@Module({

    imports: [PrismaModule],
    
    controllers: [TaskController],
    providers: [SetTaskUseCase,
        GetTaskUseCase,
        {
            provide: TaskRepository,
            useClass: TaskRepositoryImpl
        }
    ]
})
export class TaskModule {

}