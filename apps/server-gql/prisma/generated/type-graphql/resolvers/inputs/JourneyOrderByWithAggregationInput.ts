import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { JourneyCountOrderByAggregateInput } from "../inputs/JourneyCountOrderByAggregateInput";
import { JourneyMaxOrderByAggregateInput } from "../inputs/JourneyMaxOrderByAggregateInput";
import { JourneyMinOrderByAggregateInput } from "../inputs/JourneyMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("JourneyOrderByWithAggregationInput", {
  isAbstract: true
})
export class JourneyOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  origin?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  destination?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => JourneyCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: JourneyCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => JourneyMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: JourneyMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => JourneyMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: JourneyMinOrderByAggregateInput | undefined;
}
