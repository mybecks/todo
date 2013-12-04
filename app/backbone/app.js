(function ($) {
AppView = Backbone.View.extend({
	el: $("body"),
	events: {
        "click #add-todo":  "showPrompt"
    },
    showPrompt: function () {
        var task_name = prompt("Who is your friend?");
    }
});

var appview = new AppView();

})(jQuery);
