import { Resolver, Query, Mutation, Arg } from 'type-graphql';

import { Spaceship } from '../entities/spaceship';
import { SpaceshipInput, UpdateSpaceshipInput } from './types/spaceship-input';
import SpaceshipService from '../service/spaceship.service';

@Resolver(of => Spaceship) // type-graphql resolver
export default class SpaceshipResolver {
  constructor(private service: SpaceshipService) {
    this.service = new SpaceshipService();
  }; 

  @Query(returns => [Spaceship])
  async allSpaceships() {
    return this.service.findAll();
  }

  @Query(returns => Spaceship)
  async spaceship(@Arg("id") id: string) {
    return this.service.findById(id);
  }

  @Mutation(returns => Spaceship)
  async addSpaceship(@Arg("input") input: SpaceshipInput) {
    return this.service.addSpaceship(input);
  }

  @Mutation(returns => Spaceship)
  async updateSpaceship(
    @Arg("id") id: string,
    @Arg("input") input: UpdateSpaceshipInput
  ) {
    return this.service.updateSpaceship(id, input);
  }

  @Mutation(returns => String)
  async deleteSpaceship(@Arg("id") id: string) {
    return this.service.deleteSpaceship(id);
  }
}
