var StatusRoute = Ember.Route.extend({
  model: function() {
      return Ember.$.getJSON('https://mobildb.turkcell.com.tr/status');
  }
});

export default StatusRoute;