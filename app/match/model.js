import attr from 'ember-data/attr';
import Model from 'ember-data/model';

export default Model.extend({
    date: attr('date'),

    type: attr('string'),

    map: attr('string'),

    teams: attr()

});
