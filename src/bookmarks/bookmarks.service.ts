import { Injectable } from '@nestjs/common';
import { threadId } from 'worker_threads';

@Injectable()
export class BookmarksService {
  private bookkMarks = [{
    id : 7,
    name: "milad",
    age: 24
  }]

  findAll(){
    return this.bookkMarks
  }

  findOneById(id){
    return this.bookkMarks.find((item)=> item.id === id )
  }

}
