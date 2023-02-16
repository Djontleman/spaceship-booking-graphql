import { Field, Int, InputType } from "type-graphql";

import { SpaceshipModel } from "../../models/spaceship-model";

@InputType()
export class SpaceshipModelInput implements Partial<SpaceshipModel>{
  @Field()
  make: string;

  @Field()
  name: string;

  @Field(type => Int)
  capacity: number;
}

@InputType()
export class UpdateSpaceshipModelInput implements Partial<SpaceshipModelInput> {
  @Field({ nullable: true })
  make?: string;

  @Field({ nullable: true })
  name?: string;

  @Field(type => Int, { nullable: true })
  capacity?: number;

  // * cannot update spaceships with this input
//   @Field(type => ID, { nullable: true })
//   spaceships: Ref<Spaceship>[];
}