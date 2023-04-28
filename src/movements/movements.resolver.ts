import { Resolver, Query, Args } from '@nestjs/graphql';
import { Movement } from './models/movements.model';
import { MovementsService } from './movements.service';

@Resolver((of) => Movement)
export class MovementsResolver {
  constructor(private movementsService: MovementsService) {}

  @Query((returns) => [Movement], { name: 'movements' })
  async getMovements(@Args('type') type: string) {
    return this.movementsService.findByType(type);
  }
}
