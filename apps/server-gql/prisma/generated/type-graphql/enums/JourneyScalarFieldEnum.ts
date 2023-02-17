import * as TypeGraphQL from "type-graphql";

export enum JourneyScalarFieldEnum {
  id = "id",
  origin = "origin",
  destination = "destination"
}
TypeGraphQL.registerEnumType(JourneyScalarFieldEnum, {
  name: "JourneyScalarFieldEnum",
  description: undefined,
});
