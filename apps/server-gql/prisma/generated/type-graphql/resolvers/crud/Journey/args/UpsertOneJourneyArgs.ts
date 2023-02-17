import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JourneyCreateInput } from "../../../inputs/JourneyCreateInput";
import { JourneyUpdateInput } from "../../../inputs/JourneyUpdateInput";
import { JourneyWhereUniqueInput } from "../../../inputs/JourneyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneJourneyArgs {
  @TypeGraphQL.Field(_type => JourneyWhereUniqueInput, {
    nullable: false
  })
  where!: JourneyWhereUniqueInput;

  @TypeGraphQL.Field(_type => JourneyCreateInput, {
    nullable: false
  })
  create!: JourneyCreateInput;

  @TypeGraphQL.Field(_type => JourneyUpdateInput, {
    nullable: false
  })
  update!: JourneyUpdateInput;
}
