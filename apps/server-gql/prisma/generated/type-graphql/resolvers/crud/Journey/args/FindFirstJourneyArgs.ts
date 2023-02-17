import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JourneyOrderByWithRelationInput } from "../../../inputs/JourneyOrderByWithRelationInput";
import { JourneyWhereInput } from "../../../inputs/JourneyWhereInput";
import { JourneyWhereUniqueInput } from "../../../inputs/JourneyWhereUniqueInput";
import { JourneyScalarFieldEnum } from "../../../../enums/JourneyScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstJourneyArgs {
  @TypeGraphQL.Field(_type => JourneyWhereInput, {
    nullable: true
  })
  where?: JourneyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [JourneyOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: JourneyOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => JourneyWhereUniqueInput, {
    nullable: true
  })
  cursor?: JourneyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [JourneyScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "origin" | "destination"> | undefined;
}
