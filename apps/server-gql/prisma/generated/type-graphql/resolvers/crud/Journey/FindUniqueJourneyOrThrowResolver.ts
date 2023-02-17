import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueJourneyOrThrowArgs } from "./args/FindUniqueJourneyOrThrowArgs";
import { Journey } from "../../../models/Journey";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Journey)
export class FindUniqueJourneyOrThrowResolver {
  @TypeGraphQL.Query(_returns => Journey, {
    nullable: true
  })
  async getJourney(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueJourneyOrThrowArgs): Promise<Journey | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).journey.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
