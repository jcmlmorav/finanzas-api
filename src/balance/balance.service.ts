import { Injectable } from '@nestjs/common';
import { Balance } from './schemas/balance.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

/* const BALANCE = {
  id: 1,
  total: 2500000,
}; */

@Injectable()
export class BalanceService {
  constructor(
    @InjectModel(Balance.name) private balanceModel: Model<Balance>
  ) {}

  async findOne(): Promise<Balance> {
    return this.balanceModel.findOne().exec();
  }

  async update(amount: number): Promise<Balance> {
    const balance = await this.balanceModel.findOneAndUpdate({}, {});

    balance.total = balance.total + amount;
    balance.save();

    return balance;
  }
}
