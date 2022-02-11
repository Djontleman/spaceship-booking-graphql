import SpaceshipModelResolver from './spaceshipModel.resolver';
import SpaceshipResolver from './spaceship.resolver';
import JourneyResolver from './journey.resolver';
import FlightResolver from './flight.resolver';

export const resolvers = [
  SpaceshipModelResolver, 
  SpaceshipResolver, 
  JourneyResolver,
  FlightResolver,
] as const;