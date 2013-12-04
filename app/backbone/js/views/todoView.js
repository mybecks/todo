(function ($) {
TodoView = Backbone.View.extend({
    el: $("body"),
    initialize: function(){
        alert("Alerts suck.");
    },

    events: {
        "click #add-todo": "addTodo"
    },

    addTodo: function( event ){
         // Button clicked, you can access the element that was clicked with event.currentTarget
        alert( "Search for "  );
    }
});
})(jQuery);
