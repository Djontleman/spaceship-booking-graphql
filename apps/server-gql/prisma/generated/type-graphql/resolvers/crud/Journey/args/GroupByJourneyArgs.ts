import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JourneyOrderByWithAggregationInput } from "../../../inputs/JourneyOrderByWithAggregationInput";
import { JourneyScalarWhereWithAggregatesInput } from "../../../inputs/JourneyScalarWhereWithAggregatesInput";
import { JourneyWhereInput } from "../../../inputs/JourneyWhereInput";
import { JourneyScalarFieldEnum } from "../../../../enums/JourneyScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByJourneyArgs {
  @TypeGraphQL.Field(_type => JourneyWhereInput, {
    nullable: true
  })
  where?: JourneyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [JourneyOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: JourneyOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [JourneyScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "origin" | "destination">;

  @TypeGraphQL.Field(_type => JourneyScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: JourneyScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
