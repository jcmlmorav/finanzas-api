import { InputType, Field, Float, ID } from '@nestjs/graphql';

@InputType()
export class UpdateMovementInput {
  @Field((type) => ID)
  id: string;

  @Field()
  type: string;

  @Field()
  date: string;

  @Field()
  description: string;

  @Field((type) => Float)
  amount: number;
}
