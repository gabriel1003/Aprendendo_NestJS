import { Module } from "@nestjs/common";
import { PrismaService } from "@todoserver/prisma/data/service/prisma.service";

@Module({
    providers: [PrismaService],
    exports: [PrismaService]
})
export class PrismaModule {

}