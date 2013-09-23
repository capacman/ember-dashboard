var StatusController = Ember.ObjectController.extend({
    abtractBatcher: function(){
        return this.get('model').status['com.usergrid.count.AbstractBatcher'];
    }.property('model'),
    cassandraSubmitter:function(){
        return this.get('model').status['com.usergrid.count.CassandraSubmitter'];
    }.property('model'),
    meteringFilter:function(){
        return this.get('model').status['org.usergrid.rest.filters.MeteringFilter'];
    }.property('model')
});

export default StatusController;