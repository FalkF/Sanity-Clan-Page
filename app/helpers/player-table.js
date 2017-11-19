import { helper } from '@ember/component/helper';
import Table from 'ember-light-table';
import generateKD from "../utils/generate-kd";

export function playerTable(params/*, hash*/) {
  let [players, flip] = params;
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

  players.forEach(player => { //
    player.kd = generateKD(player.kills, player.deaths)
  })

  return new Table(flip ? columns.reverse() : columns, players)
}

export default helper(playerTable);
