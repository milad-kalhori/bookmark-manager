import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';


@Injectable()
export class MessagesService {
  constructor(public messagesRepository: MessagesRepository){
  }

  findAll(){
    return this.messagesRepository.findAll()
  }

  findOne(id: string){
    return this.messagesRepository.findOne(id)
  }

  create(content: string){
    return this.messagesRepository.create(content)
  }

  update(id: string){

  }

  delete(id: string) {

  }
}
