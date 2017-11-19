import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('routes.news',  {path: '/news'});
  this.route('routes.players',  {path: '/players'});
  this.route('routes.scores',  {path: '/scores'});
});

export default Router;
