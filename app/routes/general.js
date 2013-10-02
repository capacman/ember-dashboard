
var GeneralRoute=Ember.Route.extend({
    model: function () {
        return Ember.$.getJSON('https://mobildb.turkcell.com.tr/dashboard/counters');
    }
});

export default GeneralRoute;