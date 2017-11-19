import { attr } from 'ember-decorators/data';
import Model from 'ember-data/model';

export default class extends Model {
  
    @attr('date') date

     @attr('string') type

    @attr('string') map

    @attr() teams

}
