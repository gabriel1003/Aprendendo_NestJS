import { Module } from "@nestjs/common";
import { TaskModule } from "@todoserver/todo/presentation/module/task.module";

@Module( {
    imports: [TaskModule]
})
export class AppModule {

}