import { prop, Ref } from "@typegoose/typegoose";
import { Types } from "mongoose";
import { ObjectType, Field, ID, InputType } from "type-graphql";

import { Journey } from "./journey.schema";
import { Spaceship } from "./spaceship.schema";

// || ========== Schema Type ========== ||

@ObjectType() 
export class Flight {
  @Field(type => ID)
  id: string;

  @Field(type => Journey) 
  @prop({ ref: () => Journey })
  journey: Ref<Journey>

  // * not implemented yet
  // @Field(type => Spaceship)
  // @prop({ ref: () => Spaceship })
  // spaceship: Ref<Spaceship>;

  @Field()
  @prop()
  price: number;
}

// || ========== Input Types ========== ||

@InputType() // type-graphql input
export class FlightInput implements Partial<Flight> {
  @Field(type => ID)
  journey?: Ref<Journey, Types.ObjectId>; // ? need Types? need ?

  // * not implemented yet
  // @Field(type => ID)
  // spaceship?: Ref<Spaceship, Types.ObjectId>;

  @Field()
  price?: number;
}

@InputType()
export class UpdateFlightInput implements Partial<FlightInput> {
  @Field()
  price: number;
}
