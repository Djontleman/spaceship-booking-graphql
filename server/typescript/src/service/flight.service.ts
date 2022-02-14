import { Flights, Journeys } from "../entities";
import { FlightInput, UpdateFlightInput } from "../resolvers/types/flight-input";

export default class FlightService {
  async findAll() {
    return Flights.find({}).populate({ path: 'journey' });
  }

  async findById(id: string) {
    return Flights.findById(id).populate({ path: 'journey' });
  }

  async addFlight(input: FlightInput) {
    const newFlight = new Flights({
      journey: input.journey,
      price: input.price,
    });

    newFlight.id = newFlight._id;

    await Promise.all([
      newFlight.save(),
      Journeys.findByIdAndUpdate(newFlight.journey, { "$push": { "flights": { _id: newFlight.id }}}),
    ]);

    return Flights.findById(newFlight.id).populate({ path: 'journey' });
  }

  // todo: this method
  // * does not currently allow to update journey
  async updateFlight(id: string, input: UpdateFlightInput) {

    await Flights.findByIdAndUpdate(id, input);
    return Flights.findById(id).populate({ path: 'journey' });
    
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
    ]);

    return `Spaceship with ID: ${id} was deleted`;
  }
}