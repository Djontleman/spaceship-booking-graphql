import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JourneyUpdateInput } from "../../../inputs/JourneyUpdateInput";
import { JourneyWhereUniqueInput } from "../../../inputs/JourneyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneJourneyArgs {
  @TypeGraphQL.Field(_type => JourneyUpdateInput, {
    nullable: false
  })
  data!: JourneyUpdateInput;

  @TypeGraphQL.Field(_type => JourneyWhereUniqueInput, {
    nullable: false
  })
  where!: JourneyWhereUniqueInput;
}
