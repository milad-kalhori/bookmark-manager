import { Controller, Get, Post, Put, Patch, Delete, Body, Param, NotFoundExeption } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto'
import { MessagesService } from './messages.service'

@Controller('messages')
export class MessagesController {
  constructor (public messageService: MessagesService){
  }

  @Get()
  listMessages() {
    return this.messageService.findAll()
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messageService.create(body.content)
  }

  @Get('/:id')
  async getMessage(@Param('id')id: string) {
    const message = await this.messageService.findOne(id)
    if (!message) {
      throw new Error(NotFoundExeption)
    }
  }

  @Patch()
  update() {
    return 'hello world!'
  }

  @Delete()
  delete() {
    return 'hello world!'
  }
}



