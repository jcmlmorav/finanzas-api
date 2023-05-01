import { Field, ObjectType, Float, ID } from '@nestjs/graphql';

@ObjectType()
export class Movement {
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
