/*
 * les lignes suivantes sont seulement pour avoir le reload de la pageXOffset :D
 */
window.LiveReloadOptions = {host: 'localhost'};
require('livereload-js');


window._ = require('underscore'); // Backbone can't see it otherwise

var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
Backbone.$ = window.$; // Use the jQuery from the script tag


var HelloWorld = Marionette.LayoutView.extend({
    el: '#app-hook',
    template: require('./templates/layout.html')
});

console.log($('#app-hook'))
var hello = new HelloWorld();
hello.render();