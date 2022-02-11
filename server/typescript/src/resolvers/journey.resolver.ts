import { Resolver, Query, Mutation, Arg } from 'type-graphql';

import { Journey, JourneyInput } from '../schema/journey.schema';
import JourneyService from '../service/journey.service';

@Resolver() 
export default class JourneyResolver {
  constructor(private service: JourneyService) {
    this.service = new JourneyService();
  }; 

  @Query(() => [Journey])
  async allJourneys() {
    return this.service.findAll();
  }

  @Query(() => Journey)
  async journey(@Arg("id") id: string) {
    return this.service.findById(id);
  }

  @Mutation(() => Journey)
  async addJourney(@Arg("input") input: JourneyInput) {
    return this.service.addJourney(input);
  }

  @Mutation(() => Journey)
  async updateJourney(
    @Arg("id") id: string,
    @Arg("input") input: JourneyInput
  ) {
    return this.service.updateJourney(id, input);
  }

  @Mutation(() => String)
  async deleteJourney(@Arg("id") id: string) {
    return this.service.deleteJourney(id);
  }
}
