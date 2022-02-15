import { Journeys } from "../entities";
import { JourneyInput } from "../resolvers/types/journey-input";

export default class JourneyService {
  async findAll() {
    return Journeys.find({})
      .populate({ path: 'flights', populate: { path: 'spaceship', populate: { path: 'model' }}});
  }

  async findById(id: string) {
    return Journeys.findById(id)
      .populate({ path: 'flights', populate: { path: 'spaceship', populate: { path: 'model' }}});
  }

  async addJourney(input: JourneyInput) {
    const newJourney = new Journeys({
      origin: input.origin,
      destination: input.destination,
    });

    newJourney.id = newJourney._id;

    await newJourney.save();
    return Journeys.findById(newJourney.id);
  }

  // * cannot alter flights with this
  async updateJourney(id: string, input: JourneyInput) {
    await Journeys.findByIdAndUpdate(id, input, { new: true });
    return Journeys.findById(id)
      .populate({ path: 'flights', populate: { path: 'spaceship', populate: { path: 'model' }}});
  }

  async deleteJourney(id: string) {
    const journey = await Journeys.findById(id);
    if (journey.flights.length != 0) return `Journey with ID: ${id} is still assigned to flights`;

    await Journeys.findByIdAndDelete(id);
    return `Journey with ID: ${id} was deleted`;
  }
}