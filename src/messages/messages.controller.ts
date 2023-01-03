import { Controller, Get, Post, Body, Param, NotFoundExeption } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto'
import { MessagesService } from './messages.service'

@Controller('messages')
export class MessagesController {
  constructor (public messageService: MessagesService){
  }

  @Get()
  listMessages() {
    return 'hello world!'
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {}

  @Get('/:id')
  async getMessage(@Param('id')id: string) {
    const message = await this.messageService.findOne()
    if (!message) {
      throw new Error(NotFoundExeption)
    }
  }
}



