import attr from 'ember-data/attr';
import Model from 'ember-data/model';

export default Model.extend({
    date: attr('date'),

    type: attr('string'),

    a: attr('string'),

    b: attr('string'),

    teams: attr()

});
