import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JourneyCreateInput } from "../../../inputs/JourneyCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneJourneyArgs {
  @TypeGraphQL.Field(_type => JourneyCreateInput, {
    nullable: false
  })
  data!: JourneyCreateInput;
}
