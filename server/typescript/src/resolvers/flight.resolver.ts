import { Resolver, Query, Mutation, Arg } from 'type-graphql';

import { Flight, FlightInput, UpdateFlightInput } from '../schema/flight.schema';
import FlightService from '../service/flight.service';

@Resolver() // type-graphql resolver
export default class FlightResolver {
  constructor(private service: FlightService) {
    this.service = new FlightService();
  }; 

  @Query(() => [Flight])
  async allFlights() {
    return this.service.findAll();
  }

  @Query(() => Flight)
  async flight(@Arg("id") id: string) {
    return this.service.findById(id);
  }

  @Mutation(() => Flight)
  async addFlight(@Arg("input") input: FlightInput) {
    return this.service.addFlight(input);
  }

  @Mutation(() => Flight)
  async updateFlight(
    @Arg("id") id: string,
    @Arg("input") input: UpdateFlightInput
  ) {
    return this.service.updateFlight(id, input);
  }

  @Mutation(() => String)
  async deleteFlight(@Arg("id") id: string) {
    return this.service.deleteFlight(id);
  }
}