import { Resolver, Query, Mutation, Arg } from 'type-graphql';

import { SpaceshipModel, SpaceshipModelInput } from '../schema/spaceshipModel.schema';
import SpaceshipModelService from '../service/spaceshipModel.service';

// || ========== Resolvers ========== ||

@Resolver() // type-graphql resolver
export default class SpaceshipModelResolver {
  constructor(private service: SpaceshipModelService) {
    this.service = new SpaceshipModelService();
  }; 

  @Query(() => [SpaceshipModel])
  async allSpaceshipModels() {
    return this.service.findAll();
  }

  @Query(() => SpaceshipModel)
  async spaceshipModel(@Arg("id") id: string) {
    return this.service.findById(id);
  }

  @Mutation(() => SpaceshipModel)
  async addSpaceshipModel(@Arg("input") input: SpaceshipModelInput) {
    return this.service.addModel(input);
  }

  @Mutation(() => SpaceshipModel)
  async updateSpaceshipModel(
    @Arg("id") id: string,
    @Arg("input") input: SpaceshipModelInput
  ) {
    return this.service.updateModel(id, input);
  }

  @Mutation(() => String)
  async deleteSpaceshipModel(@Arg("id") id: string) {
    return this.service.deleteModel(id);
  }
}
