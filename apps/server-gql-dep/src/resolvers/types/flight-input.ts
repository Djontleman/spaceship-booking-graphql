import { Field, ID, InputType } from "type-graphql";

import { Flight } from "../../models/flight";
import { Journey } from "../../models/journey";
import { Spaceship } from "../../models/spaceship";
import { Ref } from "../../types";


@InputType()
export class FlightInput implements Partial<Flight> {
  @Field(type => ID)
  journey: Ref<Journey>;

  @Field(type => ID)
  spaceship: Ref<Spaceship>;

  @Field()
  price: number;
}

// * cannot yet update journey or spaceship
@InputType()
export class UpdateFlightInput implements Partial<FlightInput> {
  @Field()
  price: number;
}