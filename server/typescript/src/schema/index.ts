import { getModelForClass } from "@typegoose/typegoose";

import { SpaceshipModel } from "./spaceshipModel.schema";
import { Spaceship } from "./spaceship.schema";

// construct models with typegoose
export const SpaceshipModels = getModelForClass(SpaceshipModel); 
export const Spaceships = getModelForClass(Spaceship); 