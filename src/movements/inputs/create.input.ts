import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateMovementInput {
  @Field()
  type: string;

  @Field()
  date: string;

  @Field()
  description: string;

  @Field((type) => Float)
  amount: number;
}
