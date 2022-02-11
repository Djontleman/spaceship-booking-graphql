import { Journeys } from '../schema';
import { JourneyInput } from '../schema/journey.schema';

export default class JourneyService {
  async findAll() {
    return Journeys.find({});
  }

  async findById(id: string) {
    return Journeys.findById(id);
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

  async updateJourney(id: string, input: JourneyInput) {
    const updatedJourney = Journeys.findByIdAndUpdate(id, input, { new: true });
    return updatedJourney;
  }

  async deleteJourney(id: string) {
    const model = await Journeys.findById(id);

    await Journeys.findByIdAndDelete(id);
    return `Journey with ID: ${id} was deleted`;
  }
}