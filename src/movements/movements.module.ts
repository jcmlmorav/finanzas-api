import { Module } from '@nestjs/common';
import { MovementsResolver } from './movements.resolver';
import { MovementsService } from './movements.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Movement, MovementSchema } from './schemas/movement.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Movement.name, schema: MovementSchema },
    ]),
  ],
  providers: [MovementsResolver, MovementsService],
})
export class MovementsModule {}
