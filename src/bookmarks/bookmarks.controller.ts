import { Controller, Get } from '@nestjs/common';
import { BookmarksService } from './bookmarks.service';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private bookmarkService: BookmarksService){}

  @Get()
  test(){
    return this.bookmarkService.findAll()
  }
}
