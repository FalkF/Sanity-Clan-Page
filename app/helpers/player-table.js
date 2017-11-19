import { helper } from '@ember/component/helper';
import Table from 'ember-light-table';

export function playerTable(params/*, hash*/) {
  const columns = [{ // TODO move
    label: 'Player',
    valuePath: 'name',
    width: '120px',
  }, {
    label: 'Score',
    valuePath: 'score',
    width: '80px'
  },{
    label: 'Objectives',
    valuePath: 'objectives',
    width: '100px'
  },{
    label: 'K',
    valuePath: 'kills',
    width: '40px'
  }, {
    label: 'D',
    valuePath: 'deaths',
    width: '40px'
  }, {
    label: 'Ø',
    valuePath: 'kd',
    width: '50px'
  }]

  var [players] = params;
  players.forEach(player => {
    if (player.deaths === 0 || player.kills === 0) {
      return player.kd = player.kills
    }

    const kd = player.kills / player.deaths
    return player.kd = Number.isInteger(kd) ? kd : kd.toFixed(1)
  })

  return new Table(columns, players)
}

export default helper(playerTable);
