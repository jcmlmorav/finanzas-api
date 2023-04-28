import { Module } from '@nestjs/common';
import { MovementsResolver } from './movements.resolver';
import { MovementsService } from './movements.service';

@Module({
  imports: [],
  providers: [MovementsResolver, MovementsService],
})
export class MovementsModule {}
