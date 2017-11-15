import Component from '@ember/component';
import { get, set } from '@ember/object';
import {
  computed,
  action
} from 'ember-decorators/object';
import Table from 'ember-light-table';
import { A } from '@ember/array';

export default class extends Component {
  @computed('teams')
  get roundsPlayed() {
    const teams = this.get('teams')
    
    return teams.map(team => team.rounds).reduce((a, b) => a + b)
  }

  @computed('match') get teams() {
   const match = this.get('match');

    let teams = [];
    for(let i = 0; i < match.get('teams').length; i++) {
      teams.push(match.get('teams')[i]);
    }
    return teams
  }
}
