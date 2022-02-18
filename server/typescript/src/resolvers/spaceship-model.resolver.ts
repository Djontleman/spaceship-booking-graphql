import { Resolver, Query, Mutation, Arg } from 'type-graphql';

import { SpaceshipModel } from '../models/spaceship-model';
import { SpaceshipModelInput, UpdateSpaceshipModelInput } from './types/spaceship-model-input';
import SpaceshipModelService from '../service/spaceship-model.service';

@Resolver(of => SpaceshipModel) // type-graphql resolver
export default class SpaceshipModelResolver {
  constructor(private service: SpaceshipModelService) {
    this.service = new SpaceshipModelService();
  }; 

  @Query(returns => [SpaceshipModel])
  async allSpaceshipModels() {
    return this.service.findAll();
  }

  @Query(returns => SpaceshipModel)
  async spaceshipModel(@Arg("id") id: string) {
    return this.service.findById(id);
  }

  @Mutation(returns => SpaceshipModel)
  async addSpaceshipModel(@Arg("input") input: SpaceshipModelInput) {
    return this.service.addModel(input);
  }

  @Mutation(returns => SpaceshipModel)
  async updateSpaceshipModel(
    @Arg("id") id: string,
    @Arg("input") input: UpdateSpaceshipModelInput
  ) {
    return this.service.updateModel(id, input);
  }

  @Mutation(returns => String)
  async deleteSpaceshipModel(@Arg("id") id: string) {
    return this.service.deleteModel(id);
  }
}
