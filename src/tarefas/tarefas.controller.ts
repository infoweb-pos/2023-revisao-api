import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';

@Controller('tarefas')
export class TarefasController {
  constructor(private readonly tarefasService: TarefasService) {}

  @Post()
  async create(@Body() createTarefaDto: CreateTarefaDto) {
    return {
      estado: 'ok',
      mensagem: 'tarefa criada',
      dados: await this.tarefasService.create(createTarefaDto),
    };
  }

  @Get()
  async findAll() {
    return {
      estado: 'ok',
      mensagem: 'todas as tarefas listadas',
      dados: await this.tarefasService.findAll(),
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tarefasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTarefaDto: UpdateTarefaDto) {
    return this.tarefasService.update(+id, updateTarefaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const { affected } = await this.tarefasService.remove(+id);
    if (affected === 1) {
      return {
        estado: 'ok',
        mensagem: `tarefa ${id} removida com sucesso`,
      };
    } else {
      return {
        estado: 'nok',
        mensagem: `tarefa ${id} NÃO removida`,
      };
    }
  }
}
