import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Movement } from './schemas/movement.schema';
import { CreateMovementDto } from './dtos/create.dto';
import { BalanceService } from 'src/balance/balance.service';

/* const MOVEMENTS = [
  {
    id: 0,
    type: 'income',
    date: 1682644456959,
    description: 'Mi primer ingreso',
    amount: 20000,
  },
  {
    id: 1,
    type: 'income',
    date: 1682644456959,
    description: 'Mi segundo ingreso',
    amount: 150000,
  },
  {
    id: 2,
    type: 'expense',
    date: 1682644456959,
    description: 'Mi primer egreso',
    amount: 80000,
  },
]; */

@Injectable()
export class MovementsService {
  constructor(
    @InjectModel(Movement.name) private movementModel: Model<Movement>,
    private balanceService: BalanceService
  ) {}

  async create(createMovementDto: CreateMovementDto): Promise<Movement> {
    const movementCreated = new this.movementModel(createMovementDto);
    this.balanceService.update(movementCreated.type, movementCreated.amount);
    return movementCreated.save();
  }

  async findByType(type: string): Promise<Movement[]> {
    return this.movementModel.find({ type: type }).exec();
  }
}
