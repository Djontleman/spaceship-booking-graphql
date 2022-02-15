import { prop as Property } from "@typegoose/typegoose";
import { ObjectType, Field, ID} from "type-graphql";

import { Journey } from "./journey";
import { Ref } from "../types";
import { Spaceship } from "./spaceship";

@ObjectType() 
export class Flight {
  @Field(type => ID)
  id: string;

  @Field(type => Journey) 
  @Property({ ref: () => Journey })
  journey: Ref<Journey>

  @Field(type => Spaceship)
  @Property({ ref: () => Spaceship })
  spaceship: Ref<Spaceship>;

  @Field()
  @Property()
  price: number;
}