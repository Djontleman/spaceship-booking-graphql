import { prop as Property } from "@typegoose/typegoose";
import { ObjectType, Field, ID } from "type-graphql";

import { SpaceshipModel } from "./spaceship-model";
import { Ref } from "../types";
import { Flight } from "./flight";

@ObjectType() 
export class Spaceship {
  @Field(type => ID)
  id: string;

  @Field() 
  @Property()
  callSign: string;

  @Field(type => SpaceshipModel)
  @Property({ ref: () => SpaceshipModel })
  model: Ref<SpaceshipModel>;

  @Field(type => [Flight])
  @Property({ ref: () => Flight})
  flights: Ref<Flight>[];

  // todo: potentially implement better solution from typegraphql example
  _doc: any;
}