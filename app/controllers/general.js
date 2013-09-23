var GeneralController = Ember.ObjectController.extend({
    applicationsCount: function(){
        return this.get('model').findBy('name','numberOfApplications').counter;
    }.property('model'),
    adminsCount: function(){
        return this.get('model').findBy('name','numberOfAdminUsers').counter;
    }.property('model'),
    organizationsCount: function(){
        return this.get('model').findBy('name','numberOfOrganizations').counter;
    }.property('model')
});

export default GeneralController;