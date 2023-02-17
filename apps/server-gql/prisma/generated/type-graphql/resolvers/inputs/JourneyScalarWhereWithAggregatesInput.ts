import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("JourneyScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class JourneyScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [JourneyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: JourneyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [JourneyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: JourneyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [JourneyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: JourneyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  origin?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  destination?: StringWithAggregatesFilter | undefined;
}
