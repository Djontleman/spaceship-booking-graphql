import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JourneyUpdateManyMutationInput } from "../../../inputs/JourneyUpdateManyMutationInput";
import { JourneyWhereInput } from "../../../inputs/JourneyWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyJourneyArgs {
  @TypeGraphQL.Field(_type => JourneyUpdateManyMutationInput, {
    nullable: false
  })
  data!: JourneyUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => JourneyWhereInput, {
    nullable: true
  })
  where?: JourneyWhereInput | undefined;
}
