import { prop as Property } from "@typegoose/typegoose";
import { ObjectType, Field, ID, Int } from "type-graphql";

import { Spaceship } from "./spaceship";
import { Ref } from "../types";

@ObjectType()
export class SpaceshipModel {
  @Field(type => ID)
  id: string;

  @Field()
  @Property()
  make: string;

  @Field()
  @Property()
  name: string;

  @Field(type => Int)
  @Property()
  capacity: number;

  @Field(type => [Spaceship])
  @Property({ ref: () => Spaceship})
  spaceships: Ref<Spaceship>[];

  // todo: potentially implement better solution from typegraphql example
  _doc: any;
}