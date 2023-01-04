import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesRepository {
  findAll(){
  }

  findOne(id: string){
    return true
  }

  create(content: string){
  }

  update(){

  }

  delete() {

  }
}
