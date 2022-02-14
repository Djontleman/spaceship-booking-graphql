import { SpaceshipModels } from "../entities";
import { SpaceshipModelInput } from "../resolvers/types/spaceshipModel";

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
    return SpaceshipModels.findById(newSpaceshipModel.id).populate({ path: 'spaceships' });
  }

  // todo: update this mutation
  async updateModel(id: string, input: SpaceshipModelInput) {
    const updatedModel = await SpaceshipModels.findByIdAndUpdate(id, input, { new: true });
    return updatedModel;
  }

  async deleteModel(id: string) {
    const model = await SpaceshipModels.findById(id);
    if (model.spaceships.length != 0) return `Spaceship Model with ID: ${id} is still assigned to spaceships`;

    await SpaceshipModels.findByIdAndDelete(id);
    return `Spaceship Model with ID: ${id} was deleted`;
  }
}
