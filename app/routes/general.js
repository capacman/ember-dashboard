
var GeneralRoute=Ember.Route.extend({
    model: function () {
        return counters;
    }
});

var counters = [ {
    "id" : 1,
    "name" : "numberOfApplications",
    "counter" : 6
}, {
    "id" : 2,
    "name" : "numberOfAdminUsers",
    "counter" : 1
}, {
    "id" : 3,
    "name" : "numberOfOrganizations",
    "counter" : 1
} ];

export default GeneralRoute;