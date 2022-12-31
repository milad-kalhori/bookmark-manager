import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'hello world!'
  }

  @Post()
  createMessage(@Body() body: any) {}

  @Get('/:id')
  getMessage(@Param('id')id: string) {}
}
