import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Movement } from './models/movements.model';
import { MovementsService } from './movements.service';
import { CreateMovementInput } from './inputs/create.input';
import { UpdateMovementInput } from './inputs/update.input';

@Resolver((of) => Movement)
export class MovementsResolver {
  constructor(private movementsService: MovementsService) {}

  @Query((returns) => [Movement], { name: 'movements' })
  async getMovements(@Args('type') type: string) {
    return this.movementsService.findByType(type);
  }

  @Query((returns) => Movement, { name: 'movement' })
  async getMovement(@Args('id') id: string) {
    return this.movementsService.findById(id);
  }

  @Mutation((returns) => Movement)
  async createMovement(@Args('movement') movement: CreateMovementInput) {
    return this.movementsService.create(movement);
  }

  @Mutation((returns) => Movement)
  async updateMovement(@Args('movement') movement: UpdateMovementInput) {
    return this.movementsService.update(movement);
  }
}
