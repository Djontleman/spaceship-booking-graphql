import { getModelForClass } from "@typegoose/typegoose";

import { SpaceshipModel } from "./spaceship-model";
import { Spaceship } from "./spaceship";
import { Journey } from "./journey";
import { Flight } from "./flight";

// construct models with typegoose
export const SpaceshipModels = getModelForClass(SpaceshipModel); 
export const Spaceships = getModelForClass(Spaceship); 
export const Journeys = getModelForClass(Journey);
export const Flights = getModelForClass(Flight);