import SpaceshipModelResolver from './spaceshipModel.resolver';
import SpaceshipResolver from './spaceship.resolver';
import JourneyResolver from './journey.resolver';

export const resolvers = [
  SpaceshipModelResolver, 
  SpaceshipResolver, 
  JourneyResolver
] as const;