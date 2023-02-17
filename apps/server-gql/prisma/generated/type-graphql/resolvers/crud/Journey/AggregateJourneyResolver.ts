import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateJourneyArgs } from "./args/AggregateJourneyArgs";
import { Journey } from "../../../models/Journey";
import { AggregateJourney } from "../../outputs/AggregateJourney";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Journey)
export class AggregateJourneyResolver {
  @TypeGraphQL.Query(_returns => AggregateJourney, {
    nullable: false
  })
  async aggregateJourney(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateJourneyArgs): Promise<AggregateJourney> {
    return getPrismaFromContext(ctx).journey.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
