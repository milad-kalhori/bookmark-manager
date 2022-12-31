import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import {CreateMessageDto} from './dtos/create-message.dto'

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'hello world!'
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {}

  @Get('/:id')
  getMessage(@Param('id')id: string) {}
}



