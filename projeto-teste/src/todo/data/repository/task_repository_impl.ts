
import { Injectable } from "@nestjs/common";
import { PrismaService } from "@todoserver/prisma/data/service/prisma.service";
import { TaskEntity } from "@todoserver/todo/domain/entities/task";

import { TaskRepository } from "@todoserver/todo/domain/repositories/task_repository";

@Injectable()
export class TaskRepositoryImpl implements TaskRepository {

    constructor( readonly prismaServer: PrismaService ) {};
    
    async getTasks(): Promise<TaskEntity[]> {
     const tasks = await this.prismaServer.task.findMany();
     return tasks.map(task => new TaskEntity(task));
    }

    async setTask(args: TaskEntity): Promise<TaskEntity> {
        
        const createdTask = await this.prismaServer.task.create({
            data: {
                description: args.description,
                completed: args.completed
            }
        });
        return new TaskEntity(createdTask);
    }


}