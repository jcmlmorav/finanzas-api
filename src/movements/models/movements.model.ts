import { Field, ObjectType, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class Movement {
  @Field((type) => Int)
  id: number;

  @Field()
  type: string;

  @Field()
  date: string;

  @Field()
  description: string;

  @Field((type) => Float)
  amount: number;
}
