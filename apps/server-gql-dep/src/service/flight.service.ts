import { Flights, Journeys, Spaceships } from "../models";
import { FlightInput, UpdateFlightInput } from "../resolvers/types/flight-input";

export default class FlightService {
  async findAll() {
    return Flights.find({});
  }

  async findById(id: string) {
    return Flights.findById(id);
  }

  async addFlight(input: FlightInput) {
    const newFlight = new Flights({
      journey: input.journey,
      spaceship: input.spaceship,
      price: input.price,
    });

    newFlight.id = newFlight._id;

    await Promise.all([
      newFlight.save(),
      Journeys.findByIdAndUpdate(newFlight.journey, { "$push": { "flights": { _id: newFlight.id }}}),
      Spaceships.findByIdAndUpdate(newFlight.spaceship, { "$push": { "flights": { _id: newFlight.id }}}),
    ]);

    return Flights.findById(newFlight.id)
      .populate({ path: 'journey' })
      .populate({ path: 'spaceship', populate: { path: 'model' }});
  }

  // todo: this method, update input
  // * does not currently allow to update journey or spaceship
  async updateFlight(id: string, input: UpdateFlightInput) {

    await Flights.findByIdAndUpdate(id, input);
    return Flights.findById(id)
      .populate({ path: 'journey' })
      .populate({ path: 'spaceship', populate: { path: 'model' }});
    
    // if (input.journey === null) {
    //   await Flights.findByIdAndUpdate(id, input);
    //   return Flights.findById(id).populate({ path: 'journey' });
    // }

    // await Journeys.updateOne({ "flights": { "$in": id }}, { "$pull": { "flights": id }});
    // await Journeys.updateOne({ _id: input.journey }, { "push": { "flight": { _id: id }}});
    
  }

  async deleteFlight(id: string) {
    const flight = await Flights.findById(id);

    await Promise.all([
      Flights.findByIdAndDelete(id),
      Journeys.findByIdAndUpdate(flight.journey, { "$pull": { "flights": id }}),
      Spaceships.findByIdAndUpdate(flight.spaceship, { "$pull": { "flights": id }}),
    ]);

    return `Spaceship with ID: ${id} was deleted`;
  }

  // * functions field resolvers
  async getJourneyByFlightId(flightId: string) {
    return Journeys.findOne({ "flights": { "$in": flightId }});
  }

  async getSpaceshipByFlightId(flightId: string) {
    return Spaceships.findOne({ "flights": { "$in": flightId }});
  }
}