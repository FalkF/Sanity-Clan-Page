import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

  id(i) {
    return i;//`Person ${i}`;
  },

  date() { return faker.date.past(1) },

  type() { return faker.random.arrayElement(['pug','training','tournament']) },

  teams() { return [{
      name: faker.hacker.noun(),
      rounds: faker.random.number( {min:5, max:11} ),
      players: [{
        name: faker.name.firstName(),
        kills: faker.random.number(15),
        deaths: faker.random.number(10),
      },{
        name: faker.name.firstName(),
        kills: faker.random.number(15),
        deaths: faker.random.number(10),
      },{
        name: faker.name.firstName(),
        kills: faker.random.number(15),
        deaths: faker.random.number(10),
      },{
        name: faker.name.firstName(),
        kills: faker.random.number(15),
        deaths: faker.random.number(10),
      },{
        name: faker.name.firstName(),
        kills: faker.random.number(15),
        deaths: faker.random.number(10),
      }]
    },{
      name: faker.hacker.noun(),
      rounds: faker.random.number({ min:1, max:11 } ),
      players: [{
        name: faker.name.firstName(),
        kills: faker.random.number(15),
        deaths: faker.random.number(10),
      },{
        name: faker.name.firstName(),
        kills: faker.random.number(15),
        deaths: faker.random.number(10),
      },{
        name: faker.name.firstName(),
        kills: faker.random.number(15),
        deaths: faker.random.number(10),
      },{
        name: faker.name.firstName(),
        kills: faker.random.number(15),
        deaths: faker.random.number(10),
      },{
        name: faker.name.firstName(),
        kills: faker.random.number(15),
        deaths: faker.random.number(10),
      }]
  }] }
});
