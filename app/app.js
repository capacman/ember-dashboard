import Resolver from 'resolver';
import router from 'appkit/router';
import UserView from 'appkit/views/users';

var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'appkit', // TODO: loaded via config
  Resolver: Resolver,
  Router: Ember.Router.extend({
    router: router
  }),
  UserView:UserView
});


export default App;
