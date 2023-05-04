import { Module } from '@nestjs/common';
import { MovementsResolver } from './movements.resolver';
import { MovementsService } from './movements.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Movement, MovementSchema } from './schemas/movement.schema';
import { BalanceModule } from 'src/balance/balance.module';

@Module({
  imports: [
    BalanceModule,
    MongooseModule.forFeature([
      { name: Movement.name, schema: MovementSchema },
    ]),
  ],
  providers: [MovementsResolver, MovementsService],
})
export class MovementsModule {}
