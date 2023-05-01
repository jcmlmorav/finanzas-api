import { Resolver, Query } from '@nestjs/graphql';
import { Balance } from './models/balance.model';
import { BalanceService } from './balance.service';

@Resolver((of) => Balance)
export class BalanceResolver {
  constructor(private balanceService: BalanceService) {}

  @Query((returns) => Balance, { name: 'balance' })
  async getBalance() {
    return this.balanceService.findOne();
  }
}
