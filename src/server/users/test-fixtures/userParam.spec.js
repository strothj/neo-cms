import faker from 'faker';

export default params => ({
  provider: 'local',
  // Using alphaNumeric due to faker.internet.userName sometimes returning
  // usernames that are shorter than the minimum allowed by the schema.
  username: faker.random.alphaNumeric(10),
  displayName: `${faker.name.firstName()} ${faker.name.lastName()}`,
  name: {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  },
  email: faker.internet.email(),
  role: faker.random.arrayElement(['admin', 'editor', 'subscriber']),
  password: faker.random.alphaNumeric(60),
  ...params,
});