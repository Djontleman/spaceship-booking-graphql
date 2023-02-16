import { Resolver, Query, Mutation, Arg, FieldResolver, Root } from 'type-graphql';

import { Flight } from '../models/flight';
import { FlightInput, UpdateFlightInput } from './types/flight-input';
import FlightService from '../service/flight.service';

@Resolver(of => Flight) // type-graphql resolver
export default class FlightResolver {
  constructor(private service: FlightService) {
    this.service = new FlightService();
  }; 

  @Query(returns => [Flight])
  async allFlights() {
    const flights = await this.service.findAll();
    return flights.map(flight => { return { id: flight.id }});
  }

  @Query(returns => Flight)
  async flight(@Arg("id") id: string) { 
    return { id }; 
  }

  @Mutation(returns => Flight)
  async addFlight(@Arg("input") input: FlightInput) {
    return this.service.addFlight(input);
  }

  @Mutation(returns => Flight)
  async updateFlight(
    @Arg("id") id: string,
    @Arg("input") input: UpdateFlightInput
  ) {
    return this.service.updateFlight(id, input);
  }

  @Mutation(returns => String)
  async deleteFlight(@Arg("id") id: string) {
    return this.service.deleteFlight(id);
  }
  
  @FieldResolver()
  async id(@Root() { id }: Flight) {
    return id;
  }

  @FieldResolver()
  async journey(@Root() { id }: Flight) {
    return this.service.getJourneyByFlightId(id);
  }

  @FieldResolver()
  async spaceship(@Root() { id }: Flight) {
    return this.service.getSpaceshipByFlightId(id);
  }

  @FieldResolver()
  async price(@Root() { id }: Flight) {
    const { price } = await this.service.findById(id);
    return price;
  }
}