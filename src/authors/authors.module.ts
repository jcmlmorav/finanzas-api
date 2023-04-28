import { Module } from '@nestjs/common';
import { AuthorsResolver } from './authors.resolver';
import { AuthorsService } from './authors.service';
import { PostsModule } from '..//posts/posts.module';
import { PostsService } from 'src/posts/posts.service';

@Module({
  imports: [PostsModule],
  providers: [AuthorsService, AuthorsResolver, PostsService],
})
export class AuthorsModule {}
