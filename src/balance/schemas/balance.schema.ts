import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BalanceDocument = HydratedDocument<Balance>;

@Schema()
export class Balance {
  @Prop({ required: true })
  total: number;
}

export const BalanceSchema = SchemaFactory.createForClass(Balance);
