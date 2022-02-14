import { prop as Property } from "@typegoose/typegoose";
import { ObjectType, Field, ID} from "type-graphql";

import { Journey } from "./journey";
import { Ref } from "../types";

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