import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { JourneyCountAggregate } from "../outputs/JourneyCountAggregate";
import { JourneyMaxAggregate } from "../outputs/JourneyMaxAggregate";
import { JourneyMinAggregate } from "../outputs/JourneyMinAggregate";

@TypeGraphQL.ObjectType("JourneyGroupBy", {
  isAbstract: true
})
export class JourneyGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  origin!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  destination!: string;

  @TypeGraphQL.Field(_type => JourneyCountAggregate, {
    nullable: true
  })
  _count!: JourneyCountAggregate | null;

  @TypeGraphQL.Field(_type => JourneyMinAggregate, {
    nullable: true
  })
  _min!: JourneyMinAggregate | null;

  @TypeGraphQL.Field(_type => JourneyMaxAggregate, {
    nullable: true
  })
  _max!: JourneyMaxAggregate | null;
}
