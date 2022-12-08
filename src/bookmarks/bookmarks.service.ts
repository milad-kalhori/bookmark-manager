import { Injectable } from '@nestjs/common';

@Injectable()
export class BookmarksService {
  private bokkMarks = [{
    id : 7,
    name: "milad",
    age: 22
  }]

  findAll(){
    return this.bokkMarks
  }
}
