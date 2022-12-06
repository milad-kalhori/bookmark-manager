import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { MiladModule } from './milad/milad.module';

@Module({
  imports: [BookmarksModule, MiladModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
