import { SpaceshipModels, Spaceships } from '../schema';
import { SpaceshipInput, UpdateSpaceshipInput } from '../schema/spaceship.schema';

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
    const updatedSpaceship = Spaceships.findByIdAndUpdate(id, input, { new: true });
    return Spaceships.findById(id).populate({ path: 'model' });
  }

  async deleteSpaceship(id: string) {
    const spaceship = await Spaceships.findById(id);

    await Promise.all([
      Spaceships.findOneAndDelete({ _id: id }),
      SpaceshipModels.findByIdAndUpdate(spaceship.model, { "$pull": { "spaceships": id }}),
    ]);

    return `Spaceship with ID: ${id} was deleted`;
  }
}