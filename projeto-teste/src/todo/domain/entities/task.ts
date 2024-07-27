

export class TaskEntity {
    readonly id: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly description: string;
    readonly completed: boolean;

    constructor( args: Partial<TaskEntity>) {

        Object.assign(this, args);
    }
}