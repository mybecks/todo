Todo = Backbone.Model.extend({
    defaults:{
        id:0,
        name: '',
        parentId: 0,
        prio: 0
    },
    initialize:function(){

    },
    setParent:function(parent){
        this.set({parentId:parentId});
    }
});
