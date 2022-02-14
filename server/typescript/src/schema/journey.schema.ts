import { prop as Property, Ref } from "@typegoose/typegoose";
import { ObjectType, Field, ID, InputType } from "type-graphql";

import { Flight } from "./flight.schema";

// || ========== Schema Type ========== ||

@ObjectType() 
export class Journey {
  @Field(type => ID)
  id: string;

  @Field() 
  @Property()
  origin: string;

  @Field()
  @Property()
  destination: string;

  @Field(type => [Flight])
  @Property({ ref: () => Flight })
  flights: Ref<Flight>[];
}

// || ========== Input Types ========== ||

@InputType()
export class JourneyInput implements Partial<Journey> {
  @Field()
  origin: string;

  @Field()
  destination: string;
}