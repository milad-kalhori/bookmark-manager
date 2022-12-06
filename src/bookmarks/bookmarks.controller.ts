import { Controller } from '@nestjs/common';
import { BookmarksService } from './bookmarks.service';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private bookmarkService: BookmarksService){}

  test(){
    return this.bookmarkService
  }
}
