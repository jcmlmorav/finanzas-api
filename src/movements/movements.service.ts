import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Movement } from './schemas/movement.schema';
import { CreateMovementDto } from './dtos/create.dto';
import { UpdateMovementDto } from './dtos/update.dto';
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
    private balanceService: BalanceService,
  ) {}

  async findByType(type: string): Promise<Movement[]> {
    return this.movementModel.find({ type: type }).exec();
  }

  async findById(id: string): Promise<Movement> {
    return this.movementModel.findById(id);
  }

  async create(createMovementDto: CreateMovementDto): Promise<Movement> {
    const movementCreated = new this.movementModel(createMovementDto);

    const computedAmount =
      createMovementDto.type === 'income'
        ? createMovementDto.amount
        : -createMovementDto.amount;

    this.balanceService.update(computedAmount);

    return movementCreated.save();
  }

  async update(updateMovementDto: UpdateMovementDto): Promise<Movement> {
    const { id, type, description, date, amount } = updateMovementDto;
    const movementSaved = await this.movementModel.findByIdAndUpdate(id);

    let computedAmount = 0;

    if (movementSaved.type && type) {
      const difference = movementSaved.amount - amount;

      if (type === 'income') {
        computedAmount = -(difference);
      } else {
        computedAmount = difference;
      }
    }

    if (movementSaved.type === 'income' && type === 'expense') {
      computedAmount = -movementSaved.amount - amount;
    }
    
    if (movementSaved.type === 'expense' && type === 'income') {
      computedAmount = movementSaved.amount + amount;
    }

    movementSaved.type = type;
    movementSaved.description = description;
    movementSaved.date = date;
    movementSaved.amount = amount;

    this.balanceService.update(computedAmount);

    return movementSaved.save();
  }

  async delete(id: string): Promise<Movement> {
    const movementDeleted = await this.movementModel.findByIdAndDelete(id);

    if (movementDeleted.type === "income") {
      this.balanceService.update(-movementDeleted.amount);
    } else {
      this.balanceService.update(movementDeleted.amount);
    }

    return movementDeleted;
  }
}
