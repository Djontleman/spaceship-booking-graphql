#!/usr/bin/env node
// ^ tells OS to run with node version installed on user's system

import { GraphQLClient, gql } from 'graphql-request';

const main = async () => {
  const endpoint = 'http://localhost:4000';

  const client = new GraphQLClient(endpoint, { headers: {}});

  const query = gql`
    query GetAllSpaceshipModels {
      allSpaceshipModels {
        id
        make
        name
        capacity
      }
    }
  `;

  const data = await client.request(query);
  console.log(data);
}

main();
