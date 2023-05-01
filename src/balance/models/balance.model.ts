import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Balance {
  @Field((type) => Int)
  id: number;

  @Field((type) => Int)
  total: number;
}
