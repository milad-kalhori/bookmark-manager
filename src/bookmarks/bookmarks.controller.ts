import { Controller, Get, Param } from '@nestjs/common';
import { BookmarksService } from './bookmarks.service';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private bookmarkService: BookmarksService){}

  @Get()
  findAll(){
    return this.bookmarkService.findAll()
  }

  @Get('/:id')
  findById(@Param('id') id: string){
    return this.bookmarkService.findOneById()
  }
}
