import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { config } from './ormconfig';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TarefasModule } from './tarefas/tarefas.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), TarefasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
