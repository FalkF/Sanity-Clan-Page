import Route from '@ember/routing/route';
import { task } from 'ember-concurrency';
import { reads, sort } from 'ember-decorators/object/computed';
//import { sort } from '@ember/object/computed';

export default class extends Route {

  // @reads('fetchMatch.last.value') test

  async model() {
    return this.get('fetchMatch').perform()
  }

  fetchMatch = task(function * () {
    let store = this.get('store')

    let matches = yield store.findAll('match')
    matches.set('conent', matches.content.sort(function(a, b){
      if (a._data.date < b._data.date) {
        return 1;
      } else if (a._data.date > b._data.date) {
        return -1;
      }

      return 0;
    }))

    return matches
  })

    // model() {
    //   return {
    //     id: 0,
    //     type: 'PUG - GYM',
    //     date: '2017-10-23 19:22 GMT+1',
    //     teams: [
    //       {
    //         name: '$aN¡tY',
    //         rounds: 11,
    //         players: [ // relationship weil match-card extended und collapsed
    //           {name: 'Friberg', kills: 15, deaths: 5},
    //           {name: 'Falk', kills: 16, deaths: 6},
    //           {name: 'Pilot', kills: 2, deaths: 12},
    //           {name: 'Zeus', kills: 5, deaths: 3},
    //           {name: 'lolyou', kills: 11, deaths: 6}
    //         ]
    //       },
    //       {
    //         b: 'No0bS',
    //         rounds: 3,
    //         players: [
    //           {name: 'Friberg', kills: 15, deaths: 5},
    //           {name: 'Falk', kills: 16, deaths: 6},
    //           {name: 'Pilot', kills: 2, deaths: 12},
    //           {name: 'Zeus', kills: 5, deaths: 3},
    //           {name: 'lolyou', kills: 11, deaths: 6}
    //         ]
    //       }
    //     ]
    //   };
    // }


}
