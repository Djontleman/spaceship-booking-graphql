import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JourneyWhereUniqueInput } from "../../../inputs/JourneyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneJourneyArgs {
  @TypeGraphQL.Field(_type => JourneyWhereUniqueInput, {
    nullable: false
  })
  where!: JourneyWhereUniqueInput;
}
