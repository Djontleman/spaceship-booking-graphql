import { Field, Int, InputType } from "type-graphql";

import { SpaceshipModel } from "../../entities/spaceshipModel";

@InputType()
export class SpaceshipModelInput implements Partial<SpaceshipModel>{
  @Field()
  make: string;

  @Field()
  name: string;

  @Field(type => Int)
  capacity: number;

  // * cannot update spaceships with this input
//   @Field(type => ID, { nullable: true })
//   spaceships: Ref<Spaceship>[];
}