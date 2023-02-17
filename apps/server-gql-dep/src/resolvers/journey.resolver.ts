import { Resolver, Query, Mutation, Arg } from 'type-graphql';

import { Journey } from '../models/journey';
import { JourneyInput } from './types/journey-input';
import JourneyService from '../service/journey.service';

@Resolver(of => Journey) 
export default class JourneyResolver {
  constructor(private service: JourneyService) {
    this.service = new JourneyService();
  }; 

  @Query(returns => [Journey])
  async allJourneys() {
    return this.service.findAll();
  }

  @Query(returns => Journey)
  async journey(@Arg("id") id: string) {
    return this.service.findById(id);
  }

  @Mutation(returns => Journey)
  async addJourney(@Arg("input") input: JourneyInput) {
    return this.service.addJourney(input);
  }

  @Mutation(returns => Journey)
  async updateJourney(
    @Arg("id") id: string,
    @Arg("input") input: JourneyInput
  ) {
    return this.service.updateJourney(id, input);
  }

  @Mutation(returns => String)
  async deleteJourney(@Arg("id") id: string) {
    return this.service.deleteJourney(id);
  }
}
