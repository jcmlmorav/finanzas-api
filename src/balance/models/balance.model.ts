import { Field, Float, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class Balance {
  @Field((type) => ID)
  id: string;

  @Field((type) => Float)
  total: number;
}
