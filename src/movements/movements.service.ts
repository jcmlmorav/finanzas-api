import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Movement } from './schemas/movement.schema';
import { CreateMovementDto } from './dtos/create.dto';

const MOVEMENTS = [
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
];

@Injectable()
export class MovementsService {
  constructor(
    @InjectModel(Movement.name) private movementModel: Model<Movement>,
  ) {}

  async create(createMovementDto: CreateMovementDto): Promise<Movement> {
    const created = new this.movementModel(createMovementDto);
    return created.save();
  }

  async findByType(type: string): Promise<Movement[]> {
    return this.movementModel.find({ type: type }).exec();
  }
}
