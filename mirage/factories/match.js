import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

  id(i) {
    return i;//`Person ${i}`;
  },

  date() { return faker.date.past(2) },

  type() { return faker.random.arrayElement(['pug','training','tournament']) },

  map() { return faker.random.arrayElement(['Market', 'Siege', 'Contact', 'Uprising', 'Ministry', 'District', 'Peak', 'Heights', 'Station', 'Verticality', 'Embassy']) },

  teams() { return [{
      name: faker.hacker.noun(),
      rounds: faker.random.number( {min:5, max:11} ),
      players: [{
        name: faker.name.firstName(),
        score: faker.random.number(2000),
        objectives: faker.random.number(5),
        kills: faker.random.number(15),
        deaths: faker.random.number(10),
      },{
        name: faker.name.firstName(),
        score: faker.random.number(2000),
        objectives: faker.random.number(5),
        kills: faker.random.number(15),
        deaths: faker.random.number(10),
      },{
        name: faker.name.firstName(),
        score: faker.random.number(2000),
        objectives: faker.random.number(5),
        kills: faker.random.number(15),
        deaths: faker.random.number(10),
      },{
        name: faker.name.firstName(),
        score: faker.random.number(2000),
        objectives: faker.random.number(5),
        kills: faker.random.number(15),
        deaths: faker.random.number(10),
      },{
        name: faker.name.firstName(),
        score: faker.random.number(2000),
        objectives: faker.random.number(5),
        kills: faker.random.number(15),
        deaths: faker.random.number(10),
      }]
    },{
      name: faker.hacker.noun(),
      rounds: faker.random.number({ min:1, max:11 } ),
      players: [{
        name: faker.name.firstName(),
        score: faker.random.number(2000),
        objectives: faker.random.number(5),
        kills: faker.random.number(15),
        deaths: faker.random.number(10),
      },{
        name: faker.name.firstName(),
        score: faker.random.number(2000),
        objectives: faker.random.number(5),
        kills: faker.random.number(15),
        deaths: faker.random.number(10),
      },{
        name: faker.name.firstName(),
        score: faker.random.number(2000),
        objectives: faker.random.number(5),
        kills: faker.random.number(15),
        deaths: faker.random.number(10),
      },{
        name: faker.name.firstName(),
        score: faker.random.number(2000),
        objectives: faker.random.number(5),
        kills: faker.random.number(15),
        deaths: faker.random.number(10),
      },{
        name: faker.name.firstName(),
        score: faker.random.number(2000),
        objectives: faker.random.number(5),
        kills: faker.random.number(15),
        deaths: faker.random.number(10),
      }]
  }] }
});
