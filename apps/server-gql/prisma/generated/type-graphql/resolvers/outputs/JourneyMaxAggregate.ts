import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("JourneyMaxAggregate", {
  isAbstract: true
})
export class JourneyMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  origin!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  destination!: string | null;
}
