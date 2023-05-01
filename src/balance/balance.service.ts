import { Injectable } from '@nestjs/common';

const BALANCE = {
  id: 1,
  total: 2500000,
};

@Injectable()
export class BalanceService {
  async findOne() {
    return BALANCE;
  }
}
