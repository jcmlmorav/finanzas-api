import { Injectable } from '@nestjs/common';

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
  async findByType(type: string) {
    return MOVEMENTS.filter((movement) => movement.type === type);
  }
}
