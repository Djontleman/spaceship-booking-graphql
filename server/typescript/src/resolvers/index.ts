import SpaceshipModelResolver from './spaceshipModel.resolver';
import SpaceshipResolver from './spaceship.resolver';

export const resolvers = [SpaceshipModelResolver, SpaceshipResolver] as const;