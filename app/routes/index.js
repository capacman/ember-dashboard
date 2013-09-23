
var IndexRoute = Ember.Route.extend({
    redirect: function() {
        this.transitionTo('status');
    }
});

export default IndexRoute;