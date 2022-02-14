import { Field, ID, InputType } from "type-graphql";

import { Journey } from "../../entities/journey";

@InputType()
export class JourneyInput implements Partial<Journey> {
  @Field()
  origin: string;

  @Field()
  destination: string;
}