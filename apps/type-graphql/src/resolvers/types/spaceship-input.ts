import { Field, ID, InputType } from "type-graphql";

import { Spaceship } from "../../models/spaceship";
import { SpaceshipModel } from "../../models/spaceship-model";
import { Ref } from "../../types";

@InputType()
export class SpaceshipInput implements Partial<Spaceship> {
  @Field()
  callSign: string;

  @Field(type => ID)
  model: Ref<SpaceshipModel>;
}

@InputType()
export class UpdateSpaceshipInput implements Partial<SpaceshipInput> {
  @Field()
  callSign: string;
}