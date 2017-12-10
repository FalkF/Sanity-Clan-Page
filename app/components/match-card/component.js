import Component from '@ember/component'
import { argument } from '@ember-decorators/argument'
import { required } from '@ember-decorators/argument/validation'
import { type } from '@ember-decorators/argument/type'
import { get } from '@ember/object'
import { computed } from 'ember-decorators/object'

export default class extends Component {
  @required
  @argument
  @type('object')
  match = null

  @computed('match.teams')
  get roundsPlayed() {
    const teams = get(this, 'match.teams')

    if (teams === undefined) return

    return teams.map(team => team.rounds).reduce((a, b) => a + b)
  }
}
