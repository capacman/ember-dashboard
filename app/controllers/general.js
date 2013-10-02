var GeneralController = Ember.ObjectController.extend({
    currentPage: 0,
    islastPage: false,
    isFirstPage: function () {
        return this.get('currentPage') === 0;
    }.property('currentPage'),
    applicationsCount: function () {
        return this.get('model').findBy('name', 'numberOfApplications').counter;
    }.property('model'),
    adminsCount: function () {
        return this.get('model').findBy('name', 'numberOfAdminUsers').counter;
    }.property('model'),
    organizationsCount: function () {
        return this.get('model').findBy('name', 'numberOfOrganizations').counter;
    }.property('model'),
    applications: function () {
        var result = Ember.ArrayProxy.create({content: []});
        var self=this;
        Ember.$.getJSON("https://mobildb.turkcell.com.tr/dashboard/appsProperties?start=" + this.get('currentPage') * 10 + "&count=10").then(function (response) {
            if (response.length < 10)
                self.set('isLastPage', true);
            else
                self.set('isLastPage', false);
            response.forEach(function (item) {
                result.pushObject({
                    uuid: item.uuid,
                    username: item.name.split('/')[0],
                    appname: item.name.split('/')[1],
                    usercount: item.userCount
                });
            });
        });
        return result;
    }.property('currentPage'),

    actions: {
        previous: function () {
            this.set('currentPage', this.get('currentPage') - 1);
        },

        next: function () {
            this.set('currentPage', this.get('currentPage') + 1);
        }
    }
});

export default GeneralController;