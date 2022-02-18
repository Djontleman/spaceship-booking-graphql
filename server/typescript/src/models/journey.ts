import { prop as Property } from "@typegoose/typegoose";
import { ObjectType, Field, ID } from "type-graphql";

import { Flight } from "./flight";
import { Ref } from "../types";

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