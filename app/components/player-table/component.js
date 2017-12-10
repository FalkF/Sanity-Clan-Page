import Component from '@ember/component'
import Table from 'ember-light-table'
import generateKD from '../../utils/generate-kd'
import { argument } from '@ember-decorators/argument'
import { required } from '@ember-decorators/argument/validation'
import { type } from '@ember-decorators/argument/type'
import { computed } from 'ember-decorators/object'
import { set } from '@ember/object'
import { columns } from './columns'

export default class extends Component {
  @required
  @argument
  players = null

  @argument
  @type('boolean')
  reverse = false

  @computed('players', 'reverse')
  get playerTable() {
    let players = this.get('players')
    const reverse = this.get('reverse')

    players.forEach(player => {
      set(player, 'kd', generateKD(player.kills, player.deaths))
    })

    return new Table(
      reverse ? columns.slice(0).reverse() : columns,
      players.sort((a, b) => {
        let x = b.score - a.score
        return x == 0 ? b.kd - a.kd : x
      })
    )
  }
}
