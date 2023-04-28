import { Injectable } from '@nestjs/common';
import { Author } from './models/author.model';

@Injectable()
export class AuthorsService {
  async findOneByid(id: number) {
    return {
      id,
      firstName: 'Juan',
      lastName: 'Camilo',
      posts: [Author]
    }
  }
}
