import { prop as Property, Ref } from "@typegoose/typegoose";
import { ObjectType, Field, ID, InputType } from "type-graphql";

import { Journey } from "./journey.schema";
import { Spaceship } from "./spaceship.schema";

// || ========== Schema Type ========== ||

@ObjectType() 
export class Flight {
  @Field(type => ID)
  id: string;

  @Field(type => Journey) 
  @Property({ ref: () => Journey })
  journey: Ref<Journey>

  // * not implemented yet
  // @Field(type => Spaceship)
  // @prop({ ref: () => Spaceship })
  // spaceship: Ref<Spaceship>;

  @Field()
  @Property()
  price: number;
}

// || ========== Input Types ========== ||

@InputType() // type-graphql input
export class FlightInput implements Partial<Flight> {
  @Field(type => ID)
  journey: Ref<Journey>; // ? need Types? need ?

  // * not implemented yet
  // @Field(type => ID)
  // spaceship: Ref<Spaceship>;

  @Field()
  price: number;
}

@InputType()
export class UpdateFlightInput implements Partial<FlightInput> {
  @Field()
  price: number;
}
