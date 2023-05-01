import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MovementDocument = HydratedDocument<Movement>;

@Schema()
export class Movement {
  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  date: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  amount: number;
}

export const MovementSchema = SchemaFactory.createForClass(Movement);
