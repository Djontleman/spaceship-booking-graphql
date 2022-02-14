import { Spaceships, SpaceshipModels } from "../entities";
import { SpaceshipInput, UpdateSpaceshipInput } from "../resolvers/types/spaceship-input";

export default class SpaceshipService {
  async findAll() {
    return Spaceships.find({}).populate({ path: 'model' });
  }

  async findById(id: string) {
    return Spaceships.findById(id).populate({ path: 'model'});
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
    return Spaceships.findById(id).populate({ path: 'model' });
  }

  async deleteSpaceship(id: string) {
    const spaceship = await Spaceships.findById(id);

    await Promise.all([
      Spaceships.findByIdAndDelete(id),
      SpaceshipModels.findByIdAndUpdate(spaceship.model, { "$pull": { "spaceships": id }}),
    ]);

    return `Spaceship with ID: ${id} was deleted`;
  }
}