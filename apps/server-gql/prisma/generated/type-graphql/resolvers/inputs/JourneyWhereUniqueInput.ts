import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("JourneyWhereUniqueInput", {
  isAbstract: true
})
export class JourneyWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  origin?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  destination?: string | undefined;
}
