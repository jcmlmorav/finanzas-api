import { Module } from '@nestjs/common';
import { BalanceResolver } from './balance.resolver';
import { BalanceService } from './balance.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Balance, BalanceSchema } from './schemas/balance.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Balance.name, schema: BalanceSchema }]),
  ],
  providers: [BalanceResolver, BalanceService],
})
export class BalanceModule {}
