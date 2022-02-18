import { SpaceshipModels } from "../models";
import { SpaceshipModelInput, UpdateSpaceshipModelInput } from "../resolvers/types/spaceship-model-input";

export default class SpaceshipModelService {
  async findAll() {
    return SpaceshipModels.find({})
      .populate({ path: 'spaceships', populate: { path: 'flights', populate: { path: 'journey' }}});
  }

  async findById(id: string) {
    return SpaceshipModels.findById(id)
      .populate({ path: 'spaceships', populate: { path: 'flights', populate: { path: 'journey' }}});
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

  async updateModel(id: string, input: UpdateSpaceshipModelInput) {
    await SpaceshipModels.findByIdAndUpdate(id, input, { new: true });
    return SpaceshipModels.findById(id)
      .populate({ path: 'spaceships', populate: { path: 'flights', populate: { path: 'journey' }}});
  }

  async deleteModel(id: string) {
    const model = await SpaceshipModels.findById(id);
    if (model.spaceships.length != 0) return `Spaceship Model with ID: ${id} is still assigned to spaceships`;

    await SpaceshipModels.findByIdAndDelete(id);
    return `Spaceship Model with ID: ${id} was deleted`;
  }
}
