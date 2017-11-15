import { helper } from '@ember/component/helper';
import { get, set } from '@ember/object';
import Table from 'ember-light-table';

export function playerTable(params/*, hash*/) {
  const columns = [{
    label: 'Player',
    valuePath: 'name',
    width: '100px',
  }, {
    label: 'Kills',
    valuePath: 'kills',
    width: '70px'
  }, {
    label: 'Deaths',
    valuePath: 'deaths',
    width: '70px'
  }, {
    label: 'Ø',
    valuePath: 'kd',
    width: '70px'
  }];

  var [team] = params;
  team.players.forEach(player => {
    let kd = player.kills / player.deaths
    kd = Number.isInteger(kd) ? kd : kd.toFixed(1)
    set(player, 'kd', kd)
  })

return new Table(columns, team.players)
}

export default helper(playerTable);
