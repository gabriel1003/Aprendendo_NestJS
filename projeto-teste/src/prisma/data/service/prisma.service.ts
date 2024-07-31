import { OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { Prisma, PrismaClient } from "@prisma/client";

export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {

    constructor(){
        super({
            log: [],
            errorFormat: 'pretty'
        });
    };

    onModuleDestroy() {
        
        return this.$disconnect();
    }

    onModuleInit() {
        return this.$connect();
    }
    
}