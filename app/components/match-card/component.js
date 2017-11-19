import Component from '@ember/component';
import { get } from '@ember/object';
import { computed } from 'ember-decorators/object';

export default class extends Component {

  @computed('match')
  get teams() {
    const match = this.get('match');

    let teams = [];
    for(let i = 0; i < match.get('teams').length; i++) {
      teams.push(match.get('teams')[i]);
    }

    return teams
  }

  @computed('teams')
  get roundsPlayed() {
    const teams = this.get('teams')

    return teams.map(team => team.rounds).reduce((a, b) => a + b)
  }

}
