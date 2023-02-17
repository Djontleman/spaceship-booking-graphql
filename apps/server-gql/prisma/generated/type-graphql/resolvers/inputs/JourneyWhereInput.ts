import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("JourneyWhereInput", {
  isAbstract: true
})
export class JourneyWhereInput {
  @TypeGraphQL.Field(_type => [JourneyWhereInput], {
    nullable: true
  })
  AND?: JourneyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [JourneyWhereInput], {
    nullable: true
  })
  OR?: JourneyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [JourneyWhereInput], {
    nullable: true
  })
  NOT?: JourneyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  origin?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  destination?: StringFilter | undefined;
}
