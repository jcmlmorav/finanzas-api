import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  async findAll(author) {
    return [
      {
        id: 1,
        title: 'My Post One',
        votes: 0
      }
    ]
  }
}
