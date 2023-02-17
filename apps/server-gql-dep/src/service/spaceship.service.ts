import { Spaceships, SpaceshipModels } from "../models";
import { SpaceshipInput, UpdateSpaceshipInput } from "../resolvers/types/spaceship-input";

export default class SpaceshipService {
  async findAll() {
    return Spaceships.find({})
      .populate({ path: 'model' })
      .populate({ path: 'flights', populate: { path: 'journey' }});
  }

  async findById(id: string) {
    return Spaceships.findById(id)
      .populate({ path: 'model'})
      .populate({ path: 'flights', populate: { path: 'journey' }});
  }

  async addSpaceship(input: SpaceshipInput) {
    const newSpaceship = new Spaceships({
      callSign: input.callSign,
      model: input.model,
    });

    newSpaceship.id = newSpaceship._id;

    await Promise.all([
      newSpaceship.save(),
      SpaceshipModels.findByIdAndUpdate(newSpaceship.model, { "$push": {"spaceships": { _id: newSpaceship.id }}}),
    ]);

    return Spaceships.findById(newSpaceship.id).populate({ path: 'model' });
  }

  async updateSpaceship(id: string, input: UpdateSpaceshipInput) {
    // * doesn't allow to update model
    const updatedSpaceship = await Spaceships.findByIdAndUpdate(id, input, { new: true });
    return Spaceships.findById(id)
      .populate({ path: 'model' })
      .populate({ path: 'flights', populate: { path: 'journey' }});
  }

  async deleteSpaceship(id: string) {
    const spaceship = await Spaceships.findById(id);

    if (spaceship.flights.length != 0) return `Spaceship with ID: ${id} is still assigned to flights`;

    await Promise.all([
      Spaceships.findByIdAndDelete(id),
      SpaceshipModels.findByIdAndUpdate(spaceship.model, { "$pull": { "spaceships": id }}),
    ]);

    return `Spaceship with ID: ${id} was deleted`;
  }
}