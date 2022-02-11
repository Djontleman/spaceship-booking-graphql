import { Resolver, Query, Mutation, Arg } from 'type-graphql';

import { Spaceship, SpaceshipInput } from '../schema/spaceship.schema';
import SpaceshipService from '../service/spaceship.service';

@Resolver() // type-graphql resolver
export default class SpaceshipResolver {
  constructor(private service: SpaceshipService) {
    this.service = new SpaceshipService();
  }; 

  @Query(() => [Spaceship])
  async allSpaceships() {
    return this.service.findAll();
  }

  @Query(() => Spaceship)
  async spaceship(@Arg("id") id: string) {
    return this.service.findById(id);
  }

  @Mutation(() => Spaceship)
  async addSpaceship(@Arg("input") input: SpaceshipInput) {
    return this.service.addSpaceship(input);
  }

  @Mutation(() => Spaceship)
  async updateSpaceship(
    @Arg("id") id: string,
    @Arg("input") input: SpaceshipInput
  ) {
    return this.service.updateSpaceship(id, input);
  }

  @Mutation(() => String)
  async deleteSpaceship(@Arg("id") id: string) {
    return this.service.deleteSpaceship(id);
  }
}
