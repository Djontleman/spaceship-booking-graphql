import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JourneyWhereInput } from "../../../inputs/JourneyWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyJourneyArgs {
  @TypeGraphQL.Field(_type => JourneyWhereInput, {
    nullable: true
  })
  where?: JourneyWhereInput | undefined;
}
