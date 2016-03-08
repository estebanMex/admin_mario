/**
 * Created by esteban on 08/03/16.
 */

var ContactManager = new Marionette.Application();


/* **********************************************
 ********** COLLECTIONS & MODELS
 ********************************************** */
ContactManager.ContactModel = Backbone.Model.extend({
    defaults: {
        phoneNumber: "No phone number"
    }
});

ContactManager.ContactCollection = Backbone.Collection.extend({
    model: ContactManager.ContactModel
});

/***********************************************
 ********** VIEWS
 ***********************************************/
ContactManager.ContactItemView = Marionette.ItemView.extend({
    template: "#contact-list-item",
    tagName: 'li',
    events: {
        "click": "alertPhoneNumber"
    },

    alertPhoneNumber: function () {
        alert(this.model.escape("phoneNumber"));
    }
});

ContactManager.ContactsView = Marionette.CollectionView.extend({
    tagName: "ul",
    childView: ContactManager.ContactItemView,
    comparator: 'firstName'
});

var RegionContainer = Marionette.LayoutView.extend({
    el: "#app-container",

    regions: {
        main: "#main-region",
        secondary: "#sec-region"
    }
});


/* **********************************************
 ********** EVENTS
 ********************************************** */
ContactManager.on("before:start", function () {
    ContactManager.regions = new RegionContainer();

});

ContactManager.on("start", function () {

    var contacts = new ContactManager.ContactCollection([
        {
            firstName: "fbob",
            lastName: "eponge",
            phoneNumber: "555-0167"

        }, {
            firstName: "bob1",
            lastName: "eponge",
            phoneNumber: "555-0167"

        }, {
            firstName: "gbob2",
            lastName: "eponge",
            phoneNumber: "555-0167"

        }, {
            firstName: "tbob3",
            lastName: "eponge",
            phoneNumber: "555-0167"

        }, {
            firstName: "kbob4",
            lastName: "eponge",
            phoneNumber: "555-0167"

        }
    ]);

    var contactsListView = new ContactManager.ContactsView({collection: contacts});
    var contactsListView2 = new ContactManager.ContactsView({collection: contacts});

    ContactManager.regions.main.show(contactsListView);
    ContactManager.regions.main.show(contactsListView2);

});

//    START APP
ContactManager.start();