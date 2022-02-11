import { SpaceshipModels } from '../schema';
import { SpaceshipModelInput } from '../schema/spaceshipModel.schema';

export default class SpaceshipModelService {
  async findAll() {
    return SpaceshipModels.find({}).populate({ path: 'spaceships' });
  }

  async findById(id: string) {
    return SpaceshipModels.findById(id).populate({ path: 'spaceships' });
  }

  async addModel(input: SpaceshipModelInput) {
    const newSpaceshipModel = new SpaceshipModels({
      make: input.make,
      name: input.name,
      capacity: input.capacity,
    });

    newSpaceshipModel.id = newSpaceshipModel._id;

    await newSpaceshipModel.save();
    return SpaceshipModels.findById(newSpaceshipModel.id);
  }

  async updateModel(id: string, input: SpaceshipModelInput) {
    const updatedModel = SpaceshipModels.findByIdAndUpdate(id, input, { new: true });
    return updatedModel;
  }

  async deleteModel(id: string) {
    await SpaceshipModels.findOneAndDelete({ _id: id });
    return `Spaceship Model with ID: ${id} was deleted`;
  }
}
