import { Spaceships } from '../schema';
import { SpaceshipInput } from '../schema/spaceship.schema';

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

    await newSpaceship.save();
    return Spaceships.findById(newSpaceship.id);
  }

  async updateSpaceship(id: string, input: SpaceshipInput) {
    const updatedSpaceship = Spaceships.findByIdAndUpdate(id, input, { new: true });
    return updatedSpaceship;
  }

  async deleteSpaceship(id: string) {
    await Spaceships.findOneAndDelete({ _id: id });
    return `Spaceship with ID: ${id} was deleted`;
  }
}